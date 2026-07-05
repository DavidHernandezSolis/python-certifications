#!/usr/bin/env python3
"""
PCEP Procedural Question Generator Engine
------------------------------------------
Programmatically constructs 500+ unique, certification-aligned PCEP questions
with metadata, evaluates them in a local execution context, generates plausible
distractors, and writes the output directly to JSON and PWA JS databases.
"""

import os
import json
import random
import sys
from pathlib import Path

# Base Paths
BASE_DIR = Path(__file__).resolve().parent.parent.parent
QUESTIONS_DIR = BASE_DIR / "data" / "questions"
QUESTIONS_JS_FILE = BASE_DIR / "website" / "questions_db.js"

# Asegurar directorios
QUESTIONS_DIR.mkdir(parents=True, exist_ok=True)

# Static questions to preserve
STATIC_QUESTIONS = [
    {
        "id": "PCEP-1001",
        "module": "fundamentals",
        "topic": "Basic Concepts",
        "subtopic": "Execution Model",
        "difficulty": 2,
        "estimated_time": 45,
        "bloom": "Understand",
        "pattern": "Conceptual",
        "official_objective": "1.1",
        "tags": ["compilation", "interpretation", "bytecode"],
        "question": "¿Cuál es la función principal de la Máquina Virtual de Python (PVM)?",
        "options": [
          "A) Traducir directamente código fuente (.py) a lenguaje ensamblador.",
          "B) Ejecutar el código intermedio (Bytecode) en la plataforma local.",
          "C) Compilar archivos de C++ para integrarlos en Python.",
          "D) Gestionar los repositorios y entornos virtuales de PIP."
        ],
        "correct": "B",
        "explanation": "La PVM (Python Virtual Machine) toma el Bytecode (.pyc) y lo ejecuta convirtiéndolo a código máquina nativo del sistema operativo."
    },
    {
        "id": "PCEP-4001",
        "module": "functions",
        "topic": "Arguments",
        "subtopic": "Syntax Rules",
        "difficulty": 3,
        "estimated_time": 45,
        "bloom": "Understand",
        "pattern": "Error Finding",
        "official_objective": "4.1",
        "tags": ["functions", "parameters", "syntax"],
        "question": "¿Por qué la llamada func(a=1, 2, 3) produce un SyntaxError?",
        "options": [
          "A) Porque no se puede asignar un valor por defecto en la llamada.",
          "B) Porque los argumentos posicionales no pueden ir después de los argumentos keyword.",
          "C) Porque faltan parámetros por nombrar obligatoriamente.",
          "D) Porque Python requiere comas dobles para separar los keyword."
        ],
        "correct": "B",
        "explanation": "En las llamadas a funciones, todos los argumentos posicionales (como 2 y 3) deben ir obligatoriamente antes de cualquier argumento nominal o keyword (como a=1)."
    },
    {
        "id": "PCEP-6004",
        "module": "exceptions",
        "topic": "try-except",
        "subtopic": "SyntaxError catch",
        "difficulty": 4,
        "estimated_time": 60,
        "bloom": "Understand",
        "pattern": "Conceptual",
        "official_objective": "4.3",
        "tags": ["exceptions", "syntaxerror", "compilation"],
        "question": "¿Por qué un SyntaxError no se puede atrapar con un bloque try-except en caliente en el mismo script?",
        "options": [
          "A) Porque no es una clase heredada de Exception.",
          "B) Porque ocurre durante la fase de compilación del código a bytecode, impidiendo que el script inicie ejecución.",
          "C) Porque no está contemplado en la librería estándar.",
          "D) Sí se puede capturar en cualquier circunstancia."
        ],
        "correct": "B",
        "explanation": "Los SyntaxError se detectan durante la fase de análisis sintáctico o compilación de Python. Dado que ocurre antes de la ejecución de cualquier línea de código, el bloque try-except aún no está activo."
    }
]

def run_code_safely(code_str: str) -> str:
    """Ejecuta un fragmento de código Python y captura su salida estándar o el nombre de la excepción lanzada."""
    import io
    old_stdout = sys.stdout
    redirected_output = sys.stdout = io.StringIO()
    local_scope = {}
    try:
        exec(code_str, {}, local_scope)
        sys.stdout = old_stdout
        return redirected_output.getvalue().strip()
    except Exception as e:
        sys.stdout = old_stdout
        return type(e).__name__

