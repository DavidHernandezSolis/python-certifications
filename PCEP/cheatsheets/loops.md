# 📝 Cheat Sheet: Bucles y Repetición

### 1. range(start, stop, step)
*   El límite `stop` está siempre **excluido**.
*   `range(5)` -> `0, 1, 2, 3, 4`
*   `range(2, 5)` -> `2, 3, 4`
*   `range(5, 1, -1)` -> `5, 4, 3, 2` (el 1 queda fuera).

### 2. Sentencias de Control
*   `break`: Sale del bucle de inmediato.
*   `continue`: Salta el resto de la iteración actual y avanza a la evaluación de la siguiente iteración.

### 3. Cláusula else en Bucles
*   Ejecuta su código si el bucle termina de forma natural (cuando se agotan las iteraciones o la condición lógica es falsa).
*   **Si el bucle sale mediante break, el bloque else se omite.**
