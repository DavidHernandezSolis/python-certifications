# Flashcards: Funciones y Ámbitos

### Flashcard 1
**Front:** ¿Qué error de sintaxis ocurre al mezclar argumentos en la llamada `f(a=1, 2)`?
**Back:** `SyntaxError`. Los argumentos posicionales (como `2`) deben preceder a cualquier argumento de palabra clave o keyword (como `a=1`).

---

### Flashcard 2
**Front:** ¿Qué devuelve implícitamente una función que no tiene definida una sentencia `return`?
**Back:** Devuelve el objeto especial `None`.

---

### Flashcard 3
**Front:** ¿Para qué sirve la directiva `global` dentro de una función?
**Back:** Permite a la función enlazar una variable local al ámbito global del módulo para modificar su valor en memoria permanentemente.
