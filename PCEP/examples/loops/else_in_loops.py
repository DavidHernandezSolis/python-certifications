#!/usr/bin/env python3
"""
Demostración de cláusulas else en bucles for y while.
"""

def test_for_loop_else(with_break: bool):
    print(f"\nEjecutando for loop con with_break={with_break}:")
    for i in range(1, 4):
        print(f"  Iteración: {i}")
        if with_break and i == 2:
            print("  [break ejecutado]")
            break
    else:
        print("  [Bucle finalizó de forma natural: else ejecutado]")

def main():
    test_for_loop_else(with_break=False)
    test_for_loop_else(with_break=True)

if __name__ == "__main__":
    main()
