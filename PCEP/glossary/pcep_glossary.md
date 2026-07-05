# 📖 Glosario de Términos PCEP

Glosario técnico con las definiciones formales indispensables para comprender la semántica de Python evaluada en el examen de certificación.

---

### 1. Bytecode
Formato de código intermedio de bajo nivel, independiente de la plataforma física, en el que se compila de forma preliminar el código fuente escrito en Python (`.py`). Es el archivo intermedio ejecutable por la Máquina Virtual (PVM).

### 2. Intérprete
El motor ejecutor de Python. Lee el código fuente instrucción por instrucción (o línea por línea) y lo ejecuta inmediatamente en tiempo de ejecución, en lugar de pre-procesar todo el código a código máquina ejecutable directo del sistema operativo.

### 3. Tipado Dinámico (Dynamic Typing)
Característica de Python donde el tipo de una variable se asocia con el objeto en memoria (el valor) y no con el nombre de la variable. Esto permite reasignar libremente variables a diferentes tipos de datos durante el flujo sin generar errores sintácticos de compilación.

### 4. Evaluación de Cortocircuito (Short-circuit Evaluation)
Mecanismo lógico de optimización por el cual la evaluación de expresiones complejas con operadores booleanos (`and`, `or`) se interrumpe tan pronto como el resultado final está garantizado sin evaluar los operandos siguientes:
*   En `False and expresión`: Se detiene y devuelve `False` sin evaluar la expresión de la derecha.
*   En `True or expresión`: Se detiene y devuelve `True` sin evaluar la expresión de la derecha.

### 5. Inmutabilidad (Immutability)
Propiedad de ciertos objetos cuyo estado o valor interno no puede ser modificado después de su creación en memoria. En Python, los strings (`str`), tuplas (`tuple`), enteros (`int`), flotantes (`float`) y booleanos (`bool`) son objetos inmutables. Modificarlos crea un nuevo objeto en otra dirección de memoria.

### 6. Namespace (Espacio de Nombres)
Un diccionario interno o mapa en Python que asocia nombres de variables o funciones a sus correspondientes objetos físicos. Evita colisiones de nombres al separar los ámbitos globales de módulos de los locales de funciones o de los internos (built-in).

### 7. Rebanado (Slicing)
Operación que permite extraer una subsecuencia (sublista, substring) de una colección secuencial ordenada especificando los límites `[inicio:fin:paso]`, donde el límite superior siempre queda excluido.
