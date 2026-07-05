#!/usr/bin/env python3
"""
Demostración de nombrado de variables y asociatividad en Python.
"""

def main():
    print("--- Ejemplo de Variables ---")
    
    # 1. Asignación múltiple
    a = b = c = 50
    print(f"Asignación encadenada (a, b, c): {a}, {b}, {c}")
    
    # 2. Desestructuración e intercambio (Swapping)
    x, y = 10, 20
    print(f"Antes del intercambio: x={x}, y={y}")
    x, y = y, x
    print(f"Después del intercambio: x={x}, y={y}")
    
    # 3. Identificadores válidos
    _valid_start = "Empiezo con guion bajo"
    var_with_numbers_123 = "Tengo números al final"
    print(f"Válidos: {_valid_start} | {var_with_numbers_123}")

if __name__ == "__main__":
    main()
