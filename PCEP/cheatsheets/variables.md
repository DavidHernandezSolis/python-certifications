# 📝 Cheat Sheet: Variables y Identificadores

### 1. Sintaxis de Nombrado (Identificadores)
Un nombre de variable **debe comenzar con**:
*   Una letra (`a-z`, `A-Z`) o un guion bajo (`_`).

El resto puede contener letras, números (`0-9`) y guiones bajos.

### 2. Casos Válidos e Inválidos
| Nombre de Variable | Validez | Razón |
| :--- | :--- | :--- |
| `mi_variable` | ✔ Válido | Convención estándar snake_case. |
| `_temp` | ✔ Válido | Empieza con guion bajo. |
| `variable123` | ✔ Válido | Letras seguidas de dígitos. |
| `123var` | ❌ Inválido | Empieza con un dígito (dispara `SyntaxError`). |
| `my-var` | ❌ Inválido | Contiene un carácter especial no permitido (guion medio). |
| `import` | ❌ Inválido | Palabra clave reservada de Python. |
| `Import` | ✔ Válido | Sensible a mayúsculas, 'I' mayúscula no es palabra clave. |

### 3. Asignación Múltiple y Swapping
*   **Asignación paralela:** `x, y = 5, 10`
*   **Asignación encadenada:** `a = b = c = 100`
*   **Intercambio (Swapping):** `x, y = y, x`
