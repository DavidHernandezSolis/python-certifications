# Módulo 8: Estructuras de Repetición (Bucles)

Este módulo detalla cómo repetir un bloque de código múltiples veces usando los bucles `while` y `for`.

---

## 🎯 Objetivos del Módulo
*   Aprender el funcionamiento de los bucles `while` y `for`.
*   Comprender y utilizar la función integrada `range()`.
*   Dominar el uso de `break`, `continue` y la cláusula `else` en bucles.

---

## 📋 Qué evalúa el examen (Syllabus Oficial)
*   Sintaxis y control con `while` y `for`.
*   El comportamiento de `range(start, stop, step)`.
*   La lógica y ejecución del bloque `else` asociado a un bucle.

---

## 💡 Conceptos Clave

### A. La Función range()
*   `range(stop)`: Va desde `0` hasta `stop - 1`.
*   `range(start, stop)`: Va desde `start` hasta `stop - 1`.
*   `range(start, stop, step)`: Va de `start` a `stop - 1` con incrementos de `step`.

### B. Sentencias break y continue
*   `break`: Termina inmediatamente la ejecución del bucle actual.
*   `continue`: Omite el resto de instrucciones del ciclo actual y salta a la siguiente iteración.

### C. Bloque else en Bucles
*   La cláusula `else` asociada a un bucle se ejecuta **únicamente si el bucle finaliza de forma natural** (al evaluar la condición como falsa en `while` o terminar los elementos en `for`).
*   **Si el bucle se interrumpe con break, el bloque else NO se ejecuta.**

---

## 💻 Ejemplos de Código

```python
# Bucle con else
for i in range(3):
    print(i)
else:
    print("Bucle completado sin break")
# Imprime: 0, 1, 2 y luego "Bucle completado sin break"
```

---

## ❌ Errores Frecuentes en el Examen
*   **Confusión con el límite superior de range():** Recordar que el valor `stop` está excluido. `range(1, 5)` produce `1, 2, 3, 4` (4 elementos), no incluye el `5`.
*   **Malentendido del else en bucles:** Creer que `else` se ejecuta siempre. Si el código pasa por un `break`, el `else` del bucle es cancelado.
