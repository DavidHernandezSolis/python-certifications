const PCEP_QUESTIONS = [
  {
    "id": "PCEP-1001",
    "module": "fundamentals",
    "topic": "Basic Concepts",
    "subtopic": "Execution Model",
    "difficulty": 2,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Conceptual",
    "official_objective": "1.1",
    "tags": [
      "compilation",
      "interpretation",
      "bytecode"
    ],
    "question": "¿Cuál es la función principal de la Máquina Virtual de Python (PVM)?",
    "options": [
      "A) Traducir directamente código fuente (.py) a lenguaje ensamblador.",
      "B) Ejecutar el código intermedio (Bytecode) en la plataforma local.",
      "C) Compilar archivos de C++ para integrarlos en Python.",
      "D) Gestionar los repositorios y entornos virtuales de PIP."
    ],
    "correct": "B",
    "explanation": "La PVM (Python Virtual Machine) toma el Bytecode (.pyc) y lo ejecuta convirtiéndolo a código máquina nativo del sistema operativo."
  },
  {
    "id": "PCEP-4001",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Syntax Rules",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "syntax"
    ],
    "question": "¿Por qué la llamada func(a=1, 2, 3) produce un SyntaxError?",
    "options": [
      "A) Porque no se puede asignar un valor por defecto en la llamada.",
      "B) Porque los argumentos posicionales no pueden ir después de los argumentos keyword.",
      "C) Porque faltan parámetros por nombrar obligatoriamente.",
      "D) Porque Python requiere comas dobles para separar los keyword."
    ],
    "correct": "B",
    "explanation": "En las llamadas a funciones, todos los argumentos posicionales (como 2 y 3) deben ir obligatoriamente antes de cualquier argumento nominal o keyword (como a=1)."
  },
  {
    "id": "PCEP-6004",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "SyntaxError catch",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Understand",
    "pattern": "Conceptual",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "syntaxerror",
      "compilation"
    ],
    "question": "¿Por qué un SyntaxError no se puede atrapar con un bloque try-except en caliente en el mismo script?",
    "options": [
      "A) Porque no es una clase heredada de Exception.",
      "B) Porque ocurre durante la fase de compilación del código a bytecode, impidiendo que el script inicie ejecución.",
      "C) Porque no está contemplado en la librería estándar.",
      "D) Sí se puede capturar en cualquier circunstancia."
    ],
    "correct": "B",
    "explanation": "Los SyntaxError se detectan durante la fase de análisis sintáctico o compilación de Python. Dado que ocurre antes de la ejecución de cualquier línea de código, el bloque try-except aún no está activo."
  },
  {
    "id": "PCEP-0004",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b11 + 0x10)",
    "options": [
      "A) 0b110x10",
      "B) 17",
      "C) 19",
      "D) 21"
    ],
    "correct": "C",
    "explanation": "0b11 equivale a 3 decimal. 0x10 equivale a 16 decimal. 3 + 16 = 19."
  },
  {
    "id": "PCEP-0005",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='#', end='$')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X#Y\nZ",
      "C) X#Y$Z",
      "D) XY$Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '#'. El argumento 'end' reemplaza el salto de línea por '$', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0006",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-5.8))",
    "options": [
      "A) -4",
      "B) -5",
      "C) -5.8",
      "D) -6"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -5."
  },
  {
    "id": "PCEP-0007",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b1010 + 0x10)",
    "options": [
      "A) 0b10100x10",
      "B) 24",
      "C) 26",
      "D) 28"
    ],
    "correct": "C",
    "explanation": "0b1010 equivale a 10 decimal. 0x10 equivale a 16 decimal. 10 + 16 = 26."
  },
  {
    "id": "PCEP-0008",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='_', end=' ')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) XY Z",
      "C) X_Y\nZ",
      "D) X_Y Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '_'. El argumento 'end' reemplaza el salto de línea por ' ', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0009",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-2.6))",
    "options": [
      "A) -1",
      "B) -2",
      "C) -2.6",
      "D) -3"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -2."
  },
  {
    "id": "PCEP-0010",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b1010 + 0x8)",
    "options": [
      "A) 0b10100x8",
      "B) 16",
      "C) 18",
      "D) 20"
    ],
    "correct": "C",
    "explanation": "0b1010 equivale a 10 decimal. 0x8 equivale a 8 decimal. 10 + 8 = 18."
  },
  {
    "id": "PCEP-0011",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='*', end='!')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X*Y\nZ",
      "C) X*Y!Z",
      "D) XY!Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '*'. El argumento 'end' reemplaza el salto de línea por '!', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0012",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-2.8))",
    "options": [
      "A) -1",
      "B) -2",
      "C) -2.8",
      "D) -3"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -2."
  },
  {
    "id": "PCEP-0013",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b1000 + 0x8)",
    "options": [
      "A) 0b10000x8",
      "B) 14",
      "C) 16",
      "D) 18"
    ],
    "correct": "C",
    "explanation": "0b1000 equivale a 8 decimal. 0x8 equivale a 8 decimal. 8 + 8 = 16."
  },
  {
    "id": "PCEP-0014",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='*', end='$')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X*Y\nZ",
      "C) X*Y$Z",
      "D) XY$Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '*'. El argumento 'end' reemplaza el salto de línea por '$', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0015",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-9.6))",
    "options": [
      "A) -10",
      "B) -8",
      "C) -9",
      "D) -9.6"
    ],
    "correct": "C",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -9."
  },
  {
    "id": "PCEP-0016",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b11 + 0xa)",
    "options": [
      "A) 0b110xa",
      "B) 11",
      "C) 13",
      "D) 15"
    ],
    "correct": "C",
    "explanation": "0b11 equivale a 3 decimal. 0xa equivale a 10 decimal. 3 + 10 = 13."
  },
  {
    "id": "PCEP-0017",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='#', end='@')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X#Y\nZ",
      "C) X#Y@Z",
      "D) XY@Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '#'. El argumento 'end' reemplaza el salto de línea por '@', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0018",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-2.2))",
    "options": [
      "A) -1",
      "B) -2",
      "C) -2.2",
      "D) -3"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -2."
  },
  {
    "id": "PCEP-0019",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b101 + 0xc)",
    "options": [
      "A) 0b1010xc",
      "B) 15",
      "C) 17",
      "D) 19"
    ],
    "correct": "C",
    "explanation": "0b101 equivale a 5 decimal. 0xc equivale a 12 decimal. 5 + 12 = 17."
  },
  {
    "id": "PCEP-0020",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='-', end='@')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X-Y\nZ",
      "C) X-Y@Z",
      "D) XY@Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '-'. El argumento 'end' reemplaza el salto de línea por '@', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0021",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-2.4))",
    "options": [
      "A) -1",
      "B) -2",
      "C) -2.4",
      "D) -3"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -2."
  },
  {
    "id": "PCEP-0022",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b1000 + 0x10)",
    "options": [
      "A) 0b10000x10",
      "B) 22",
      "C) 24",
      "D) 26"
    ],
    "correct": "C",
    "explanation": "0b1000 equivale a 8 decimal. 0x10 equivale a 16 decimal. 8 + 16 = 24."
  },
  {
    "id": "PCEP-0023",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='-', end='!')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X-Y\nZ",
      "C) X-Y!Z",
      "D) XY!Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '-'. El argumento 'end' reemplaza el salto de línea por '!', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0024",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-7.7))",
    "options": [
      "A) -6",
      "B) -7",
      "C) -7.7",
      "D) -8"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -7."
  },
  {
    "id": "PCEP-0025",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b101 + 0x4)",
    "options": [
      "A) 0b1010x4",
      "B) 11",
      "C) 7",
      "D) 9"
    ],
    "correct": "D",
    "explanation": "0b101 equivale a 5 decimal. 0x4 equivale a 4 decimal. 5 + 4 = 9."
  },
  {
    "id": "PCEP-0026",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='', end='@')\nprint('Z')",
    "options": [
      "A) None",
      "B) X Y Z",
      "C) XY\nZ",
      "D) XY@Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con ''. El argumento 'end' reemplaza el salto de línea por '@', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0027",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-9.4))",
    "options": [
      "A) -10",
      "B) -8",
      "C) -9",
      "D) -9.4"
    ],
    "correct": "C",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -9."
  },
  {
    "id": "PCEP-0028",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b101 + 0x4)",
    "options": [
      "A) 0b1010x4",
      "B) 11",
      "C) 7",
      "D) 9"
    ],
    "correct": "D",
    "explanation": "0b101 equivale a 5 decimal. 0x4 equivale a 4 decimal. 5 + 4 = 9."
  },
  {
    "id": "PCEP-0029",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='', end='@')\nprint('Z')",
    "options": [
      "A) None",
      "B) X Y Z",
      "C) XY\nZ",
      "D) XY@Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con ''. El argumento 'end' reemplaza el salto de línea por '@', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0030",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-9.4))",
    "options": [
      "A) -10",
      "B) -8",
      "C) -9",
      "D) -9.4"
    ],
    "correct": "C",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -9."
  },
  {
    "id": "PCEP-0031",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b110 + 0xc)",
    "options": [
      "A) 0b1100xc",
      "B) 16",
      "C) 18",
      "D) 20"
    ],
    "correct": "C",
    "explanation": "0b110 equivale a 6 decimal. 0xc equivale a 12 decimal. 6 + 12 = 18."
  },
  {
    "id": "PCEP-0032",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='', end='$')\nprint('Z')",
    "options": [
      "A) None",
      "B) X Y Z",
      "C) XY\nZ",
      "D) XY$Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con ''. El argumento 'end' reemplaza el salto de línea por '$', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0033",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-5.5))",
    "options": [
      "A) -4",
      "B) -5",
      "C) -5.5",
      "D) -6"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -5."
  },
  {
    "id": "PCEP-0034",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b101 + 0xa)",
    "options": [
      "A) 0b1010xa",
      "B) 13",
      "C) 15",
      "D) 17"
    ],
    "correct": "C",
    "explanation": "0b101 equivale a 5 decimal. 0xa equivale a 10 decimal. 5 + 10 = 15."
  },
  {
    "id": "PCEP-0035",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='*', end='$')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X*Y\nZ",
      "C) X*Y$Z",
      "D) XY$Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '*'. El argumento 'end' reemplaza el salto de línea por '$', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0036",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-1.7))",
    "options": [
      "A) -1",
      "B) -1.7",
      "C) -2",
      "D) 0"
    ],
    "correct": "A",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -1."
  },
  {
    "id": "PCEP-0037",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b101 + 0x8)",
    "options": [
      "A) 0b1010x8",
      "B) 11",
      "C) 13",
      "D) 15"
    ],
    "correct": "C",
    "explanation": "0b101 equivale a 5 decimal. 0x8 equivale a 8 decimal. 5 + 8 = 13."
  },
  {
    "id": "PCEP-0038",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='#', end='!')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X#Y\nZ",
      "C) X#Y!Z",
      "D) XY!Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '#'. El argumento 'end' reemplaza el salto de línea por '!', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0039",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-9.7))",
    "options": [
      "A) -10",
      "B) -8",
      "C) -9",
      "D) -9.7"
    ],
    "correct": "C",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -9."
  },
  {
    "id": "PCEP-0040",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b1000 + 0x8)",
    "options": [
      "A) 0b10000x8",
      "B) 14",
      "C) 16",
      "D) 18"
    ],
    "correct": "C",
    "explanation": "0b1000 equivale a 8 decimal. 0x8 equivale a 8 decimal. 8 + 8 = 16."
  },
  {
    "id": "PCEP-0041",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='#', end='!')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X#Y\nZ",
      "C) X#Y!Z",
      "D) XY!Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '#'. El argumento 'end' reemplaza el salto de línea por '!', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0042",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-9.0))",
    "options": [
      "A) -10",
      "B) -8",
      "C) -9",
      "D) -9.0"
    ],
    "correct": "C",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -9."
  },
  {
    "id": "PCEP-0043",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b10 + 0xa)",
    "options": [
      "A) 0b100xa",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "C",
    "explanation": "0b10 equivale a 2 decimal. 0xa equivale a 10 decimal. 2 + 10 = 12."
  },
  {
    "id": "PCEP-0044",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='_', end='!')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) XY!Z",
      "C) X_Y\nZ",
      "D) X_Y!Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '_'. El argumento 'end' reemplaza el salto de línea por '!', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0045",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-2.4))",
    "options": [
      "A) -1",
      "B) -2",
      "C) -2.4",
      "D) -3"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -2."
  },
  {
    "id": "PCEP-0046",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b1010 + 0x8)",
    "options": [
      "A) 0b10100x8",
      "B) 16",
      "C) 18",
      "D) 20"
    ],
    "correct": "C",
    "explanation": "0b1010 equivale a 10 decimal. 0x8 equivale a 8 decimal. 10 + 8 = 18."
  },
  {
    "id": "PCEP-0047",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='_', end=' ')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) XY Z",
      "C) X_Y\nZ",
      "D) X_Y Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '_'. El argumento 'end' reemplaza el salto de línea por ' ', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0048",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-3.2))",
    "options": [
      "A) -2",
      "B) -3",
      "C) -3.2",
      "D) -4"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -3."
  },
  {
    "id": "PCEP-0049",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b101 + 0x8)",
    "options": [
      "A) 0b1010x8",
      "B) 11",
      "C) 13",
      "D) 15"
    ],
    "correct": "C",
    "explanation": "0b101 equivale a 5 decimal. 0x8 equivale a 8 decimal. 5 + 8 = 13."
  },
  {
    "id": "PCEP-0050",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='*', end=' ')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X*Y\nZ",
      "C) X*Y Z",
      "D) XY Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '*'. El argumento 'end' reemplaza el salto de línea por ' ', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0051",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-6.6))",
    "options": [
      "A) -5",
      "B) -6",
      "C) -6.6",
      "D) -7"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -6."
  },
  {
    "id": "PCEP-0052",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b110 + 0x4)",
    "options": [
      "A) 0b1100x4",
      "B) 10",
      "C) 12",
      "D) 8"
    ],
    "correct": "B",
    "explanation": "0b110 equivale a 6 decimal. 0x4 equivale a 4 decimal. 6 + 4 = 10."
  },
  {
    "id": "PCEP-0053",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='_', end='$')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) XY$Z",
      "C) X_Y\nZ",
      "D) X_Y$Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '_'. El argumento 'end' reemplaza el salto de línea por '$', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0054",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-4.2))",
    "options": [
      "A) -3",
      "B) -4",
      "C) -4.2",
      "D) -5"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -4."
  },
  {
    "id": "PCEP-0055",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b10 + 0xa)",
    "options": [
      "A) 0b100xa",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "C",
    "explanation": "0b10 equivale a 2 decimal. 0xa equivale a 10 decimal. 2 + 10 = 12."
  },
  {
    "id": "PCEP-0056",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='', end='@')\nprint('Z')",
    "options": [
      "A) None",
      "B) X Y Z",
      "C) XY\nZ",
      "D) XY@Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con ''. El argumento 'end' reemplaza el salto de línea por '@', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0057",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-4.4))",
    "options": [
      "A) -3",
      "B) -4",
      "C) -4.4",
      "D) -5"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -4."
  },
  {
    "id": "PCEP-0058",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b110 + 0xc)",
    "options": [
      "A) 0b1100xc",
      "B) 16",
      "C) 18",
      "D) 20"
    ],
    "correct": "C",
    "explanation": "0b110 equivale a 6 decimal. 0xc equivale a 12 decimal. 6 + 12 = 18."
  },
  {
    "id": "PCEP-0059",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='*', end='@')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X*Y\nZ",
      "C) X*Y@Z",
      "D) XY@Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '*'. El argumento 'end' reemplaza el salto de línea por '@', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0060",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-7.2))",
    "options": [
      "A) -6",
      "B) -7",
      "C) -7.2",
      "D) -8"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -7."
  },
  {
    "id": "PCEP-0061",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b110 + 0xc)",
    "options": [
      "A) 0b1100xc",
      "B) 16",
      "C) 18",
      "D) 20"
    ],
    "correct": "C",
    "explanation": "0b110 equivale a 6 decimal. 0xc equivale a 12 decimal. 6 + 12 = 18."
  },
  {
    "id": "PCEP-0062",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='_', end='$')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) XY$Z",
      "C) X_Y\nZ",
      "D) X_Y$Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '_'. El argumento 'end' reemplaza el salto de línea por '$', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0063",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-4.9))",
    "options": [
      "A) -3",
      "B) -4",
      "C) -4.9",
      "D) -5"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -4."
  },
  {
    "id": "PCEP-0064",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b11 + 0x4)",
    "options": [
      "A) 0b110x4",
      "B) 5",
      "C) 7",
      "D) 9"
    ],
    "correct": "C",
    "explanation": "0b11 equivale a 3 decimal. 0x4 equivale a 4 decimal. 3 + 4 = 7."
  },
  {
    "id": "PCEP-0065",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='-', end=' ')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X-Y\nZ",
      "C) X-Y Z",
      "D) XY Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '-'. El argumento 'end' reemplaza el salto de línea por ' ', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0066",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-6.4))",
    "options": [
      "A) -5",
      "B) -6",
      "C) -6.4",
      "D) -7"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -6."
  },
  {
    "id": "PCEP-0067",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b1010 + 0x10)",
    "options": [
      "A) 0b10100x10",
      "B) 24",
      "C) 26",
      "D) 28"
    ],
    "correct": "C",
    "explanation": "0b1010 equivale a 10 decimal. 0x10 equivale a 16 decimal. 10 + 16 = 26."
  },
  {
    "id": "PCEP-0068",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='-', end=' ')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X-Y\nZ",
      "C) X-Y Z",
      "D) XY Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '-'. El argumento 'end' reemplaza el salto de línea por ' ', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0069",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-9.4))",
    "options": [
      "A) -10",
      "B) -8",
      "C) -9",
      "D) -9.4"
    ],
    "correct": "C",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -9."
  },
  {
    "id": "PCEP-0070",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b101 + 0xa)",
    "options": [
      "A) 0b1010xa",
      "B) 13",
      "C) 15",
      "D) 17"
    ],
    "correct": "C",
    "explanation": "0b101 equivale a 5 decimal. 0xa equivale a 10 decimal. 5 + 10 = 15."
  },
  {
    "id": "PCEP-0071",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='-', end='@')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X-Y\nZ",
      "C) X-Y@Z",
      "D) XY@Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '-'. El argumento 'end' reemplaza el salto de línea por '@', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0072",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-8.2))",
    "options": [
      "A) -7",
      "B) -8",
      "C) -8.2",
      "D) -9"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -8."
  },
  {
    "id": "PCEP-0073",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b110 + 0x8)",
    "options": [
      "A) 0b1100x8",
      "B) 12",
      "C) 14",
      "D) 16"
    ],
    "correct": "C",
    "explanation": "0b110 equivale a 6 decimal. 0x8 equivale a 8 decimal. 6 + 8 = 14."
  },
  {
    "id": "PCEP-0074",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='#', end=' ')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X#Y\nZ",
      "C) X#Y Z",
      "D) XY Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '#'. El argumento 'end' reemplaza el salto de línea por ' ', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0075",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-6.6))",
    "options": [
      "A) -5",
      "B) -6",
      "C) -6.6",
      "D) -7"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -6."
  },
  {
    "id": "PCEP-0076",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b110 + 0xc)",
    "options": [
      "A) 0b1100xc",
      "B) 16",
      "C) 18",
      "D) 20"
    ],
    "correct": "C",
    "explanation": "0b110 equivale a 6 decimal. 0xc equivale a 12 decimal. 6 + 12 = 18."
  },
  {
    "id": "PCEP-0077",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='-', end=' ')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X-Y\nZ",
      "C) X-Y Z",
      "D) XY Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '-'. El argumento 'end' reemplaza el salto de línea por ' ', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0078",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-4.5))",
    "options": [
      "A) -3",
      "B) -4",
      "C) -4.5",
      "D) -5"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -4."
  },
  {
    "id": "PCEP-0079",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b11 + 0x4)",
    "options": [
      "A) 0b110x4",
      "B) 5",
      "C) 7",
      "D) 9"
    ],
    "correct": "C",
    "explanation": "0b11 equivale a 3 decimal. 0x4 equivale a 4 decimal. 3 + 4 = 7."
  },
  {
    "id": "PCEP-0080",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='_', end='@')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) XY@Z",
      "C) X_Y\nZ",
      "D) X_Y@Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '_'. El argumento 'end' reemplaza el salto de línea por '@', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0081",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-8.7))",
    "options": [
      "A) -7",
      "B) -8",
      "C) -8.7",
      "D) -9"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -8."
  },
  {
    "id": "PCEP-0082",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b110 + 0xc)",
    "options": [
      "A) 0b1100xc",
      "B) 16",
      "C) 18",
      "D) 20"
    ],
    "correct": "C",
    "explanation": "0b110 equivale a 6 decimal. 0xc equivale a 12 decimal. 6 + 12 = 18."
  },
  {
    "id": "PCEP-0083",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='', end='@')\nprint('Z')",
    "options": [
      "A) None",
      "B) X Y Z",
      "C) XY\nZ",
      "D) XY@Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con ''. El argumento 'end' reemplaza el salto de línea por '@', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0084",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-2.4))",
    "options": [
      "A) -1",
      "B) -2",
      "C) -2.4",
      "D) -3"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -2."
  },
  {
    "id": "PCEP-0085",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b10 + 0x8)",
    "options": [
      "A) 0b100x8",
      "B) 10",
      "C) 12",
      "D) 8"
    ],
    "correct": "B",
    "explanation": "0b10 equivale a 2 decimal. 0x8 equivale a 8 decimal. 2 + 8 = 10."
  },
  {
    "id": "PCEP-0086",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='', end='$')\nprint('Z')",
    "options": [
      "A) None",
      "B) X Y Z",
      "C) XY\nZ",
      "D) XY$Z"
    ],
    "correct": "D",
    "explanation": "El argumento 'sep' une los argumentos posicionales con ''. El argumento 'end' reemplaza el salto de línea por '$', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0087",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-5.1))",
    "options": [
      "A) -4",
      "B) -5",
      "C) -5.1",
      "D) -6"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -5."
  },
  {
    "id": "PCEP-0088",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b1010 + 0x8)",
    "options": [
      "A) 0b10100x8",
      "B) 16",
      "C) 18",
      "D) 20"
    ],
    "correct": "C",
    "explanation": "0b1010 equivale a 10 decimal. 0x8 equivale a 8 decimal. 10 + 8 = 18."
  },
  {
    "id": "PCEP-0089",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='#', end='$')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X#Y\nZ",
      "C) X#Y$Z",
      "D) XY$Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '#'. El argumento 'end' reemplaza el salto de línea por '$', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0090",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-1.6))",
    "options": [
      "A) -1",
      "B) -1.6",
      "C) -2",
      "D) 0"
    ],
    "correct": "A",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -1."
  },
  {
    "id": "PCEP-0091",
    "module": "fundamentals",
    "topic": "Literals",
    "subtopic": "Numeric Bases",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "literals",
      "binary",
      "hexadecimal"
    ],
    "question": "¿Cuál es la salida decimal de este código?\n\nprint(0b1000 + 0x10)",
    "options": [
      "A) 0b10000x10",
      "B) 22",
      "C) 24",
      "D) 26"
    ],
    "correct": "C",
    "explanation": "0b1000 equivale a 8 decimal. 0x10 equivale a 16 decimal. 8 + 16 = 24."
  },
  {
    "id": "PCEP-0092",
    "module": "fundamentals",
    "topic": "Basic IO",
    "subtopic": "Print Separators",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "1.4",
    "tags": [
      "print",
      "sep",
      "end"
    ],
    "question": "¿Qué imprime exactamente la ejecución del siguiente código?\n\nprint('X', 'Y', sep='-', end=' ')\nprint('Z')",
    "options": [
      "A) X Y Z",
      "B) X-Y\nZ",
      "C) X-Y Z",
      "D) XY Z"
    ],
    "correct": "C",
    "explanation": "El argumento 'sep' une los argumentos posicionales con '-'. El argumento 'end' reemplaza el salto de línea por ' ', uniendo el siguiente print inmediatamente."
  },
  {
    "id": "PCEP-0093",
    "module": "fundamentals",
    "topic": "Casting",
    "subtopic": "Type Conversion",
    "difficulty": 2,
    "estimated_time": 40,
    "bloom": "Understand",
    "pattern": "Output Prediction",
    "official_objective": "1.2",
    "tags": [
      "casting",
      "float",
      "int"
    ],
    "question": "¿Qué imprime la siguiente instrucción?\n\nprint(int(-7.9))",
    "options": [
      "A) -6",
      "B) -7",
      "C) -7.9",
      "D) -8"
    ],
    "correct": "B",
    "explanation": "int() aplicado a un número decimal flotante trunca la parte decimal barriendo hacia el cero, lo que resulta en -7."
  },
  {
    "id": "PCEP-0094",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-9 // 2, -9 % 2)",
    "options": [
      "A) -4 1",
      "B) -4.5",
      "C) -5 0",
      "D) -5 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0095",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 16",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0096",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(None or [1, 2])",
    "options": [
      "A) False",
      "B) None",
      "C) True",
      "D) [1, 2]"
    ],
    "correct": "D",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que None es considerado falsy, evalúa y retorna directamente el operando derecho ([1, 2])."
  },
  {
    "id": "PCEP-0097",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-3 // 2, -3 % 2)",
    "options": [
      "A) -1 1",
      "B) -1.5",
      "C) -2 0",
      "D) -2 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0098",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 81",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0099",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or 'Python')",
    "options": [
      "A) 0",
      "B) False",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0100",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-5 // 2, -5 % 2)",
    "options": [
      "A) -2 1",
      "B) -2.5",
      "C) -3 0",
      "D) -3 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0101",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 16",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0102",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or 'Python')",
    "options": [
      "A) 0",
      "B) False",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0103",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-7 // 3, -7 % 3)",
    "options": [
      "A) -2 2",
      "B) -2.3",
      "C) -3 1",
      "D) -3 2"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0104",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 6561",
      "C) 729",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0105",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or 'Python')",
    "options": [
      "A) 0",
      "B) False",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0106",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-5 // 2, -5 % 2)",
    "options": [
      "A) -2 1",
      "B) -2.5",
      "C) -3 0",
      "D) -3 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0107",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 16",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0108",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint([] or [1, 2])",
    "options": [
      "A) False",
      "B) True",
      "C) [1, 2]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que [] es considerado falsy, evalúa y retorna directamente el operando derecho ([1, 2])."
  },
  {
    "id": "PCEP-0109",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-3 // 3, -3 % 3)",
    "options": [
      "A) -1 -1",
      "B) -1 0",
      "C) -1.0",
      "D) 0 0"
    ],
    "correct": "B",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0110",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 81",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0111",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint('' or 'Python')",
    "options": [
      "A) ''",
      "B) False",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que '' es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0112",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-9 // 3, -9 % 3)",
    "options": [
      "A) -2 0",
      "B) -3 -1",
      "C) -3 0",
      "D) -3.0"
    ],
    "correct": "C",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0113",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 16",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0114",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or 'Python')",
    "options": [
      "A) 0",
      "B) False",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0115",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-9 // 3, -9 % 3)",
    "options": [
      "A) -2 0",
      "B) -3 -1",
      "C) -3 0",
      "D) -3.0"
    ],
    "correct": "C",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0116",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 16",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0117",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint('' or 'Python')",
    "options": [
      "A) ''",
      "B) False",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que '' es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0118",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-5 // 2, -5 % 2)",
    "options": [
      "A) -2 1",
      "B) -2.5",
      "C) -3 0",
      "D) -3 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0119",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 256",
      "C) 64",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0120",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or 'Python')",
    "options": [
      "A) 0",
      "B) False",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0121",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-7 // 3, -7 % 3)",
    "options": [
      "A) -2 2",
      "B) -2.3",
      "C) -3 1",
      "D) -3 2"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0122",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 81",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0123",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(None or [1, 2])",
    "options": [
      "A) False",
      "B) None",
      "C) True",
      "D) [1, 2]"
    ],
    "correct": "D",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que None es considerado falsy, evalúa y retorna directamente el operando derecho ([1, 2])."
  },
  {
    "id": "PCEP-0124",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-9 // 2, -9 % 2)",
    "options": [
      "A) -4 1",
      "B) -4.5",
      "C) -5 0",
      "D) -5 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0125",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 16",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0126",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(None or 'Python')",
    "options": [
      "A) False",
      "B) None",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que None es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0127",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-5 // 3, -5 % 3)",
    "options": [
      "A) -1 1",
      "B) -1.7",
      "C) -2 0",
      "D) -2 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0128",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 256",
      "C) 64",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0129",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint([] or [1, 2])",
    "options": [
      "A) False",
      "B) True",
      "C) [1, 2]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que [] es considerado falsy, evalúa y retorna directamente el operando derecho ([1, 2])."
  },
  {
    "id": "PCEP-0130",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-3 // 3, -3 % 3)",
    "options": [
      "A) -1 -1",
      "B) -1 0",
      "C) -1.0",
      "D) 0 0"
    ],
    "correct": "B",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0131",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 16",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0132",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint('' or 'Python')",
    "options": [
      "A) ''",
      "B) False",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que '' es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0133",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-3 // 3, -3 % 3)",
    "options": [
      "A) -1 -1",
      "B) -1 0",
      "C) -1.0",
      "D) 0 0"
    ],
    "correct": "B",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0134",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 6561",
      "C) 729",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0135",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint([] or 'Python')",
    "options": [
      "A) False",
      "B) Python",
      "C) True",
      "D) []"
    ],
    "correct": "B",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que [] es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0136",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-7 // 3, -7 % 3)",
    "options": [
      "A) -2 2",
      "B) -2.3",
      "C) -3 1",
      "D) -3 2"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0137",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 81",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0138",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint([] or 99)",
    "options": [
      "A) 99",
      "B) False",
      "C) True",
      "D) []"
    ],
    "correct": "A",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que [] es considerado falsy, evalúa y retorna directamente el operando derecho (99)."
  },
  {
    "id": "PCEP-0139",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-3 // 3, -3 % 3)",
    "options": [
      "A) -1 -1",
      "B) -1 0",
      "C) -1.0",
      "D) 0 0"
    ],
    "correct": "B",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0140",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 6561",
      "C) 729",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0141",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint([] or [1, 2])",
    "options": [
      "A) False",
      "B) True",
      "C) [1, 2]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que [] es considerado falsy, evalúa y retorna directamente el operando derecho ([1, 2])."
  },
  {
    "id": "PCEP-0142",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-7 // 3, -7 % 3)",
    "options": [
      "A) -2 2",
      "B) -2.3",
      "C) -3 1",
      "D) -3 2"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0143",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 81",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0144",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or [1, 2])",
    "options": [
      "A) 0",
      "B) False",
      "C) True",
      "D) [1, 2]"
    ],
    "correct": "D",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho ([1, 2])."
  },
  {
    "id": "PCEP-0145",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-5 // 3, -5 % 3)",
    "options": [
      "A) -1 1",
      "B) -1.7",
      "C) -2 0",
      "D) -2 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0146",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 16",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0147",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint([] or [1, 2])",
    "options": [
      "A) False",
      "B) True",
      "C) [1, 2]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que [] es considerado falsy, evalúa y retorna directamente el operando derecho ([1, 2])."
  },
  {
    "id": "PCEP-0148",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-9 // 2, -9 % 2)",
    "options": [
      "A) -4 1",
      "B) -4.5",
      "C) -5 0",
      "D) -5 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0149",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 16",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0150",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or [1, 2])",
    "options": [
      "A) 0",
      "B) False",
      "C) True",
      "D) [1, 2]"
    ],
    "correct": "D",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho ([1, 2])."
  },
  {
    "id": "PCEP-0151",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-7 // 3, -7 % 3)",
    "options": [
      "A) -2 2",
      "B) -2.3",
      "C) -3 1",
      "D) -3 2"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0152",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 256",
      "C) 64",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0153",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(None or [1, 2])",
    "options": [
      "A) False",
      "B) None",
      "C) True",
      "D) [1, 2]"
    ],
    "correct": "D",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que None es considerado falsy, evalúa y retorna directamente el operando derecho ([1, 2])."
  },
  {
    "id": "PCEP-0154",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-3 // 2, -3 % 2)",
    "options": [
      "A) -1 1",
      "B) -1.5",
      "C) -2 0",
      "D) -2 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0155",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 81",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0156",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint([] or 99)",
    "options": [
      "A) 99",
      "B) False",
      "C) True",
      "D) []"
    ],
    "correct": "A",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que [] es considerado falsy, evalúa y retorna directamente el operando derecho (99)."
  },
  {
    "id": "PCEP-0157",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-7 // 2, -7 % 2)",
    "options": [
      "A) -3 1",
      "B) -3.5",
      "C) -4 0",
      "D) -4 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0158",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 16",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0159",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or 99)",
    "options": [
      "A) 0",
      "B) 99",
      "C) False",
      "D) True"
    ],
    "correct": "B",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho (99)."
  },
  {
    "id": "PCEP-0160",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-5 // 3, -5 % 3)",
    "options": [
      "A) -1 1",
      "B) -1.7",
      "C) -2 0",
      "D) -2 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0161",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 256",
      "C) 64",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0162",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or 'Python')",
    "options": [
      "A) 0",
      "B) False",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0163",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-3 // 3, -3 % 3)",
    "options": [
      "A) -1 -1",
      "B) -1 0",
      "C) -1.0",
      "D) 0 0"
    ],
    "correct": "B",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0164",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 81",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0165",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(None or 'Python')",
    "options": [
      "A) False",
      "B) None",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que None es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0166",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-3 // 3, -3 % 3)",
    "options": [
      "A) -1 -1",
      "B) -1 0",
      "C) -1.0",
      "D) 0 0"
    ],
    "correct": "B",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0167",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 256",
      "C) 64",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0168",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or 'Python')",
    "options": [
      "A) 0",
      "B) False",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0169",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-5 // 2, -5 % 2)",
    "options": [
      "A) -2 1",
      "B) -2.5",
      "C) -3 0",
      "D) -3 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0170",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 256",
      "C) 64",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0171",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint('' or [1, 2])",
    "options": [
      "A) ''",
      "B) False",
      "C) True",
      "D) [1, 2]"
    ],
    "correct": "D",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que '' es considerado falsy, evalúa y retorna directamente el operando derecho ([1, 2])."
  },
  {
    "id": "PCEP-0172",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-7 // 3, -7 % 3)",
    "options": [
      "A) -2 2",
      "B) -2.3",
      "C) -3 1",
      "D) -3 2"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0173",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 256",
      "C) 64",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0174",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or 99)",
    "options": [
      "A) 0",
      "B) 99",
      "C) False",
      "D) True"
    ],
    "correct": "B",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho (99)."
  },
  {
    "id": "PCEP-0175",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-5 // 2, -5 % 2)",
    "options": [
      "A) -2 1",
      "B) -2.5",
      "C) -3 0",
      "D) -3 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0176",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(2 ** 2 ** 2)",
    "options": [
      "A) 0",
      "B) 16",
      "C) None",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 2 ** (2 ** 2)."
  },
  {
    "id": "PCEP-0177",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint(0 or 99)",
    "options": [
      "A) 0",
      "B) 99",
      "C) False",
      "D) True"
    ],
    "correct": "B",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que 0 es considerado falsy, evalúa y retorna directamente el operando derecho (99)."
  },
  {
    "id": "PCEP-0178",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-9 // 3, -9 % 3)",
    "options": [
      "A) -2 0",
      "B) -3 -1",
      "C) -3 0",
      "D) -3.0"
    ],
    "correct": "C",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0179",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 6561",
      "C) 729",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0180",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint([] or 'Python')",
    "options": [
      "A) False",
      "B) Python",
      "C) True",
      "D) []"
    ],
    "correct": "B",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que [] es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0181",
    "module": "operators",
    "topic": "Arithmetic",
    "subtopic": "Negative Floor Division",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "division",
      "modulo"
    ],
    "question": "¿Qué imprime exactamente la siguiente instrucción?\n\nprint(-9 // 2, -9 % 2)",
    "options": [
      "A) -4 1",
      "B) -4.5",
      "C) -5 0",
      "D) -5 1"
    ],
    "correct": "D",
    "explanation": "La división entera (//) en Python redondea hacia abajo al entero inferior más cercano. El operador (%) calcula el residuo matemático complementario."
  },
  {
    "id": "PCEP-0182",
    "module": "operators",
    "topic": "Precedence",
    "subtopic": "Exponents Associativity",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.1",
    "tags": [
      "operators",
      "precedence",
      "exponentiation"
    ],
    "question": "¿Cuál es la salida del siguiente fragmento de código?\n\nprint(3 ** 2 ** 3)",
    "options": [
      "A) 0",
      "B) 6561",
      "C) 729",
      "D) TypeError"
    ],
    "correct": "B",
    "explanation": "El operador exponencial (**) es asociativo de derecha a izquierda: 3 ** (2 ** 3)."
  },
  {
    "id": "PCEP-0183",
    "module": "operators",
    "topic": "Logical",
    "subtopic": "Short-circuit Returns",
    "difficulty": 4,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.2",
    "tags": [
      "operators",
      "logical",
      "short-circuit"
    ],
    "question": "¿Qué valor imprime la siguiente expresión?\n\nprint('' or 'Python')",
    "options": [
      "A) ''",
      "B) False",
      "C) Python",
      "D) True"
    ],
    "correct": "C",
    "explanation": "El operador 'or' evalúa el operando izquierdo. Dado que '' es considerado falsy, evalúa y retorna directamente el operando derecho ('Python')."
  },
  {
    "id": "PCEP-0184",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0185",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 2, -3)))",
    "options": [
      "A) None",
      "B) [8, 5, 2]",
      "C) [8, 5]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(8, 2, -3) inicia en 8 y resta 3 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0186",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0187",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 3, -3)))",
    "options": [
      "A) None",
      "B) [6, 3]",
      "C) [6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(6, 3, -3) inicia en 6 y resta 3 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0188",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0189",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 3, -2)))",
    "options": [
      "A) None",
      "B) [6, 4]",
      "C) [6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(6, 3, -2) inicia en 6 y resta 2 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0190",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if True and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 3"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0191",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 4, -3)))",
    "options": [
      "A) None",
      "B) [8, 5]",
      "C) [8]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(8, 4, -3) inicia en 8 y resta 3 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0192",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if True and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 3"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0193",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 2, -3)))",
    "options": [
      "A) None",
      "B) [8, 5, 2]",
      "C) [8, 5]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(8, 2, -3) inicia en 8 y resta 3 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0194",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(5):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0195",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 3, -3)))",
    "options": [
      "A) None",
      "B) TypeError",
      "C) [8, 5]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(8, 3, -3) inicia en 8 y resta 3 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0196",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0197",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 3, -2)))",
    "options": [
      "A) None",
      "B) [8, 6, 4]",
      "C) [8, 6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(8, 3, -2) inicia en 8 y resta 2 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0198",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0199",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 3, -2)))",
    "options": [
      "A) None",
      "B) [8, 6, 4]",
      "C) [8, 6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(8, 3, -2) inicia en 8 y resta 2 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0200",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if True and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 3"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0201",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 4, -3)))",
    "options": [
      "A) None",
      "B) [10, 7, 4]",
      "C) [10, 7]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(10, 4, -3) inicia en 10 y resta 3 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0202",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0203",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 2, -3)))",
    "options": [
      "A) None",
      "B) [6, 3]",
      "C) [6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(6, 2, -3) inicia en 6 y resta 3 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0204",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if False and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0205",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 2, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4, 2]",
      "C) [10, 8, 6, 4]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(10, 2, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0206",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(5):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0207",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 2, -2)))",
    "options": [
      "A) None",
      "B) [8, 6, 4, 2]",
      "C) [8, 6, 4]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(8, 2, -2) inicia en 8 y resta 2 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0208",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if False and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0209",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 2, -2)))",
    "options": [
      "A) None",
      "B) [8, 6, 4, 2]",
      "C) [8, 6, 4]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(8, 2, -2) inicia en 8 y resta 2 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0210",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0211",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 4, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4]",
      "C) [10, 8, 6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(10, 4, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0212",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0213",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 3, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4]",
      "C) [10, 8, 6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(10, 3, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0214",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(5):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 15"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0215",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 2, -3)))",
    "options": [
      "A) None",
      "B) [8, 5, 2]",
      "C) [8, 5]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(8, 2, -3) inicia en 8 y resta 3 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0216",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if False and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0217",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 2, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4, 2]",
      "C) [10, 8, 6, 4]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(10, 2, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0218",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if True and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 3"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0219",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 3, -3)))",
    "options": [
      "A) None",
      "B) [6, 3]",
      "C) [6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(6, 3, -3) inicia en 6 y resta 3 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0220",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(5):\n    c += 1\n    if True and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 3"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0221",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 3, -2)))",
    "options": [
      "A) None",
      "B) [8, 6, 4]",
      "C) [8, 6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(8, 3, -2) inicia en 8 y resta 2 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0222",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if False and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0223",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 4, -3)))",
    "options": [
      "A) None",
      "B) [8, 5]",
      "C) [8]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(8, 4, -3) inicia en 8 y resta 3 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0224",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(5):\n    c += 1\n    if True and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 3"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0225",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 2, -3)))",
    "options": [
      "A) None",
      "B) [6, 3]",
      "C) [6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(6, 2, -3) inicia en 6 y resta 3 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0226",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if False and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0227",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 2, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4, 2]",
      "C) [10, 8, 6, 4]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(10, 2, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0228",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0229",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 3, -2)))",
    "options": [
      "A) None",
      "B) [6, 4]",
      "C) [6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(6, 3, -2) inicia en 6 y resta 2 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0230",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0231",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 4, -3)))",
    "options": [
      "A) None",
      "B) [8, 5]",
      "C) [8]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(8, 4, -3) inicia en 8 y resta 3 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0232",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0233",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 3, -3)))",
    "options": [
      "A) None",
      "B) [6, 3]",
      "C) [6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(6, 3, -3) inicia en 6 y resta 3 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0234",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0235",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 2, -2)))",
    "options": [
      "A) None",
      "B) [6, 4, 2]",
      "C) [6, 4]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(6, 2, -2) inicia en 6 y resta 2 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0236",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(5):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0237",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 2, -2)))",
    "options": [
      "A) None",
      "B) [6, 4, 2]",
      "C) [6, 4]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(6, 2, -2) inicia en 6 y resta 2 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0238",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if True and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 3"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0239",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 4, -2)))",
    "options": [
      "A) None",
      "B) [6, 4]",
      "C) [6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(6, 4, -2) inicia en 6 y resta 2 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0240",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(5):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 15"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0241",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 2, -3)))",
    "options": [
      "A) None",
      "B) [8, 5, 2]",
      "C) [8, 5]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(8, 2, -3) inicia en 8 y resta 3 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0242",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if False and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0243",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 4, -2)))",
    "options": [
      "A) None",
      "B) [6, 4]",
      "C) [6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(6, 4, -2) inicia en 6 y resta 2 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0244",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0245",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 4, -3)))",
    "options": [
      "A) None",
      "B) TypeError",
      "C) [6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(6, 4, -3) inicia en 6 y resta 3 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0246",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if False and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0247",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 3, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4]",
      "C) [10, 8, 6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(10, 3, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0248",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0249",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 4, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4]",
      "C) [10, 8, 6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(10, 4, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0250",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0251",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 2, -3)))",
    "options": [
      "A) None",
      "B) [6, 3]",
      "C) [6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(6, 2, -3) inicia en 6 y resta 3 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0252",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(5):\n    c += 1\n    if True and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 3"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0253",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 3, -3)))",
    "options": [
      "A) None",
      "B) [6, 3]",
      "C) [6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(6, 3, -3) inicia en 6 y resta 3 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0254",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if False and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0255",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 2, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4, 2]",
      "C) [10, 8, 6, 4]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(10, 2, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0256",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(5):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 15"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0257",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 2, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4, 2]",
      "C) [10, 8, 6, 4]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(10, 2, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0258",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if False and i == 2:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 14"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0259",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 4, -3)))",
    "options": [
      "A) None",
      "B) TypeError",
      "C) [6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(6, 4, -3) inicia en 6 y resta 3 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0260",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(5):\n    c += 1\n    if False and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 15"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0261",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 2, -3)))",
    "options": [
      "A) None",
      "B) [6, 3]",
      "C) [6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(6, 2, -3) inicia en 6 y resta 3 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0262",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if False and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0263",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 4, -2)))",
    "options": [
      "A) None",
      "B) [8, 6, 4]",
      "C) [8, 6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(8, 4, -2) inicia en 8 y resta 2 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0264",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0265",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(8, 2, -2)))",
    "options": [
      "A) None",
      "B) [8, 6, 4, 2]",
      "C) [8, 6, 4]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(8, 2, -2) inicia en 8 y resta 2 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0266",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(4):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0267",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(6, 3, -3)))",
    "options": [
      "A) None",
      "B) [6, 3]",
      "C) [6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(6, 3, -3) inicia en 6 y resta 3 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0268",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0269",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 3, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4]",
      "C) [10, 8, 6]",
      "D) []"
    ],
    "correct": "B",
    "explanation": "range(10, 3, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (3)."
  },
  {
    "id": "PCEP-0270",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(5):\n    c += 1\n    if True and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0271",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 2, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4, 2]",
      "C) [10, 8, 6, 4]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(10, 2, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (2)."
  },
  {
    "id": "PCEP-0272",
    "module": "loops",
    "topic": "Loops Control",
    "subtopic": "For Else Branching",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "for",
      "else",
      "break"
    ],
    "question": "¿Qué imprime la variable c al finalizar este código?\n\nc = 0\nfor i in range(3):\n    c += 1\n    if False and i == 3:\n        break\nelse:\n    c += 10\nprint(c)",
    "options": [
      "A) 1",
      "B) 10",
      "C) 12",
      "D) 13"
    ],
    "correct": "D",
    "explanation": "El bloque 'else' de un bucle se ejecuta si y solo si el bucle finaliza de forma natural sin haber salido mediante una sentencia 'break'."
  },
  {
    "id": "PCEP-0273",
    "module": "loops",
    "topic": "Range",
    "subtopic": "Negative Range Step",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "2.3",
    "tags": [
      "loops",
      "range",
      "sequence"
    ],
    "question": "¿Qué salida produce esta instrucción?\n\nprint(list(range(10, 4, -2)))",
    "options": [
      "A) None",
      "B) [10, 8, 6, 4]",
      "C) [10, 8, 6]",
      "D) []"
    ],
    "correct": "C",
    "explanation": "range(10, 4, -2) inicia en 10 y resta 2 sucesivamente, excluyendo el límite final (4)."
  },
  {
    "id": "PCEP-0274",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0275",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0276",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0277",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0278",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0279",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0280",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 5\ndef modify():\n    val = 5 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 5",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "B",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0281",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0282",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 5\ndef modify():\n    val = 5 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 5",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "B",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0283",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0284",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 20",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0285",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0286",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 20",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0287",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0288",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0289",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0290",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 45",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0291",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0292",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 45",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0293",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0294",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0295",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0296",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0297",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0298",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0299",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0300",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 5\ndef modify():\n    val = 5 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 5",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "B",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0301",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0302",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 20",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0303",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0304",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 45",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0305",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0306",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 45",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0307",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0308",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 45",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0309",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0310",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0311",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0312",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 5\ndef modify():\n    val = 5 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 5",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "B",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0313",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0314",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 20",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0315",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0316",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 45",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0317",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0318",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0319",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0320",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0321",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0322",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 5\ndef modify():\n    val = 5 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 5",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "B",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0323",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0324",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 5\ndef modify():\n    val = 5 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 5",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "B",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0325",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0326",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0327",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0328",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0329",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0330",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0331",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0332",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 5\ndef modify():\n    val = 5 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 5",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "B",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0333",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0334",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 45",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0335",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0336",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0337",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0338",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 20",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0339",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0340",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 5\ndef modify():\n    val = 5 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 5",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "B",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0341",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0342",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 5\ndef modify():\n    val = 5 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 5",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "B",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0343",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0344",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 45",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0345",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0346",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 5\ndef modify():\n    val = 5 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 5",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "B",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0347",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0348",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 20",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0349",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0350",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 15\ndef modify():\n    val = 15 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 45",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0351",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0352",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 5\ndef modify():\n    val = 5 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 15",
      "B) 5",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "B",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0353",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0354",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 20",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0355",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0356",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 20",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0357",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0358",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0359",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0360",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 2\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 20",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0361",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0362",
    "module": "functions",
    "topic": "Scopes",
    "subtopic": "Shadowing Variables",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.2",
    "tags": [
      "functions",
      "scopes",
      "local"
    ],
    "question": "¿Qué valor imprime el siguiente código?\n\nval = 10\ndef modify():\n    val = 10 * 3\nmodify()\nprint(val)",
    "options": [
      "A) 10",
      "B) 30",
      "C) None",
      "D) UnboundLocalError"
    ],
    "correct": "A",
    "explanation": "La variable 'val' asignada dentro de la función 'modify()' crea un ámbito local nuevo, por lo que la variable global homónima del módulo permanece sin cambios."
  },
  {
    "id": "PCEP-0363",
    "module": "functions",
    "topic": "Arguments",
    "subtopic": "Keyword parameters",
    "difficulty": 3,
    "estimated_time": 50,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.1",
    "tags": [
      "functions",
      "parameters",
      "invocation"
    ],
    "question": "¿Qué valor imprime la ejecución de este código?\n\ndef calc(a, b=2, c=3):\n    return a + b + c\nprint(calc(10, c=5))",
    "options": [
      "A) 15",
      "B) 17",
      "C) 18",
      "D) SyntaxError"
    ],
    "correct": "B",
    "explanation": "El argumento posicional 10 se asigna a 'a'. 'b' toma su valor por defecto 2, y 'c' es asignado explícitamente a 5. El total es 10 + 2 + 5 = 17."
  },
  {
    "id": "PCEP-0364",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0365",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Entry'[0:5:2])",
    "options": [
      "A) Entry",
      "B) Ety",
      "C) IndexError",
      "D) None"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0366",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0367",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0368",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Python'[1:5:2])",
    "options": [
      "A) IndexError",
      "B) Python",
      "C) yh",
      "D) ytho"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0369",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0370",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [20, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [20, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0371",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Entry'[0:4:2])",
    "options": [
      "A) Entr",
      "B) Entry",
      "C) Et",
      "D) IndexError"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 0 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0372",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0373",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [20, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [20, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0374",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[0:5:2])",
    "options": [
      "A) IndexError",
      "B) Por",
      "C) Progr",
      "D) Programmer"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0375",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0376",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0377",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[0:4:2])",
    "options": [
      "A) IndexError",
      "B) Po",
      "C) Prog",
      "D) Programmer"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0378",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0379",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0380",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[0:4:2])",
    "options": [
      "A) IndexError",
      "B) Po",
      "C) Prog",
      "D) Programmer"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0381",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0382",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0383",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[1:5:2])",
    "options": [
      "A) IndexError",
      "B) Programmer",
      "C) rg",
      "D) rogr"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0384",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0385",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [20, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [20, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0386",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[1:5:2])",
    "options": [
      "A) IndexError",
      "B) Programmer",
      "C) rg",
      "D) rogr"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0387",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0388",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [20, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [20, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0389",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Entry'[0:4:2])",
    "options": [
      "A) Entr",
      "B) Entry",
      "C) Et",
      "D) IndexError"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 0 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0390",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0391",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0392",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[0:4:2])",
    "options": [
      "A) IndexError",
      "B) Po",
      "C) Prog",
      "D) Programmer"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0393",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0394",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0395",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Entry'[1:4:2])",
    "options": [
      "A) Entry",
      "B) IndexError",
      "C) nr",
      "D) ntr"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0396",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0397",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0398",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[0:5:2])",
    "options": [
      "A) IndexError",
      "B) Por",
      "C) Progr",
      "D) Programmer"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0399",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0400",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [20, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [20, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0401",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Entry'[0:5:2])",
    "options": [
      "A) Entry",
      "B) Ety",
      "C) IndexError",
      "D) None"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0402",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0403",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0404",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Python'[1:4:2])",
    "options": [
      "A) IndexError",
      "B) Python",
      "C) yh",
      "D) yth"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0405",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0406",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0407",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[1:5:2])",
    "options": [
      "A) IndexError",
      "B) Programmer",
      "C) rg",
      "D) rogr"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0408",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0409",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0410",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Entry'[1:5:2])",
    "options": [
      "A) Entry",
      "B) IndexError",
      "C) nr",
      "D) ntry"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0411",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0412",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [20, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [20, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0413",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Python'[0:5:2])",
    "options": [
      "A) IndexError",
      "B) Pto",
      "C) Pytho",
      "D) Python"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0414",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0415",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [20, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [20, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0416",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[1:5:2])",
    "options": [
      "A) IndexError",
      "B) Programmer",
      "C) rg",
      "D) rogr"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0417",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0418",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0419",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Entry'[1:5:2])",
    "options": [
      "A) Entry",
      "B) IndexError",
      "C) nr",
      "D) ntry"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0420",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0421",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0422",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[1:5:2])",
    "options": [
      "A) IndexError",
      "B) Programmer",
      "C) rg",
      "D) rogr"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0423",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0424",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0425",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[0:4:2])",
    "options": [
      "A) IndexError",
      "B) Po",
      "C) Prog",
      "D) Programmer"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0426",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0427",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0428",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Entry'[0:5:2])",
    "options": [
      "A) Entry",
      "B) Ety",
      "C) IndexError",
      "D) None"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0429",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0430",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [20, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [20, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0431",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Entry'[1:4:2])",
    "options": [
      "A) Entry",
      "B) IndexError",
      "C) nr",
      "D) ntr"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0432",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0433",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [20, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [20, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0434",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Python'[0:5:2])",
    "options": [
      "A) IndexError",
      "B) Pto",
      "C) Pytho",
      "D) Python"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0435",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0436",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [20, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [20, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0437",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[0:4:2])",
    "options": [
      "A) IndexError",
      "B) Po",
      "C) Prog",
      "D) Programmer"
    ],
    "correct": "B",
    "explanation": "El rebanado toma caracteres desde 0 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0438",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0439",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0440",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Python'[1:5:2])",
    "options": [
      "A) IndexError",
      "B) Python",
      "C) yh",
      "D) ytho"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0441",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0442",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0443",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[1:4:2])",
    "options": [
      "A) IndexError",
      "B) Programmer",
      "C) rg",
      "D) rog"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0444",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0445",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [20, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [20, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0446",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[1:4:2])",
    "options": [
      "A) IndexError",
      "B) Programmer",
      "C) rg",
      "D) rog"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0447",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0448",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 30]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 30]",
      "C) [99, 30]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0449",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Python'[1:5:2])",
    "options": [
      "A) IndexError",
      "B) Python",
      "C) yh",
      "D) ytho"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 5 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0450",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0451",
    "module": "collections",
    "topic": "Lists",
    "subtopic": "References Assignment",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "lists",
      "mutability",
      "references"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código?\n\nl1 = [10, 40]\nl2 = l1\nl2[0] = 99\nprint(l1)",
    "options": [
      "A) TypeError",
      "B) [10, 40]",
      "C) [99, 40]",
      "D) [99, 99]"
    ],
    "correct": "C",
    "explanation": "Asignar l2 = l1 copia la dirección de memoria. Ambos nombres apuntan al mismo objeto en memoria, por lo que las modificaciones sobre l2 afectan a l1."
  },
  {
    "id": "PCEP-0452",
    "module": "collections",
    "topic": "Slicing",
    "subtopic": "Slicing Step",
    "difficulty": 3,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "3.1",
    "tags": [
      "slicing",
      "sequences",
      "strings"
    ],
    "question": "¿Cuál es el output de esta rebanada de texto?\n\nprint('Programmer'[1:4:2])",
    "options": [
      "A) IndexError",
      "B) Programmer",
      "C) rg",
      "D) rog"
    ],
    "correct": "C",
    "explanation": "El rebanado toma caracteres desde 1 hasta 4 excluido, saltando de 2 en 2."
  },
  {
    "id": "PCEP-0453",
    "module": "collections",
    "topic": "Tuples",
    "subtopic": "Immutability Assign",
    "difficulty": 3,
    "estimated_time": 45,
    "bloom": "Understand",
    "pattern": "Error Finding",
    "official_objective": "3.1",
    "tags": [
      "tuples",
      "immutability",
      "errors"
    ],
    "question": "¿Qué ocurre al intentar reasignar un elemento de una tupla?\n\nt = (1, 2, 3)\nt[0] = 99\nprint(t)",
    "options": [
      "A) (99, 2, 3)",
      "B) SyntaxError",
      "C) TypeError",
      "D) ValueError"
    ],
    "correct": "C",
    "explanation": "Las tuplas son colecciones inmutables en Python. Cualquier asignación por índice sobre una tupla existente lanza un 'TypeError'."
  },
  {
    "id": "PCEP-0454",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0455",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0456",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0457",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0458",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0459",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0460",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0461",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0462",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0463",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0464",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0465",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0466",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0467",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0468",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0469",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0470",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0471",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0472",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0473",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0474",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0475",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0476",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0477",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0478",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0479",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0480",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0481",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0482",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0483",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0484",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0485",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0486",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0487",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0488",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0489",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0490",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0491",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0492",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0493",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0494",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0495",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0496",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0497",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0498",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0499",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0500",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0501",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0502",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0503",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0504",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0505",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0506",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0507",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0508",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0509",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0510",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0511",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0512",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0513",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0514",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0515",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0516",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0517",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0518",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0519",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0520",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0521",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0522",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0523",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0524",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0525",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0526",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0527",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0528",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0529",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0530",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0531",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0532",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0533",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0534",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0535",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0536",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0537",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0538",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0539",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0540",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0541",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  },
  {
    "id": "PCEP-0542",
    "module": "exceptions",
    "topic": "Hierarchy",
    "subtopic": "Exception Catch scoping",
    "difficulty": 4,
    "estimated_time": 60,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "inheritance"
    ],
    "question": "¿Qué imprime la ejecución de este fragmento de código?\n\ntry:\n    l = [1, 2]\n    print(l[5])\nexcept LookupError:\n    print(\"lookup\")\nexcept IndexError:\n    print(\"index\")",
    "options": [
      "A) IndexError",
      "B) TypeError",
      "C) index",
      "D) lookup"
    ],
    "correct": "D",
    "explanation": "IndexError hereda directamente de LookupError. Como LookupError está evaluado primero, intercepta la excepción e impide evaluar el bloque de IndexError."
  },
  {
    "id": "PCEP-0543",
    "module": "exceptions",
    "topic": "try-except",
    "subtopic": "Try Else Finally block",
    "difficulty": 4,
    "estimated_time": 55,
    "bloom": "Apply",
    "pattern": "Output Prediction",
    "official_objective": "4.3",
    "tags": [
      "exceptions",
      "try-except",
      "finally"
    ],
    "question": "¿Qué imprime el siguiente fragmento de código al finalizar?\n\ntry:\n    x = 1\nexcept:\n    x = 2\nelse:\n    x = 3\nfinally:\n    x = 4\nprint(x)",
    "options": [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    "correct": "D",
    "explanation": "No ocurren excepciones, por lo que se ejecuta la cláusula 'else' (x = 3). Tras ello, se ejecuta obligatoriamente el bloque 'finally' (x = 4)."
  }
];