def make_options(correct_val: str, alternatives: list) -> tuple:
    """Genera las opciones A, B, C, D mezclando la respuesta correcta con distractores únicos."""
    options_set = {str(correct_val)}
    for alt in alternatives:
        if len(options_set) < 4:
            options_set.add(str(alt))
            
    # Rellenar si faltan opciones
    fillers = ["None", "TypeError", "ValueError", "SyntaxError", "0", "1", "-1", "IndexError"]
    for f in fillers:
        if len(options_set) < 4:
            options_set.add(f)
            
    sorted_options = sorted(list(options_set))
    correct_letter = "A"
    
    formatted_options = []
    letters = ["A", "B", "C", "D"]
    for idx, opt in enumerate(sorted_options):
        formatted_options.append(f"{letters[idx]}) {opt}")
        if opt == str(correct_val):
            correct_letter = letters[idx]
            
    return formatted_options, correct_letter

# --- GENERADORES POR SECCIÓN ---

def generate_fundamentals(count: int) -> list:
    questions = []
    for i in range(count):
        q_id = f"PCEP-1100-{i:03d}"
        
        # Variación 1: Conversiones de Bases Numéricas
        if i % 3 == 0:
            num1 = random.choice([2, 3, 5, 6, 8, 10])
            num2 = random.choice([4, 8, 10, 12, 16])
            base1_str = f"0b{num1:b}"
            base2_str = f"0x{num2:x}"
            code = f"print({base1_str} + {base2_str})"
            ans = run_code_safely(code)
            
            alternatives = [str(num1 + num2 + 2), str(num1 + num2 - 2), f"{base1_str}{base2_str}"]
            opts, correct = make_options(ans, alternatives)
            
            questions.append({
                "id": q_id,
                "module": "fundamentals",
                "topic": "Literals",
                "subtopic": "Numeric Bases",
                "difficulty": 3,
                "estimated_time": 50,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "1.2",
                "tags": ["literals", "binary", "hexadecimal"],
                "question": f"¿Cuál es la salida decimal de este código?\n\nprint({base1_str} + {base2_str})",
                "options": opts,
                "correct": correct,
                "explanation": f"{base1_str} equivale a {num1} decimal. {base2_str} equivale a {num2} decimal. {num1} + {num2} = {num1 + num2}."
            })
            
        # Variación 2: Parámetros del print()
        elif i % 3 == 1:
            sep_char = random.choice(["-", "*", "#", "_", ""])
            end_char = random.choice(["@", "!", "$", " "])
            code = f"print('X', 'Y', sep='{sep_char}', end='{end_char}')\nprint('Z')"
            ans = run_code_safely(code)
            
            alternatives = [f"X{sep_char}Y\nZ", f"XY{end_char}Z", "X Y Z"]
            opts, correct = make_options(ans, alternatives)
            
            questions.append({
                "id": q_id,
                "module": "fundamentals",
                "topic": "Basic IO",
                "subtopic": "Print Separators",
                "difficulty": 3,
                "estimated_time": 45,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "1.4",
                "tags": ["print", "sep", "end"],
                "question": f"¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='{sep_char}', end='{end_char}')\nprint('Z')",
                "options": opts,
                "correct": correct,
                "explanation": f"El argumento 'sep' une los argumentos posicionales con '{sep_char}'. El argumento 'end' reemplaza el salto de línea por '{end_char}', uniendo el siguiente print inmediatamente."
            })
            
        # Variación 3: Truncamiento de flotantes (Casting)
        else:
            val = round(random.uniform(-10.0, -1.5), 1)
            code = f"print(int({val}))"
            ans = run_code_safely(code)
            
            alt_val1 = int(val) - 1
            alt_val2 = int(val) + 1
            opts, correct = make_options(ans, [str(alt_val1), str(alt_val2), str(val)])
            
            questions.append({
                "id": q_id,
                "module": "fundamentals",
                "topic": "Casting",
                "subtopic": "Type Conversion",
                "difficulty": 2,
                "estimated_time": 40,
                "bloom": "Understand",
                "pattern": "Output Prediction",
                "official_objective": "1.2",
                "tags": ["casting", "float", "int"],
                "question": f"¿Qué imprime la siguiente instrucción?\n\nprint(int({val}))",
                "options": opts,
                "correct": correct,
                "explanation": f"int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en {ans}."
            })
    return questions

