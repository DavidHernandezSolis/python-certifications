# 📝 Cheat Sheet Rápida PCEP

Un resumen rápido y condensado de las reglas semánticas y de sintaxis evaluadas en el examen PCEP.

---

## 🔢 1. Precedencia y Asociatividad de Operadores

Los operadores en Python se evalúan de mayor a menor prioridad en este orden:

1.  `**` (Exponenciación - Asociativo de **derecha a izquierda**)
2.  `+`, `-`, `~` (Operadores unarios: positivo, negativo, bitwise NOT)
3.  `*`, `/`, `//`, `%` (Multiplicación, división, división entera, residuo)
4.  `+`, `-` (Suma y resta)
5.  `<<`, `>>` (Desplazamiento de bits)
6.  `&` (Bitwise AND)
7.  `^` (Bitwise XOR)
8.  `|` (Bitwise OR)
9.  `==`, `!=`, `<`, `>`, `<=`, `>=`, `is`, `is not`, `in`, `not in` (Comparación)
10. `not` (Lógica NOT)
11. `and` (Lógica AND)
12. `or` (Lógica OR - Asociativos de izquierda a derecha de comparación hacia abajo)

---

## 🗂️ 2. Resumen Comparativo de Colecciones

| Colección | Sintaxis | Mutable | Ordenada | Permite Duplicados | Acceso a Elementos |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Lista** | `[a, b]` | Sí | Sí | Sí | Indexación y Slicing (`lista[0]`) |
| **Tupla** | `(a, b)` | No | Sí | Sí | Indexación y Slicing (`tupla[0]`) |
| **Diccionario** | `{"k": "v"}` | Sí | Sí (desde 3.7) | No en claves | Mediante Clave (`dict["k"]`) |
| **Set (Conjunto)**| `{a, b}` | Sí | No | No | No indexable (búsqueda rápida) |

---

## 🪓 3. Indexación y Rebanado (Slicing)

```text
 Sintaxis: secuencia[start:end:step]
 - start: Incluido (por defecto 0)
 - end: Excluido (por defecto longitud de la secuencia)
 - step: Paso de avance (si es negativo, recorre en sentido inverso)
```

### Ejemplos Clave:
```python
s = "Python"
print(s[1:4])   # "yth"  (índice 4 'o' excluido)
print(s[::-1])  # "nohtyp" (reversa completa)
print(s[-3:])   # "hon"  (últimos 3 elementos)
```

---

## ⚠️ 4. Jerarquía Fundamental de Excepciones

Las excepciones se organizan jerárquicamente. Capturar una clase padre también capturará a sus clases hijas:

```text
BaseException
 └── SystemExit / KeyboardInterrupt
 └── Exception
      ├── ArithmeticError
      │    ├── ZeroDivisionError
      │    └── OverflowError
      ├── LookupError
      │    ├── IndexError (Listas/Tuplas fuera de rango)
      │    └── KeyError (Clave inexistente en diccionario)
      ├── TypeError (Operación aplicada a tipo de dato inválido)
      └── ValueError (Tipo de dato correcto pero valor inapropiado)
```
