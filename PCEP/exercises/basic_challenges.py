#!/usr/bin/env python3
"""
PCEP: Basic Programming Challenges & Exercises
---------------------------------------------
Este archivo contiene retos prácticos diseñados para autoevaluar conceptos
clave de la certificación PCEP: control de flujo, operadores, bucles y colecciones.

Instrucciones:
1. Completa las funciones que tienen el marcador 'pass' o 'TODO'.
2. Ejecuta este script desde tu terminal: python3 basic_challenges.py
3. El sistema autovalidador integrado verificará tus respuestas automáticamente.
"""

def challenge_1_arithmetic_operators(a: int, b: int) -> tuple:
    """
    Reto 1: Operadores aritméticos y precedencia.
    Recibe dos números enteros. Debe retornar una tupla con:
    1. El resultado de a elevado a la potencia b.
    2. La división entera de b entre a (si a no es cero, de lo contrario 0).
    3. El residuo o módulo de b entre a (si a no es cero, de lo contrario 0).
    """
    # TODO: Implementar la lógica correcta
    potencia = a ** b
    div_entera = b // a if a != 0 else 0
    modulo = b % a if a != 0 else 0
    return (potencia, div_entera, modulo)


def challenge_2_short_circuit_logic(x: bool, y: bool, z: bool) -> bool:
    """
    Reto 2: Evaluación lógica de cortocircuito (Short-circuit).
    Retorna el resultado lógico de evaluar: (x AND y) OR (NOT x AND z)
    """
    # TODO: Implementar la expresión
    return (x and y) or (not x and z)


def challenge_3_loop_manipulation(numbers: list) -> int:
    """
    Reto 3: Sumar únicamente los números pares de la lista,
    deteniendo el bucle por completo si encontramos un número negativo.
    """
    total_sum = 0
    # TODO: Implementar el bucle for
    for num in numbers:
        if num < 0:
            break
        if num % 2 == 0:
            total_sum += num
    return total_sum


def challenge_4_dict_and_tuples(students_data: list) -> dict:
    """
    Reto 4: Diccionarios y Tuplas.
    Recibe una lista de tuplas con el formato (nombre_estudiante, calificacion).
    Debe retornar un diccionario donde:
      - La clave sea el nombre del estudiante.
      - El valor sea un booleano (True si calificacion >= 70, False de lo contrario).
    """
    result = {}
    # TODO: Implementar el procesamiento
    for name, grade in students_data:
        result[name] = grade >= 70
    return result


# =====================================================================
# SISTEMA DE VALIDACIÓN AUTOMÁTICO (NO MODIFICAR)
# =====================================================================
import unittest

class TestPCEPChallenges(unittest.TestCase):
    def test_challenge_1(self):
        self.assertEqual(challenge_1_arithmetic_operators(2, 5), (32, 2, 1))
        self.assertEqual(challenge_1_arithmetic_operators(3, 3), (27, 1, 0))
        self.assertEqual(challenge_1_arithmetic_operators(0, 5), (0, 0, 0))
        print("✔ Reto 1 (Operadores Aritméticos): Aprobado")

    def test_challenge_2(self):
        self.assertTrue(challenge_2_short_circuit_logic(True, True, False))
        self.assertFalse(challenge_2_short_circuit_logic(True, False, True))
        self.assertTrue(challenge_2_short_circuit_logic(False, True, True))
        self.assertFalse(challenge_2_short_circuit_logic(False, False, False))
        print("✔ Reto 2 (Lógica Cortocircuito): Aprobado")

    def test_challenge_3(self):
        self.assertEqual(challenge_3_loop_manipulation([2, 4, 7, 8]), 14)
        self.assertEqual(challenge_3_loop_manipulation([2, 4, -1, 8]), 6)
        self.assertEqual(challenge_3_loop_manipulation([1, 3, 5]), 0)
        print("✔ Reto 3 (Manipulación de Bucles): Aprobado")

    def test_challenge_4(self):
        data = [("Alice", 85), ("Bob", 60), ("Charlie", 70)]
        expected = {"Alice": True, "Bob": False, "Charlie": True}
        self.assertEqual(challenge_4_dict_and_tuples(data), expected)
        print("✔ Reto 4 (Diccionarios y Tuplas): Aprobado")

if __name__ == "__main__":
    print("\n--- Ejecutando Autoevaluador de Retos PCEP ---\n")
    unittest.main()