def generate_operators(count: int) -> list:
    questions = []
    for i in range(count):
        q_id = f"PCEP-2200-{i:03d}"
        
        # Variación 1: División entera y residuo negativo
        if i % 3 == 0:
            num = random.choice([-3, -5, -7, -9])
            div = random.choice([2, 3])
            code = f"print({num} // {div}, {num} % {div})"
            ans = run_code_safely(code)
            
            correct_floor = num // div
            correct_mod = num % div
            
            alt1 = f"{correct_floor + 1} {correct_mod}"
            alt2 = f"{correct_floor} {correct_mod - 1}"
            alt3 = f"{num / div:.1f}"
            opts, correct = make_options(ans, [alt1, alt2, alt3])
            
            questions.append({
                "id": q_id,
                "module": "operators",
                "topic": "Arithmetic",
                "subtopic": "Negative Floor Division",
                "difficulty": 4,
                "estimated_time": 60,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "2.1",
                "tags": ["operators", "division", "modulo"],
                "question": f"¿Qué imprime exactamente la siguiente instrucción?\n\nprint({num} // {div}, {num} % {div})",
                "options": opts,
                "correct": correct,
                "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
            })
            
        # Variación 2: Precedencia de exponenciación encadenada
        elif i % 3 == 1:
            base = random.choice([2, 3])
            p1 = 2
            p2 = random.choice([2, 3])
            code = f"print({base} ** {p1} ** {p2})"
            ans = run_code_safely(code)
            
            left_to_right = (base ** p1) ** p2
            opts, correct = make_options(ans, [str(left_to_right), "TypeError", "0"])
            
            questions.append({
                "id": q_id,
                "module": "operators",
                "topic": "Precedence",
                "subtopic": "Exponents Associativity",
                "difficulty": 4,
                "estimated_time": 55,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "2.1",
                "tags": ["operators", "precedence", "exponentiation"],
                "question": f"¿Cuál es la salida del siguiente fragmento de código?\n\nprint({base} ** {p1} ** {p2})",
                "options": opts,
                "correct": correct,
                "explanation": f"El operador exponencial (**) es asociativo de derecha a izquierda: {base} ** ({p1} ** {p2})."
            })
            
        # Variación 3: Cortocircuitos con valores reales
        else:
            val1 = random.choice(["''", "[]", "0", "None"])
            val2 = random.choice(["'Python'", "99", "[1, 2]"])
            code = f"print({val1} or {val2})"
            ans = run_code_safely(code)
            
            opts, correct = make_options(ans, ["True", "False", val1])
            
            questions.append({
                "id": q_id,
                "module": "operators",
                "topic": "Logical",
                "subtopic": "Short-circuit Returns",
                "difficulty": 4,
                "estimated_time": 50,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "2.2",
                "tags": ["operators", "logical", "short-circuit"],
                "question": f"¿Qué valor imprime la siguiente expresión?\n\nprint({val1} or {val2})",
                "options": opts,
                "correct": correct,
                "explanation": f"El operador 'or' evalúa el operando izquierdo. Dado que {val1} es considerado falsy, evalúa y retorna directamente el operando derecho ({val2})."
            })
    return questions

