module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {
    'indent': ['error', 2], // Establece un nivel de indentación de 2 espacios
    'no-unused-vars': 'warn', // Advierte sobre variables no utilizadas
    'no-console': 'off', // Permite el uso de console.log
    'no-redeclare': 'error', // Error al redeclarar variables
    'no-undef': 'error', // Error al utilizar variables no definidas
    'no-unreachable': 'error', // Error para código inalcanzable
    'no-unexpected-multiline': 'error', // Evita líneas inesperadas
    'quotes': ['error', 'single'], // Utiliza comillas simples
    'semi': ['error', 'always'], // Requiere punto y coma al final de las sentencias
    'comma-dangle': ['error', 'never'], // No permite comas al final de los objetos
    'eqeqeq': ['warn', 'always'], // Prefiere el uso de === y !== sobre == y !=
    'strict': ['error', 'global'], // Exige el modo estricto
    'curly': ['error', 'multi-line'], // Requiere llaves para bloques multilínea
    'brace-style': ['error', '1tbs'], // Estilo de llaves (one true brace style)
    'arrow-parens': ['error', 'always'], // Requiere paréntesis alrededor de los argumentos de las funciones flecha
    'no-var': 'error', // Prefiere let/const sobre var
    'prefer-const': 'warn' // Sugiere usar const cuando las variables no se reasignan
  }
      
};
