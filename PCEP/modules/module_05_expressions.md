# Módulo 5: Expresiones, Precedencia y Cortocircuito

Este módulo detalla cómo Python evalúa expresiones complejas de acuerdo con la jerarquía de operadores y la evaluación cortocircuito de los operadores lógicos.

---

## 🎯 Objetivos del Módulo
*   Aprender el orden de evaluación jerárquico de los operadores.
*   Comprender la asociatividad izquierda-derecha y derecha-izquierda.
*   Dominar la evaluación de cortocircuito (Short-circuit).

---

## 📋 Qué evalúa el examen (Syllabus Oficial)
*   Precedencia de los operadores.
*   Asociatividad de los operadores, especialmente la exponenciación (`**`).
*   Evaluación de expresiones lógicas complejas con `and`, `or`, `not`.

---

## 💡 Conceptos Clave

### A. Asociatividad de Exponenciación
*   El operador `**` es asociativo de **derecha a izquierda**:
    *   `2 ** 3 ** 2` equivale a `2 ** (3 ** 2)` que es `2 ** 9 = 512`.

### B. Evaluación de Cortocircuito
*   **AND (`and`):** Si el primer operando es falso, el resultado es falso y el segundo operando no se evalúa.
*   **OR (`or`):** Si el primer operando es verdadero, el resultado es verdadero y el segundo operando no se evalúa.

---

## 💻 Ejemplos de Código

```python
# Asociatividad
print(2 ** 3 ** 2)  # 512

# Cortocircuito en acción (evita ZeroDivisionError)
x = 0
result = (x == 0) or (1 / x > 1)
print(result)       # True (no evalúa 1/x porque x == 0 es True)
```

---

## ❌ Errores Frecuentes en el Examen
*   **Evaluación izquierda a derecha en exponenciación:** Pensar que `2 ** 3 ** 2` es `8 ** 2 = 64`. Es un error muy común y evaluado en casi todos los exámenes.
