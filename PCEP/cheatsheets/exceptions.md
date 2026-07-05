# 📝 Cheat Sheet: Control de Excepciones

### 1. El Bloque try-except
*   Permite atrapar errores de ejecución en el `try`.
*   El primer bloque `except` compatible con la excepción se ejecuta; los demás se omiten.

### 2. Jerarquía de Clases de Excepción Comunes
*   `BaseException`
    *   `Exception`
        *   `ArithmeticError`
            *   `ZeroDivisionError`
        *   `LookupError`
            *   `IndexError`
            *   `KeyError`
        *   `TypeError`
        *   `ValueError`

### 3. Excepciones no capturables en caliente
*   `SyntaxError`: Los errores sintácticos se producen en la fase de análisis inicial antes de la ejecución del script. Un bloque `try` no puede capturar un error de sintaxis en su propio archivo.
