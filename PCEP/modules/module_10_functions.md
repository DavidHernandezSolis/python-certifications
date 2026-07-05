# Módulo 10: Funciones y Ámbitos de Variables

Este módulo detalla cómo modularizar y reutilizar código mediante la declaración de funciones y el control de variables internas y externas.

---

## 🎯 Objetivos del Módulo
*   Aprender a declarar funciones con la palabra clave `def`.
*   Comprender la diferencia entre parámetros y argumentos.
*   Dominar la diferencia entre argumentos posicionales y de palabra clave (keyword).
*   Entender los ámbitos de variables (`local`, `global`).

---

## 📋 Qué evalúa el examen (Syllabus Oficial)
*   Sintaxis de definición y llamada de funciones.
*   Retornos implícitos y explícitos (`return` sin valor devuelve `None`).
*   Uso de la directiva `global`.

---

## 💡 Conceptos Clave

### A. Argumentos Posicionales vs Keyword
*   **Posicionales:** Se asignan a los parámetros en el mismo orden en que se pasan en la llamada.
*   **Keyword:** Se especifican indicando el nombre del parámetro (ej. `mi_funcion(val=10)`).
*   **REGLA DE SINTAXIS:** En la llamada a una función, todos los argumentos posicionales deben colocarse **antes** de cualquier argumento keyword. De lo contrario, lanza un `SyntaxError`.

### B. Ámbitos de Variable
*   Las variables definidas dentro de una función son locales a esa función.
*   Si se desea modificar una variable global dentro de una función, debe declararse explícitamente con `global`.

---

## 💻 Ejemplos de Código

```python
# Regla de argumentos posicionales y keyword
def mostrar(a, b, c):
    print(a, b, c)

# Correcto:
mostrar(1, c=3, b=2)  # Imprime: 1 2 3

# Incorrecto (Lanza SyntaxError):
# mostrar(a=1, 2, 3) 
```

---

## ❌ Errores Frecuentes en el Examen
*   **Retorno implícito None:** Si una función no tiene una sentencia `return` o tiene un `return` vacío, su ejecución devuelve el objeto especial `None`.
*   **Modificar variables globales sin declarar 'global':** Si intentas incrementar una variable global dentro de una función sin usar la palabra clave `global`, lanzará un `UnboundLocalError`.
