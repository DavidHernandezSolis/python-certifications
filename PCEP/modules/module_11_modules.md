# Módulo 11: Módulos y Paquetes de Python

Este módulo explica cómo importar y organizar código en archivos reutilizables utilizando el sistema de módulos y namespaces de Python.

---

## 🎯 Objetivos del Módulo
*   Aprender las diferentes formas de importar módulos (`import`, `from ... import`).
*   Comprender los namespaces y evitar la colisión de nombres.
*   Conocer el funcionamiento de módulos estándar como `math`, `random` y `platform`.

---

## 📋 Qué evalúa el examen (Syllabus Oficial)
*   Sintaxis de importación y renombrado (`as`).
*   Funciones y atributos esenciales de los módulos estándar `math` (ej. `sin()`, `pi`, `trunc()`), `random` (ej. `random()`, `choice()`), `platform` (ej. `platform()`, `machine()`).

---

## 💡 Conceptos Clave

### A. Sintaxis de Importación
*   `import modulo`: Importa el módulo completo. Para acceder a sus miembros se usa el punto (ej. `modulo.funcion()`).
*   `from modulo import funcion`: Importa únicamente la función seleccionada. Se accede directamente sin prefijo (ej. `funcion()`).
*   `from modulo import *`: Importa todos los elementos del módulo directamente. **Desaconsejado** porque contamina el namespace y puede causar colisiones.

### B. Módulos Estándar Comunes
*   `math.trunc(x)`: Devuelve la parte entera de `x` eliminando los decimales (truncado).
*   `random.randrange(start, stop)`: Retorna un entero aleatorio en el rango de `start` a `stop - 1`.

---

## 💻 Ejemplos de Código

```python
# Importación selectiva con alias
from math import pi as PI_VAL, sin
print(sin(PI_VAL / 2))  # Imprime: 1.0
```

---

## ❌ Errores Frecuentes en el Examen
*   **Acceder a funciones sin namespace:** Si importas con `import math` e intentas usar directamente `print(pi)`, lanzará un `NameError`. Debes usar `math.pi`.
*   **Malentendido del valor devuelto por random():** Recordar que `random.random()` devuelve un float pseudoaleatorio en el intervalo semiabierto `[0.0, 1.0)`. Nunca devolverá exactamente `1.0`.
