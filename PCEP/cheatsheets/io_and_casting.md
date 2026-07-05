# 📝 Cheat Sheet: Entrada/Salida y Casting

### 1. Parámetros de print()
*   `sep`: Separador entre argumentos (por defecto un espacio `" "`).
*   `end`: Carácter impreso al final (por defecto salto de línea `"\n"`).
*   Ejemplo: `print("A", "B", sep="-", end="")` -> imprime `"A-B"` sin saltar de línea.

### 2. Conversión de Tipos (Casting)
*   `int(x)`: Convierte a entero (si es flotante, remueve decimales truncando hacia 0. `int(-2.9)` es `-2`).
*   `float(x)`: Convierte a flotante.
*   `str(x)`: Convierte a representación de texto.
*   `bool(x)`: Devuelve `False` únicamente para valores vacíos o cero (`0`, `0.0`, `""`, `[]`, `None`). Para cualquier otro valor devuelve `True`.
