# Módulo 9: Colecciones y Estructuras de Datos

Este módulo detalla cómo almacenar múltiples elementos en una sola variable mediante listas, tuplas, diccionarios y conjuntos.

---

## 🎯 Objetivos del Módulo
*   Dominar la indexación y rebanado (slicing) de secuencias.
*   Comprender las diferencias de mutabilidad y comportamiento de cada colección.
*   Aprender los métodos principales de listas y diccionarios.

---

## 📋 Qué evalúa el examen (Syllabus Oficial)
*   Listas: métodos `append()`, `insert()`, `pop()`, `reverse()`, `sort()`. Mutabilidad.
*   Tuplas: inmutabilidad, empaquetado y desempaquetado.
*   Diccionarios: claves (inmutables), valores, métodos `keys()`, `values()`, `items()`.
*   Strings como secuencias inmutables.

---

## 💡 Conceptos Clave

### A. Listas (Secuencias Mutables)
*   `lista.append(x)`: Inserta `x` al final de la lista.
*   `lista.insert(idx, x)`: Inserta `x` en la posición `idx` desplazando el resto a la derecha.

### B. Mutabilidad vs Inmutabilidad
*   Si intentas modificar una tupla (`t = (1, 2); t[0] = 9`), lanzará un `TypeError`.
*   Si modificas una lista (`l = [1, 2]; l[0] = 9`), la operación es válida y modifica la lista directamente.

---

## 💻 Ejemplos de Código

```python
# Operaciones con Listas
mi_lista = [10, 20, 30]
mi_lista.insert(1, 15)
print(mi_lista)  # [10, 15, 20, 30]

# Operaciones con Diccionarios
d = {"a": 1, "b": 2}
print(d.get("c", 0))  # 0 (evita KeyError)
```

---

## ❌ Errores Frecuentes en el Examen
*   **Copias superficiales vs referencias:** Si escribes `lista_a = [1, 2]` y luego `lista_b = lista_a`, ambas variables apuntan a la **misma dirección de memoria**. Modificar `lista_b` modificará también `lista_a`.
*   **Claves duplicadas en diccionarios:** En `d = {"a": 1, "a": 2}`, el valor de la clave `"a"` final será `2` (la última asignación sobrescribe las anteriores).
