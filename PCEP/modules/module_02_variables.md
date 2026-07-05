# Módulo 2: Variables y Nombrado

Este módulo explica cómo declarar variables, cómo gestiona Python el enlazado dinámico de datos y cuáles son las reglas de nomenclatura obligatorias y opcionales.

---

## 🎯 Objetivos del Módulo
*   Aprender qué es una variable y cómo se crea.
*   Conocer el mecanismo de Tipado Dinámico (Dynamic Typing).
*   Dominar las reglas sintácticas del examen sobre nombrado de variables (Identificadores).
*   Comprender la asignación múltiple.

---

## 📋 Qué evalúa el examen (Syllabus Oficial)
*   Sintaxis de nombres de variables: letras, dígitos, guiones bajos (`_`), inicio con dígitos prohibido.
*   Palabras clave prohibidas (keywords).
*   Enlace dinámico de variables y conversión implícita de tipos.

---

## 💡 Conceptos Clave

### A. Creación y Asignación de Variables
*   En Python, una variable se crea automáticamente en el primer momento en que se le asigna un valor usando el operador `=` (operador de asignación). No existe un paso de "declaración" sin valor.
*   Ejemplo: `x = 5` crea la variable `x` y le asigna el entero `5`.

### B. Reglas de Nombrado de Identificadores
Un nombre de variable (identificador) **DEBE**:
1.  Comenzar por una letra (`a-z`, `A-Z`) o un guion bajo (`_`).
2.  El resto del nombre puede contener letras, dígitos (`0-9`) o guiones bajos.
3.  Ser sensible a mayúsculas y minúsculas (`variable` y `Variable` son distintas).

Un nombre de variable **NO PUEDE**:
1.  Comenzar por un dígito (ej. `2variable` produce `SyntaxError`).
2.  Ser una palabra clave reservada de Python (como `if`, `else`, `import`, `def`, `class`, `and`, `or`, `not`, etc.).

---

## 💻 Ejemplos de Código

```python
# Asignación múltiple válida
a = b = c = 10
print(a, b, c)  # Imprime: 10 10 10

# Intercambio de variables (truco clásico)
x, y = 5, 20
x, y = y, x
print(x, y)  # Imprime: 20 5
```

---

## ❌ Errores Frecuentes en el Examen
*   **Intentar usar variables no definidas:** Llamar a `print(z)` antes de que `z = 10` se ejecute lanza un `NameError`.
*   **Palabras reservadas con mayúscula:** El examen suele jugar con la mayúscula. `Import = 5` es un identificador válido (porque `Import` con 'I' mayúscula no es palabra clave), pero `import = 5` lanza un `SyntaxError`.
