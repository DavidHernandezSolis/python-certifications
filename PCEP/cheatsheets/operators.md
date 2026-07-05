# 📝 Cheat Sheet: Operadores aritméticos y de bits

### 1. Operadores Aritméticos
*   `+` (Suma), `-` (Resta), `*` (Multiplicación).
*   `/` (División): **Siempre** devuelve un tipo `float` (ej. `4 / 2` es `2.0`).
*   `//` (División entera): Devuelve la parte entera truncada hacia abajo. El tipo es `int` o `float` según los operandos.
*   `%` (Módulo): Devuelve el residuo de la división entera.
*   `**` (Exponenciación): Asociatividad de **derecha a izquierda**.

### 2. Operadores a nivel de bits (Bitwise)
*   `&` (AND): Compara bit a bit (ej. `5 & 3` -> `0101 & 0011` -> `0001` -> `1`).
*   `|` (OR): Bit a bit (ej. `5 | 3` -> `0101 | 0011` -> `0111` -> `7`).
*   `^` (XOR): Exclusivo (ej. `5 ^ 3` -> `0101 ^ 0011` -> `0110` -> `6`).
*   `~` (NOT / Complemento a 1): Equivale a `-(x + 1)`.
*   `<<` (Desplazamiento izquierda), `>>` (Desplazamiento derecha).