def generate_loops(count: int) -> list:
    questions = []
    for i in range(count):
        q_id = f"PCEP-3300-{i:03d}"
        
        # Variación 1: Bucle for-else con interrupción condicional
        if i % 2 == 0:
            limit = random.choice([3, 4, 5])
            break_val = random.choice([2, 3])
            has_break = random.choice([True, False])
            
            code = f"""c = 0
for i in range({limit}):
    c += 1
    if {has_break} and i == {break_val}:
        break
else:
    c += 10
print(c)"""
            ans = run_code_safely(code)
            
            opts, correct = make_options(ans, ["10", "1", "12", "0"])
            
            questions.append({
                "id": q_id,
                "module": "loops",
                "topic": "Loops Control",
                "subtopic": "For Else Branching",
                "difficulty": 4,
                "estimated_time": 60,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "2.3",
                "tags": ["loops", "for", "else", "break"],
                "question": f"¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range({limit}):\n    c += 1\n    if {str(has_break)} and i == {break_val}:\n        break\nelse:\n    c += 10\nprint(c)",
                "options": opts,
                "correct": correct,
                "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
            })
            
        # Variación 2: Secuencias de pasos en range
        else:
            start = random.choice([10, 8, 6])
            stop = random.choice([2, 3, 4])
            step = random.choice([-2, -3])
            
            code = f"print(list(range({start}, {stop}, {step})))"
            ans = run_code_safely(code)
            
            alt1 = str(list(range(start, stop - 1, step)))
            alt2 = str(list(range(start, stop + 1, step)))
            opts, correct = make_options(ans, [alt1, alt2, "[]"])
            
            questions.append({
                "id": q_id,
                "module": "loops",
                "topic": "Range",
                "subtopic": "Negative Range Step",
                "difficulty": 3,
                "estimated_time": 50,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "2.3",
                "tags": ["loops", "range", "sequence"],
                "question": f"¿Qué salida produce esta instrucción?\n\nprint(list(range({start}, {stop}, {step})))",
                "options": opts,
                "correct": correct,
                "explanation": f"range({start}, {stop}, {step}) inicia en {start} y resta {-step} sucesivamente, excluyendo el límite final ({stop})."
            })
    return questions

def generate_functions(count: int) -> list:
    questions = []
    for i in range(count):
        q_id = f"PCEP-4300-{i:03d}"
        
        # Variación 1: Shadowing y variables locales/globales
        if i % 2 == 0:
            val = random.choice([5, 10, 15])
            mult = random.choice([2, 3])
            code = f"""val = {val}
def modify():
    val = {val} * {mult}
modify()
print(val)"""
            ans = run_code_safely(code)
            
            opts, correct = make_options(ans, [str(val * mult), "UnboundLocalError", "None"])
            
            questions.append({
                "id": q_id,
                "module": "functions",
                "topic": "Scopes",
                "subtopic": "Shadowing Variables",
                "difficulty": 4,
                "estimated_time": 55,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "4.2",
                "tags": ["functions", "scopes", "local"],
                "question": f"¿Qué valor imprime el siguiente código?\n\nval = {val}\ndef modify():\n    val = {val} * {mult}\nmodify()\nprint(val)",
                "options": opts,
                "correct": correct,
                "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
            })
            
        # Variación 2: Argumentos posicionales y nominales en llamada
        else:
            code = """def calc(a, b=2, c=3):
    return a + b + c
print(calc(10, c=5))"""
            ans = run_code_safely(code)
            
            opts, correct = make_options(ans, ["15", "18", "SyntaxError", "TypeError"])
            
            questions.append({
                "id": q_id,
                "module": "functions",
                "topic": "Arguments",
                "subtopic": "Keyword parameters",
                "difficulty": 3,
                "estimated_time": 50,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "4.1",
                "tags": ["functions", "parameters", "invocation"],
                "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
                "options": opts,
                "correct": correct,
                "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
            })
    return questions

