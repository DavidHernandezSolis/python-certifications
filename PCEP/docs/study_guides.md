# 📚 Guía de Estudio Oficial PCEP

Esta guía reúne las directrices del examen de certificación **PCEP-30-02** del Python Institute, analizando los bloques oficiales, pesos evaluados y estrategias de estudio recomendadas.

---

## 🧭 Desglose del Syllabus y Pesos del Examen

El examen PCEP-30-02 evalúa 4 áreas principales, divididas de la siguiente manera:

### Bloque 1: Fundamentos de Computación y Programación (18%)
*   **Conceptos Básicos (6%):** Intérprete vs Compilador, código fuente, bytecode, máquina virtual.
*   **Python Literals (6%):** Formato de números enteros (bin, oct, hex, dec), flotantes y strings.
*   **Operaciones Básicas (6%):** Formateo elemental con `print()` y entrada interactiva con `input()`.

### Bloque 2: Control de Flujo y Tipos de Datos (29%)
*   **Operadores y Expresiones (12%):** Operadores aritméticos, lógicos, relacionales y precedencia.
*   **Control de Flujo (8%):** Bloques condicionales (`if`, `elif`, `else`).
*   **Bucles (9%):** Estructuras `while`, `for`, `break`, `continue` y la cláusula `else` en bucles.

### Bloque 3: Estructuras de Datos y Colecciones (25%)
*   **Listas (10%):** Indexación, slicing, mutabilidad y métodos (`append()`, `insert()`, `pop()`, `sort()`).
*   **Tuplas y Diccionarios (10%):** Creación, diferencias de mutabilidad, acceso a claves/valores.
*   **Strings (5%):** Operaciones básicas con strings como colecciones inmutables.

### Bloque 4: Funciones, Módulos y Excepciones (28%)
*   **Funciones (12%):** Sintaxis, parámetros posicionales vs keyword, ámbitos `local` y `global`, y retorno.
*   **Módulos (8%):** Conceptos de empaquetado, importación selectiva y namespaces.
*   **Excepciones (8%):** Bloques `try-except` y control básico de fallos en ejecución.

---

## ⚡ Estrategias de Resolución de Preguntas en el Examen

1.  **Lectura Inversa de Código:** En preguntas de predicción de salida con bucles largos, primero lee qué variables se imprimen al final. Sigue el flujo mentalmente de esas variables específicas en lugar de simular cada paso de bucles innecesarios.
2.  **Cuidado con la Precedencia de Operadores:** El examen ama colocar operaciones matemáticas complejas sin paréntesis. Recuerda:
    *   `**` (Exponenciación) tiene prioridad máxima y se evalúa de **derecha a izquierda** (`2 ** 3 ** 2` es `2 ** 9 = 512`, no `8 ** 2 = 64`).
    *   `*`, `/`, `//`, `%` se evalúan de izquierda a derecha.
    *   `+`, `-` se evalúan al final.
3.  **Comprobación de Tipos de Retorno:** Muchas preguntas fallan porque intentan concatenar un número con un string. Si ves `print("Resultado: " + 10)`, la respuesta correcta siempre será que produce una excepción (`TypeError`), no que imprime "Resultado: 10".
4.  **Excepciones Invisibles en Listas:** Si una lista tiene 4 elementos, acceder a `lista[4]` lanza un `IndexError`. No asumas que la salida es el último elemento (el cual sería `lista[3]` o `lista[-1]`).
