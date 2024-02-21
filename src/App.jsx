import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacao, setOperacao] = useState('');
  const [resultado, setResultado] = useState('');

  const handleNumeroClick = (num) => {
    if (operacao === '') {
      setNumero1(numero1 + num);
      setDisplay(display + num);
    } else {
      setNumero2(numero2 + num);
      setDisplay(display + num);
    }
  };

  const handleOperacaoClick = (op) => {
    if (numero1 !== '') {
      setOperacao(op);
      setDisplay(display + op);
    }
  };

  const calcularResultado = () => {
    let valorResultado;
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    switch (operacao) {
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
      case '^':
        valorResultado = Math.pow(n1, n2);
        break;
      default:
        valorResultado = 'Operação inválida';
    }

    setResultado(valorResultado);
    setNumero1('');
    setNumero2('');
    setOperacao('');
    setDisplay(valorResultado.toString());
  };

  const handleLimpar = () => {
    setNumero1('');
    setNumero2('');
    setOperacao('');
    setResultado('');
    setDisplay('');
  };

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>
      <div className="display">{display}</div>
      <div className="botoes">
        <button onClick={() => handleNumeroClick('7')}>7</button>
        <button onClick={() => handleNumeroClick('8')}>8</button>
        <button onClick={() => handleNumeroClick('9')}>9</button>
        <button onClick={() => handleOperacaoClick('/')}>/</button>
        <button onClick={() => handleNumeroClick('4')}>4</button>
        <button onClick={() => handleNumeroClick('5')}>5</button>
        <button onClick={() => handleNumeroClick('6')}>6</button>
        <button onClick={() => handleOperacaoClick('*')}>*</button>
        <button onClick={() => handleNumeroClick('1')}>1</button>
        <button onClick={() => handleNumeroClick('2')}>2</button>
        <button onClick={() => handleNumeroClick('3')}>3</button>
        <button onClick={() => handleOperacaoClick('-')}>-</button>
        <button onClick={() => handleNumeroClick('0')}>0</button>
        <button onClick={() => handleOperacaoClick('^')}>^</button>
        <button onClick={() => calcularResultado()}>=</button>
        <button onClick={() => handleOperacaoClick('+')}>+</button>
        <button onClick={() => handleLimpar()}>Limpar</button>
      </div>
    </div>
  );
}

export default App;
