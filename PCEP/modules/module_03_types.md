# Módulo 3: Literales y Conversión de Tipos

Este módulo profundiza en los tipos de datos primordiales de Python, cómo representarlos como literales (valores crudos escritos en el código) y cómo convertirlos entre sí.

---

## 🎯 Objetivos del Módulo
*   Identificar formatos válidos de literales numéricos (octal, hexadecimal, binario, notación científica).
*   Comprender el uso de secuencias de escape y strings multilínea.
*   Dominar la conversión de tipos (Casting) explícita e implícita.

---

## 📋 Qué evalúa el examen (Syllabus Oficial)
*   Sistemas numéricos: decimal, octal (`0o` / `0O`), hexadecimal (`0x` / `0X`), binario (`0b` / `0B`).
*   Notación de coma flotante y exponencial (ej. `3e8`, `2.5e-3`).
*   Literales booleanos (`True`, `False`) y string (`'...'`, `"..."`).

---

## 💡 Conceptos Clave

### A. Literales Numéricos
Python permite escribir enteros en bases distintas a la decimal:
*   **Binario:** Empieza por `0b` o `0B` (ej. `0b101` es `5`).
*   **Octal:** Empieza por `0o` o `0O` (ej. `0o10` es `8`).
*   **Hexadecimal:** Empieza por `0x` o `0X` (ej. `0x10` es `16`).

### B. Literales Flotantes
*   Se representan con un punto decimal (`3.14`, `.5`, `4.`).
*   La notación científica utiliza `e` o `E` seguido del exponente:
    *   `1e3` es `1000.0` (tipo float).
    *   `1e-2` es `0.01` (tipo float).

---

## 💻 Ejemplos de Código

```python
# Conversión e impresión de bases
print(0b1111)  # Imprime: 15
print(0x1F)    # Imprime: 31

# Comportamiento de Casting
x = int(5.9)
print(x)       # Imprime: 5 (trunca hacia cero)
```

---

## ❌ Errores Frecuentes en el Examen
*   **Tratar un literal exponencial como entero:** `1e2` es un valor de coma flotante (`100.0`), no un entero (`100`). Realizar operaciones con él puede cambiar el tipo de resultado a `float`.
*   **Literales inválidos en bases:** `0b102` lanza `SyntaxError` (el binario solo acepta dígitos 0 y 1).
