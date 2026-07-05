# Módulo 7: Control de Flujo Condicional

Este módulo detalla cómo controlar el camino de ejecución de un programa mediante la toma de decisiones basada en condiciones lógicas.

---

## 🎯 Objetivos del Módulo
*   Aprender la estructura sintáctica de las sentencias condicionales `if`, `elif`, y `else`.
*   Comprender la indentación (sangrado) en Python.
*   Evaluar condiciones anidadas y compuestas.

---

## 📋 Qué evalúa el examen (Syllabus Oficial)
*   Sintaxis y anidación de bloques `if`, `if-else`, `if-elif-else`.
*   Condicionales encadenados y lógica de decisión.

---

## 💡 Conceptos Clave

### A. La Indentación como Bloque
*   A diferencia de otros lenguajes que usan llaves `{}` o palabras clave de cierre, Python define el alcance de los bloques condicionales (y de cualquier otra estructura) mediante la **indentación** (espacios en blanco al inicio de la línea).

### B. Sentencias elif y else
*   `elif` es la abreviatura de "else if". Solo se evalúa si todas las condiciones previas resultaron falsas.
*   `else` es opcional, captura todo lo no cubierto por las condiciones anteriores y no lleva condición asociada.

---

## 💻 Ejemplos de Código

```python
x = 10
if x > 15:
    print("Mayor que 15")
elif x > 5:
    print("Mayor que 5 pero menor o igual a 15")
else:
    print("Menor o igual a 5")
# Imprime: Mayor que 5 pero menor o igual a 15
```

---

## ❌ Errores Frecuentes en el Examen
*   **Errores de Indentación (IndentationError):** El examen incluye fragmentos de código mal tabulados para verificar si puedes detectar fallos sintácticos visualmente.
*   **Múltiples bloques condicionales vs elif:** Si tienes múltiples bloques `if` independientes, se evaluarán todos. Si tienes `if-elif`, solo se ejecutará el primer bloque que sea verdadero.
