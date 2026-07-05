#!/usr/bin/env python3
"""
PCEP Interactive Exam Simulator (Platform Version)
--------------------------------------------------
Loads mock questions dynamically from data/questions/*.json, runs an exam,
and reports performance analytics by syllabus module, identifying areas to improve.
"""

import os
import json
import time
import random
from pathlib import Path

# Resolver la ruta base del proyecto
BASE_DIR = Path(__file__).resolve().parent.parent.parent
QUESTIONS_DIR = BASE_DIR / "data" / "questions"

def load_all_questions() -> list:
    """Carga dinámicamente todas las preguntas desde los archivos JSON en data/questions/."""
    all_questions = []
    
    if not QUESTIONS_DIR.exists():
        print(f"Error: Directorio de preguntas no encontrado en: {QUESTIONS_DIR}")
        return all_questions
        
    for json_file in QUESTIONS_DIR.glob("*.json"):
        try:
            with open(json_file, "r", encoding="utf-8") as f:
                data = json.load(f)
                if isinstance(data, list):
                    all_questions.extend(data)
        except Exception as e:
            print(f"Error cargando {json_file.name}: {e}")
            
    return all_questions

def run_simulator(mode: int, questions_list: list):
    """Ejecuta el examen y calcula estadísticas por categoría."""
    if not questions_list:
        print("La base de datos de preguntas está vacía.")
        return

    # Selección de preguntas según el modo
    if mode == 5:
        # Examen completo aleatorio de 10 preguntas (o el máximo disponible)
        exam_questions = random.sample(questions_list, min(len(questions_list), 10))
        timed = True
    elif mode == 0:
        exam_questions = questions_list
        timed = False
    else:
        # Filtrar por dificultad
        diff_map = {1: [1, 2], 2: [3], 3: [4, 5]}
        allowed_diffs = diff_map.get(mode, [1, 2, 3, 4, 5])
        exam_questions = [q for q in questions_list if q.get("difficulty", 3) in allowed_diffs]
        timed = False

    if not exam_questions:
        print("No hay preguntas que coincidan con la dificultad del modo seleccionado.")
        return

    print("\n" + "="*60)
    print(f"  INICIANDO PLATAFORMA DE ENTRENAMIENTO PCEP (Modo: {mode})")
    print(f"  Preguntas a responder: {len(exam_questions)}")
    if timed:
        print("  Tiempo Límite: 15 minutos (Modo Simulador Real)")
    print("="*60 + "\n")

    score = 0
    start_time = time.time()
    results = []

    # Bucle de preguntas
    for idx, q in enumerate(exam_questions):
        print(f"Pregunta {idx + 1} de {len(exam_questions)} [Módulo: {q.get('module').upper()} | {q.get('topic')}] (Dificultad: {'⭐'*q.get('difficulty')})")
        print("-" * 50)
        print(q["question"])
        print()
        for opt in q["options"]:
            print(opt)
        print("-" * 50)
        
        user_ans = ""
        while user_ans not in {"A", "B", "C", "D"}:
            user_ans = input("Ingresa tu respuesta (A, B, C o D): ").strip().upper()
        
        is_correct = (user_ans == q["correct"])
        if is_correct:
            score += 1
            
        results.append({
            "q": q,
            "user": user_ans,
            "correct": is_correct
        })
        print()

    end_time = time.time()
    elapsed = end_time - start_time
    pct = (score / len(exam_questions)) * 100
    passed = pct >= 70.0

    print("\n" + "="*60)
    print("  RESULTADOS DE LA EVALUACIÓN")
    print("="*60)
    print(f"Respuestas Correctas: {score}/{len(exam_questions)}")
    print(f"Porcentaje de Aciertos: {pct:.1f}%")
    print(f"Tiempo empleado: {elapsed:.1f} segundos")
    print(f"Estado: {'APROBADO (PASSED) 🎉' if passed else 'REPROBADO (FAILED) ❌'}")
    print("="*60 + "\n")

    # --- MOTOR DE ANALYTICS ---
    print("="*60)
    print("  MÉTRICAS DE RENDIMIENTO POR MÓDULO")
    print("="*60)
    
    # Agrupar estadísticas
    module_stats = {}
    for res in results:
        mod = res["q"].get("module", "otros")
        if mod not in module_stats:
            module_stats[mod] = {"total": 0, "correct": 0}
        module_stats[mod]["total"] += 1
        if res["correct"]:
            module_stats[mod]["correct"] += 1

    needs_improvement = []
    
    for mod, stats in module_stats.items():
        mod_pct = (stats["correct"] / stats["total"]) * 100
        bar_len = int(mod_pct / 10)
        bar = "█" * bar_len + "░" * (10 - bar_len)
        print(f"{mod.upper():<15} [{bar}] {mod_pct:>5.1f}% ({stats['correct']}/{stats['total']})")
        if mod_pct < 70.0:
            needs_improvement.append(mod)

    print()
    if needs_improvement:
        print("⚠️ RECOMENDACIÓN DE ESTUDIO:")
        print("Necesitas repasar de forma prioritaria los siguientes módulos:")
        for mod in needs_improvement:
            print(f"  ➔ Módulo: {mod.upper()} (Syllabus PCEP)")
    else:
        print("✨ ¡Excelente! Tienes un rendimiento óptimo en todas las áreas evaluadas.")
    print("="*60 + "\n")

    input("Presiona ENTER para ver la revisión de respuestas con sus explicaciones...")

    print("\n" + "="*60)
    print("  REVISIÓN DETALLADA DE RESPUESTAS")
    print("="*60)
    for idx, res in enumerate(results):
        q = res["q"]
        print(f"\nPregunta {idx + 1}: {q['topic']} | Dificultad: {'⭐'*q.get('difficulty')}")
        print(f"Tu respuesta: {res['user']} | Respuesta correcta: {q['correct']} ({'✔' if res['correct'] else '❌'})")
        print(f"Explicación: {q['explanation']}")
        print("-" * 50)

if __name__ == "__main__":
    questions_list = load_all_questions()
    
    if not questions_list:
        print("No se encontraron preguntas en la base de datos.")
        sys.exit(1)
        
    while True:
        print("\n" + "="*60)
        print("  PCEP MASTER TRAINING SIMULATOR - MENU PRINCIPAL")
        print("="*60)
        print(f"  Preguntas cargadas en base de datos: {len(questions_list)}")
        print("-" * 60)
        print("1. Modo Práctica: Fácil  (Dificultad ⭐ a ⭐⭐)")
        print("2. Modo Práctica: Medio  (Dificultad ⭐⭐⭐)")
        print("3. Modo Práctica: Dificil (Dificultad ⭐⭐⭐⭐ a ⭐⭐⭐⭐⭐)")
        print("4. Modo Completo: Responder todas las preguntas de la BD")
        print("5. Modo Simulador Real: 10 preguntas aleatorias con Analytics")
        print("6. Salir")
        print("="*60)
        
        choice = input("Elige una opción (1-6): ").strip()
        if choice in {"1", "2", "3", "4", "5"}:
            mode_val = int(choice)
            if choice == "4":
                mode_val = 0
            run_simulator(mode_val, questions_list)
        elif choice == "6":
            print("\n¡Mucho éxito en tu certificación oficial PCEP!")
            sys.exit(0)
        else:
            print("\nOpción no válida. Inténtalo de nuevo.")
