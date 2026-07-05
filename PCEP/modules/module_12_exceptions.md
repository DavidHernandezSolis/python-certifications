# Módulo 12: Manejo de Excepciones

Este módulo detalla cómo anticipar y manejar errores en tiempo de ejecución para evitar que los programas terminen de manera abrupta.

---

## 🎯 Objetivos del Módulo
*   Comprender el concepto de excepciones en Python.
*   Aprender la sintaxis de los bloques `try` y `except`.
*   Identificar las excepciones predefinidas (Built-in) más comunes.

---

## 📋 Qué evalúa el examen (Syllabus Oficial)
*   Sintaxis de captura de errores y el flujo del bloque `try-except`.
*   Excepciones comunes: `ZeroDivisionError`, `ValueError`, `TypeError`, `IndexError`, `KeyError`, `SyntaxError` (que no puede capturarse en caliente), `AttributeError`.

---

## 💡 Conceptos Clave

### A. Flujo de Ejecución try-except
*   El código dentro del bloque `try` se ejecuta de forma secuencial.
*   Si ocurre un error, la ejecución en el `try` se detiene de inmediato y el control salta al primer bloque `except` que capture la excepción correspondiente.
*   Si no ocurre ningún error, los bloques `except` son ignorados.

### B. Excepciones Comunes
*   `IndexError`: Indice de secuencia fuera de rango.
*   `KeyError`: Intentar acceder a una clave que no existe en un diccionario.
*   `TypeError`: Aplicar una operación a un objeto de tipo incorrecto.

---

## 💻 Ejemplos de Código

```python
# Captura de errores específica
try:
    lista = [1, 2]
    print(lista[5])
except IndexError:
    print("Capturado: Índice fuera de rango")
except Exception as e:
    print(f"Otro error: {e}")
```

---

## ❌ Errores Frecuentes en el Examen
*   **Captura de SyntaxError:** El examen suele preguntar si un `SyntaxError` (como olvidar los dos puntos `:`) puede capturarse con `try-except`. La respuesta es **NO** en el mismo script, ya que los fallos de sintaxis impiden que el script se compile a bytecode y empiece a ejecutarse.
*   **Orden de los bloques except:** Capturar una clase padre (como `ArithmeticError`) antes de una clase hija (como `ZeroDivisionError`) hará que la hija nunca se alcance.
