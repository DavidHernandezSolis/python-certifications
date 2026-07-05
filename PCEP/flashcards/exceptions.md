# Flashcards: Excepciones

### Flashcard 1
**Front:** ¿Qué excepción se lanza si se intenta dividir un número entre `0`?
**Back:** `ZeroDivisionError`, la cual pertenece a la jerarquía de `ArithmeticError`.

---

### Flashcard 2
**Front:** ¿Puede capturarse un `SyntaxError` mediante un bloque `try-except`?
**Back:** No, los errores de sintaxis se identifican durante la compilación interna inicial del script a bytecode, por lo que el script ni siquiera llega a ejecutarse.

---

### Flashcard 3
**Front:** ¿Qué excepción se lanza al intentar convertir el string `"hola"` a entero mediante `int("hola")`?
**Back:** `ValueError` (el tipo es correcto: str, pero el valor no representa un número convertible).
