#!/usr/bin/env python3
"""
Demostración de scopes de variables (local vs global) en Python.
"""

counter = 100  # Variable global

def increment_local():
    # Intenta modificar pero crea una variable local homónima
    counter = 200
    print(f"Dentro de increment_local: {counter}")

def increment_global():
    global counter
    counter += 10
    print(f"Dentro de increment_global: {counter}")

def main():
    print("--- Demostración de Scopes ---")
    print(f"Valor inicial global: {counter}")
    increment_local()
    print(f"Después de increment_local (global no cambia): {counter}")
    increment_global()
    print(f"Después de increment_global (global modificado): {counter}")

if __name__ == "__main__":
    main()
