# 📝 Cheat Sheet: Funciones y Parámetros

### 1. Parámetros vs Argumentos
*   **Parámetros:** Variables declaradas en la firma de la función (ej. `def f(x, y):`).
*   **Argumentos:** Valores pasados en la llamada (ej. `f(5, 10)`).

### 2. Tipos de Argumentos en la llamada
*   **Posicionales:** Asignados por posición.
*   **Keyword (nombrados):** Asignados por nombre (ej. `y=10`).
*   **REGLA:** Argumentos posicionales siempre van **antes** de los keyword (ej. `f(5, y=10)` es correcto; `f(x=5, 10)` es `SyntaxError`).

### 3. Directiva global
*   Para modificar una variable definida a nivel de módulo (global) dentro de una función, se debe declarar como `global` en la primera línea de la función.
