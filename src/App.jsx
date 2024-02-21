import { useState } from 'react';
import './App.css';

function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacao, setOperacao] = useState('');
  const [resultado, setResultado] = useState('');

  const realizarOperacao = (operador) => {
    setOperacao(operador);
    calcularResultado(numero1, numero2, operador);
  };

  const calcularResultado = (num1, num2, op) => {
    let valorResultado;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (op) {
      case '+':
        valorResultado = n1 + n2;
        break;
      case '-':
        valorResultado = n1 - n2;
        break;
      case '*':
        valorResultado = n1 * n2;
        break;
      case '/':
        valorResultado = n1 / n2;
        break;
      default:
        valorResultado = 'Operação inválida';
    }

    setResultado(valorResultado);
  };

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>
      <div className="container-input">
        <input type="number" className="entrada-numero" onChange={(e) => setNumero1(e.target.value)} placeholder="Número 1"
        />
        <input type="number"className="entrada-numero"  onChange={(e) => setNumero2(e.target.value)} placeholder="Número 2"
        />
      </div>

      <div id="resultado" className="resultado">
        Resultado: {resultado}
      </div>

      <div className="botoes-operacao">
        <button className="botao-operacao" onClick={() => realizarOperacao('+')}>+</button>
        <button className="botao-operacao" onClick={() => realizarOperacao('-')}>-</button>
        <button className="botao-operacao" onClick={() => realizarOperacao('*')}>*</button>
        <button className="botao-operacao" onClick={() => realizarOperacao('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