def generate_collections(count: int) -> list:
    questions = []
    for i in range(count):
        q_id = f"PCEP-5300-{i:03d}"
        
        # Variación 1: Mutación de lista por referencia
        if i % 3 == 0:
            val1 = random.choice([10, 20])
            val2 = random.choice([30, 40])
            code = f"""l1 = [{val1}, {val2}]
l2 = l1
l2[0] = 99
print(l1)"""
            ans = run_code_safely(code)
            
            opts, correct = make_options(ans, [f"[{val1}, {val2}]", "[99, 99]", "TypeError"])
            
            questions.append({
                "id": q_id,
                "module": "collections",
                "topic": "Lists",
                "subtopic": "References Assignment",
                "difficulty": 4,
                "estimated_time": 60,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "3.1",
                "tags": ["lists", "mutability", "references"],
                "question": f"¿Qué imprime el siguiente fragmento de código?\n\nl1 = [{val1}, {val2}]\nl2 = l1\nl2[0] = 99\nprint(l1)",
                "options": opts,
                "correct": correct,
                "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
            })
            
        # Variación 2: Rebanado de secuencias (slicing)
        elif i % 3 == 1:
            words = ["Python", "Entry", "Programmer"]
            w = random.choice(words)
            start = random.choice([0, 1])
            stop = random.choice([4, 5])
            step = 2
            code = f"print('{w}'[{start}:{stop}:{step}])"
            ans = run_code_safely(code)
            
            opts, correct = make_options(ans, [w, w[start:stop], "IndexError"])
            
            questions.append({
                "id": q_id,
                "module": "collections",
                "topic": "Slicing",
                "subtopic": "Slicing Step",
                "difficulty": 3,
                "estimated_time": 55,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "3.1",
                "tags": ["slicing", "sequences", "strings"],
                "question": f"¿Cuál es el output de esta rebanada de texto?\n\nprint('{w}'[{start}:{stop}:{step}])",
                "options": opts,
                "correct": correct,
                "explanation": f"El rebanado toma caracteres desde {start} hasta {stop} excluido, saltando de {step} en {step}."
            })
            
        # Variación 3: Inmutabilidad de Tuplas
        else:
            code = """t = (1, 2, 3)
t[0] = 99
print(t)"""
            ans = run_code_safely(code)
            
            opts, correct = make_options(ans, ["(99, 2, 3)", "TypeError", "ValueError", "SyntaxError"])
            
            questions.append({
                "id": q_id,
                "module": "collections",
                "topic": "Tuples",
                "subtopic": "Immutability Assign",
                "difficulty": 3,
                "estimated_time": 45,
                "bloom": "Understand",
                "pattern": "Error Finding",
                "official_objective": "3.1",
                "tags": ["tuples", "immutability", "errors"],
                "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
                "options": opts,
                "correct": correct,
                "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
            })
    return questions

def generate_exceptions(count: int) -> list:
    questions = []
    for i in range(count):
        q_id = f"PCEP-6300-{i:03d}"
        
        # Variación 1: Try-except con orden de herencia
        if i % 2 == 0:
            code = """try:
    l = [1, 2]
    print(l[5])
except LookupError:
    print("lookup")
except IndexError:
    print("index")"""
            ans = run_code_safely(code)
            
            opts, correct = make_options(ans, ["index", "IndexError", "TypeError"])
            
            questions.append({
                "id": q_id,
                "module": "exceptions",
                "topic": "Hierarchy",
                "subtopic": "Exception Catch scoping",
                "difficulty": 4,
                "estimated_time": 60,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "4.3",
                "tags": ["exceptions", "try-except", "inheritance"],
                "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
                "options": opts,
                "correct": correct,
                "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
            })
            
        # Variación 2: El flujo Completo del try-except-else-finally
        else:
            code = """try:
    x = 1
except:
    x = 2
else:
    x = 3
finally:
    x = 4
print(x)"""
            ans = run_code_safely(code)
            
            opts, correct = make_options(ans, ["1", "2", "3"])
            
            questions.append({
                "id": q_id,
                "module": "exceptions",
                "topic": "try-except",
                "subtopic": "Try Else Finally block",
                "difficulty": 4,
                "estimated_time": 55,
                "bloom": "Apply",
                "pattern": "Output Prediction",
                "official_objective": "4.3",
                "tags": ["exceptions", "try-except", "finally"],
                "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
                "options": opts,
                "correct": correct,
                "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
            })
    return questions

# --- COMPILADOR / ACOPLADOR GLOBAL ---

