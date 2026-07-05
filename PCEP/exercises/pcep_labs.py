#!/usr/bin/env python3
"""
PCEP Practice Labs & Coding Exercises
-----------------------------------
Este archivo contiene 10 laboratorios prácticos alineados con los objetivos oficiales de PCEP.
Cada función tiene una especificación clara. Al ejecutar el archivo, el motor unittest integrado
validará tus respuestas de forma automática.
"""

def lab_1_temperature_converter(fahrenheit: float) -> float:
    """
    Convierte la temperatura dada en grados Fahrenheit a Celsius.
    Fórmula: C = (F - 32) * 5/9
    El resultado debe redondearse a 2 decimales.
    """
    return round((fahrenheit - 32) * 5.0 / 9.0, 2)


def lab_2_identifier_validator(name: str) -> bool:
    """
    Valida si una cadena de texto es un identificador de variable válido en Python.
    Reglas:
    - Debe comenzar con una letra (a-z, A-Z) o un guion bajo (_).
    - Los caracteres siguientes solo pueden ser letras, dígitos (0-9) o guiones bajos.
    - No puede ser una palabra reservada (para simplificar, solo valida: "import", "if", "else", "for", "while").
    """
    if not name:
        return False
    if name in {"import", "if", "else", "for", "while"}:
        return False
    
    first = name[0]
    if not (first.isalpha() or first == "_"):
        return False
        
    for char in name[1:]:
        if not (char.isalnum() or char == "_"):
            return False
            
    return True


def lab_3_numeric_base_sum(bin_str: str, hex_str: str) -> int:
    """
    Recibe un string representando un número binario (ej. "101")
    y otro representando un número hexadecimal (ej. "A").
    Debe parsearlos a entero y retornar la suma de ambos.
    """
    return int(bin_str, 2) + int(hex_str, 16)


def lab_4_logical_operations(a: bool, b: bool, c: bool) -> bool:
    """
    Retorna el resultado de evaluar: NOT (a AND b) OR (c AND NOT a)
    """
    return not (a and b) or (c and not a)


def lab_5_grade_evaluator(score: int) -> str:
    """
    Evalúa una calificación numérica de 0 a 100 y retorna una letra:
    - 90 o más: "A"
    - 80 a 89: "B"
    - 70 a 79: "C"
    - Menos de 70: "F"
    """
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "F"


def lab_6_sum_multiples(n: int) -> int:
    """
    Suma todos los múltiplos de 3 o de 5 que sean menores estrictos que n (n > 0).
    Ejemplo: si n = 10, los múltiplos son 3, 5, 6, 9. La suma es 23.
    """
    total = 0
    for i in range(1, n):
        if i % 3 == 0 or i % 5 == 0:
            total += i
    return total


def lab_7_remove_duplicates(items: list) -> list:
    """
    Elimina los elementos duplicados de la lista manteniendo el orden de aparición original.
    Ejemplo: [1, 2, 2, 3, 1] -> [1, 2, 3]
    """
    seen = set()
    result = []
    for item in items:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result


def lab_8_word_counter(text: str) -> dict:
    """
    Cuenta la frecuencia de cada palabra en un texto.
    Ignora mayúsculas/minúsculas y asume que las palabras están separadas únicamente por espacios.
    Ejemplo: "Hola hola mundo" -> {"hola": 2, "mundo": 1}
    """
    if not text.strip():
        return {}
    words = text.lower().split()
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1
    return freq


def lab_9_safe_division(a: float, b: float) -> float:
    """
    Divide a entre b. Si ocurre una división por cero (ZeroDivisionError),
    debe capturar la excepción y retornar 0.0.
    """
    try:
        return a / b
    except ZeroDivisionError:
        return 0.0


def lab_10_keyword_args_processor(**kwargs) -> str:
    """
    Recibe múltiples argumentos keyword. Debe retornar un string que los junte
    en el formato "clave=valor, clave=valor..." ordenados alfabéticamente por la clave.
    Ejemplo: processor(name="Alice", age=25) -> "age=25, name=Alice"
    """
    sorted_items = sorted(kwargs.items())
    parts = [f"{k}={v}" for k, v in sorted_items]
    return ", ".join(parts)


# =====================================================================
# AUTO-VALIDADOR DE LABORATORIOS (NO MODIFICAR)
# =====================================================================
import unittest

class TestPCEPLabs(unittest.TestCase):
    def test_lab_1(self):
        self.assertEqual(lab_1_temperature_converter(32), 0.0)
        self.assertEqual(lab_1_temperature_converter(212), 100.0)
        self.assertEqual(lab_1_temperature_converter(98.6), 37.0)

    def test_lab_2(self):
        self.assertTrue(lab_2_identifier_validator("_variable"))
        self.assertTrue(lab_2_identifier_validator("var_123"))
        self.assertFalse(lab_2_identifier_validator("123var"))
        self.assertFalse(lab_2_identifier_validator("import"))
        self.assertFalse(lab_2_identifier_validator("my-var"))

    def test_lab_3(self):
        self.assertEqual(lab_3_numeric_base_sum("101", "A"), 15)
        self.assertEqual(lab_3_numeric_base_sum("0", "0"), 0)

    def test_lab_4(self):
        self.assertTrue(lab_4_logical_operations(True, False, True))
        self.assertTrue(lab_4_logical_operations(False, False, False))
        self.assertFalse(lab_4_logical_operations(True, True, False))

    def test_lab_5(self):
        self.assertEqual(lab_5_grade_evaluator(95), "A")
        self.assertEqual(lab_5_grade_evaluator(85), "B")
        self.assertEqual(lab_5_grade_evaluator(75), "C")
        self.assertEqual(lab_5_grade_evaluator(65), "F")

    def test_lab_6(self):
        self.assertEqual(lab_6_sum_multiples(10), 23)
        self.assertEqual(lab_6_sum_multiples(16), 60)

    def test_lab_7(self):
        self.assertEqual(lab_7_remove_duplicates([1, 2, 2, 3, 1]), [1, 2, 3])
        self.assertEqual(lab_7_remove_duplicates(["a", "b", "a"]), ["a", "b"])

    def test_lab_8(self):
        self.assertEqual(lab_8_word_counter("Hola hola mundo"), {"hola": 2, "mundo": 1})
        self.assertEqual(lab_8_word_counter(""), {})

    def test_lab_9(self):
        self.assertEqual(lab_9_safe_division(10, 2), 5.0)
        self.assertEqual(lab_9_safe_division(5, 0), 0.0)

    def test_lab_10(self):
        self.assertEqual(lab_10_keyword_args_processor(name="Alice", age=25), "age=25, name=Alice")
        self.assertEqual(lab_10_keyword_args_processor(), "")

if __name__ == "__main__":
    print("\n--- Ejecutando Validador de Laboratorios PCEP ---\n")
    unittest.main()
