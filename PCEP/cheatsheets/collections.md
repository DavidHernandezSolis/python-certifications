# 📝 Cheat Sheet: Colecciones y Secuencias

### 1. Tipos de Colecciones
*   **Listas (`list`):** Mutables, ordenadas, permiten duplicados.
*   **Tuplas (`tuple`):** Inmutables, ordenadas, permiten duplicados.
*   **Diccionarios (`dict`):** Mutables, claves únicas inmutables, valores libres.
*   **Conjuntos (`set`):** Mutables, desordenados, no permiten duplicados.

### 2. Slicing (Rebanado)
`secuencia[inicio:fin:paso]`
*   `s = "Python"`
*   `s[1:4]` -> `"yth"`
*   `s[::-1]` -> `"nohtyp"` (invertir)

### 3. Métodos Críticos
*   `lista.append(x)`: Agrega al final.
*   `lista.insert(idx, x)`: Inserta en `idx`.
*   `lista.pop(idx)`: Remueve y retorna el elemento en `idx` (por defecto el último).