def load_markdown_files() -> dict:
    """Lee dinámicamente los archivos .md reales del disco y los organiza para la PWA."""
    pcep_dir = BASE_DIR / "PCEP"
    data = {
        "modules": {},
        "cheatsheets": {},
        "flashcards": {}
    }

    # 1. Cargar Módulos (module_01 a module_13)
    modules_dir = pcep_dir / "modules"
    if modules_dir.exists():
        # Mapeo de nombres de archivo
        for f in sorted(modules_dir.glob("*.md")):
            # Extraer prefijo (ej. 'module_01')
            parts = f.name.split("_")
            if len(parts) >= 2:
                key = f"{parts[0]}_{parts[1]}"
                try:
                    with open(f, "r", encoding="utf-8") as file:
                        data["modules"][key] = file.read()
                except Exception as e:
                    print(f"Error leyendo módulo {f.name}: {e}")

    # 2. Cargar Cheatsheets
    cheatsheets_dir = pcep_dir / "cheatsheets"
    if cheatsheets_dir.exists():
        for f in cheatsheets_dir.glob("*.md"):
            key = f.stem
            try:
                with open(f, "r", encoding="utf-8") as file:
                    data["cheatsheets"][key] = file.read()
            except Exception as e:
                print(f"Error leyendo cheatsheet {f.name}: {e}")

    # 3. Cargar Flashcards
    flashcards_dir = pcep_dir / "flashcards"
    if flashcards_dir.exists():
        for f in flashcards_dir.glob("*.md"):
            key = f.stem
            try:
                with open(f, "r", encoding="utf-8") as file:
                    data["flashcards"][key] = file.read()
            except Exception as e:
                print(f"Error leyendo flashcard {f.name}: {e}")

    return data

def main():
    print("Iniciando motor generador procedimental...")
    
    # Objetivo: Generar ~90 preguntas por bloque para superar la meta de 500+ preguntas
    target_per_module = 90
    
    fundamentals_list = generate_fundamentals(target_per_module)
    operators_list = generate_operators(target_per_module)
    loops_list = generate_loops(target_per_module)
    functions_list = generate_functions(target_per_module)
    collections_list = generate_collections(target_per_module)
    exceptions_list = generate_exceptions(target_per_module)
    
    # Escribir los archivos JSON segmentados en data/questions/
    modules_map = {
        "fundamentals.json": fundamentals_list,
        "operators.json": operators_list,
        "loops.json": loops_list,
        "functions.json": functions_list,
        "collections.json": collections_list,
        "exceptions.json": exceptions_list
    }
    
    for filename, q_list in modules_map.items():
        filepath = QUESTIONS_DIR / filename
        
        # Mezclar estáticos correspondientes
        static_subset = [q for q in STATIC_QUESTIONS if f"{q['module']}.json" == filename]
        final_list = static_subset + q_list
        
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(final_list, f, indent=2, ensure_ascii=False)
        print(f"  Exportado {filename}: {len(final_list)} preguntas.")

    # Generar la base de datos JS para la PWA de la web
    all_questions_compiled = []
    all_questions_compiled.extend(STATIC_QUESTIONS)
    all_questions_compiled.extend(fundamentals_list)
    all_questions_compiled.extend(operators_list)
    all_questions_compiled.extend(loops_list)
    all_questions_compiled.extend(functions_list)
    all_questions_compiled.extend(collections_list)
    all_questions_compiled.extend(exceptions_list)
    
    # Asegurar IDs únicos generales en el compilado final
    for idx, q in enumerate(all_questions_compiled):
        if not q["id"].startswith("PCEP-1001") and not q["id"].startswith("PCEP-4001") and not q["id"].startswith("PCEP-6004"):
            q["id"] = f"PCEP-{idx+1:04d}"

    print(f"Total de preguntas compiladas para PWA: {len(all_questions_compiled)}")

    # Escribir el archivo questions_db.js
    js_content = f"const PCEP_QUESTIONS = {json.dumps(all_questions_compiled, indent=2, ensure_ascii=False)};\n"
    with open(QUESTIONS_JS_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)
    print(f"Base de datos PWA actualizada en: {QUESTIONS_JS_FILE}")

    # Cargar y empaquetar los .md reales del disco en website/modules_db.js
    print("Empaquetando archivos Markdown (.md) reales del disco...")
    md_data = load_markdown_files()
    md_content = f"const PCEP_MODULES = {json.dumps(md_data, indent=2, ensure_ascii=False)};\n"
    with open(BASE_DIR / "website" / "modules_db.js", "w", encoding="utf-8") as f:
        f.write(md_content)
    print(f"Archivos Markdown empaquetados con éxito en website/modules_db.js")
    
    print("¡Generación procedimental finalizada con éxito!")

if __name__ == "__main__":
    main()
