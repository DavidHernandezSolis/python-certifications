# Módulo 4: Operadores Aritméticos, Relacionales y Bitwise

Este módulo describe los operadores de Python y su comportamiento con diferentes tipos de datos.

---

## 🎯 Objetivos del Módulo
*   Dominar los operadores aritméticos básicos, la división entera y el residuo.
*   Conocer los operadores lógicos y a nivel de bits (bitwise).
*   Comprender los operadores de comparación.

---

## 📋 Qué evalúa el examen (Syllabus Oficial)
*   Operadores aritméticos: `+`, `-`, `*`, `/`, `//`, `%`, `**`.
*   Operadores relacionales: `==`, `!=`, `<`, `>`, `<=`, `>=`.
*   Operadores a nivel de bits: `&`, `|`, `^`, `~`, `<<`, `>>`.

---

## 💡 Conceptos Clave

### A. Operadores Aritméticos Especiales
*   **División (`/`):** El resultado de la división es siempre un flotante (`float`), incluso si es exacta (ej. `4 / 2` es `2.0`).
*   **División Entera (`//`):** Devuelve la parte entera truncada hacia abajo de la división. El resultado conserva el tipo flotante si alguno de los operandos lo es (ej. `4 // 2.0` es `2.0`, `5 // 2` es `2`).
*   **Residuo / Módulo (`%`):** Devuelve el residuo de la división (ej. `5 % 2` es `1`).

---

## 💻 Ejemplos de Código

```python
# Comportamiento de divisiones y módulo
print(5 / 2)    # 2.5
print(5 // 2)   # 2
print(-5 // 2)  # -3 (truncado hacia abajo, -2.5 redondeado a -3)
print(5 % 2)    # 1
```

---

## ❌ Errores Frecuentes en el Examen
*   **Redondeo negativo en división entera:** El examen suele preguntar por `-5 // 2`. Recuerda que trunca hacia abajo en la recta numérica (de `-2.5` a `-3`).
*   **División por cero:** Cualquier división (`/`, `//`, `%`) entre cero lanza `ZeroDivisionError`.
