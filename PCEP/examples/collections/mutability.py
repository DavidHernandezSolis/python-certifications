#!/usr/bin/env python3
"""
Demostración de mutabilidad de listas e inmutabilidad de tuplas.
"""

def demonstrate_list():
    print("\n--- Demostración de Lista (Mutable) ---")
    my_list = [1, 2, 3]
    print(f"Lista inicial: {my_list} (id: {id(my_list)})")
    my_list[0] = 99
    print(f"Lista modificada: {my_list} (id: {id(my_list)} - Sigue siendo el mismo objeto)")

def demonstrate_tuple():
    print("\n--- Demostración de Tupla (Inmutable) ---")
    my_tuple = (1, 2, 3)
    print(f"Tupla inicial: {my_tuple} (id: {id(my_tuple)})")
    try:
        my_tuple[0] = 99
    except TypeError as e:
        print(f"Capturado TypeError esperado al intentar modificar: {e}")

def main():
    demonstrate_list()
    demonstrate_tuple()

if __name__ == "__main__":
    main()
