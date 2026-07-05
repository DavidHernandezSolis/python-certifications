# Módulo 6: Entrada y Salida de Datos

Este módulo detalla cómo comunicarse con el usuario a través de la terminal usando las funciones integradas de Python para entrada y salida estándar.

---

## 🎯 Objetivos del Módulo
*   Aprender el comportamiento avanzado de la función `print()`.
*   Dominar el uso de los argumentos de palabra clave `sep` y `end`.
*   Conocer el funcionamiento de la función `input()`.

---

## 📋 Qué evalúa el examen (Syllabus Oficial)
*   Parámetros de `print()`: `sep` (separador) y `end` (terminación).
*   Conversión de tipos para datos leídos con `input()` (que siempre retorna un `str`).

---

## 💡 Conceptos Clave

### A. Parámetros de `print()`
*   `sep`: Define el separador entre elementos pasados por posición (por defecto es un espacio `" "`).
*   `end`: Define el carácter final del print (por defecto es un salto de línea `"\n"`).

### B. Función `input()`
*   Lee una línea del teclado del usuario.
*   **IMPORTANTE:** El valor devuelto es **siempre un string** (`str`). Para usarlo en operaciones matemáticas, debe convertirse explícitamente usando `int()` o `float()`.

---

## 💻 Ejemplos de Código

```python
# Uso de sep y end
print("A", "B", "C", sep="-", end="*")
print("D")
# Salida combinada en una sola línea: A-B-C*D
```

---

## ❌ Errores Frecuentes en el Examen
*   **Olvidar que input() devuelve str:** Si el usuario ingresa `5` y el código realiza `val = input() * 2`, el resultado será `"55"` (repetición de string) y no `10`.
