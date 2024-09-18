import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row} from './styles';
import { useState } from 'react';

const App = () => {
  // Definir 0 como padrão na calculadora
  const [currentNumber, setCurrentNumber] = useState('0');  
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  // Limpar visor da calculadora
  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber('0');
    setOperation('');
  };

  // Adicionar número na calculadora e excluir o 0 padrão quando um número for incluído
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  // Soma
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation('+');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

    // Subtrair
    const handleSubNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber("0");
        setOperation('-');
      }else{
        const sub = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(sub));
        setOperation('');
      }
    };

    // Multiplicar
    const handleMulNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber("0");
        setOperation('*');
      }else{
        const mul = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(mul));
        setOperation('');
      }
    };

    // Dividir
    const handleDivNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber("0");
        setOperation('/');
      }else{
        const divisao = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(divisao));
        setOperation('');
      }
    };

    // Porcentagem
    const handlePorNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber("0");
        setOperation('%');
      }else{
        const por = Number(firstNumber) * (Number(currentNumber)/100);
        setCurrentNumber(String(por));
        setOperation('');
      }
    };
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== ''){
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
      
        case '-':
          handleSubNumbers();
          break;
      
        case '*':
          handleMulNumbers();
          break;
      
        case '/':
          handleDivNumbers();
          break;
      
        case '%':
          handlePorNumbers();
          break;
      
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={ currentNumber }/>
        <Row>
          <Button label="%" onClick ={handlePorNumbers}/>
          <Button label="CE" onClick ={handleOnClear}/>
          <Button label="C" onClick ={handleOnClear}/>
          <Button label="⇐" onClick ={handleOnClear}/>
        </Row>
        <Row>
          <Button label="7" onClick ={() => handleAddNumber('7')}/>
          <Button label="8" onClick ={() => handleAddNumber('8')}/>
          <Button label="9" onClick ={() => handleAddNumber('9')}/>
          <Button label="x" onClick ={handleMulNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick ={() => handleAddNumber('4')}/>
          <Button label="5" onClick ={() => handleAddNumber('5')}/>
          <Button label="6" onClick ={() => handleAddNumber('6')}/>
          <Button label="-" onClick ={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick ={() => handleAddNumber('1')}/>
          <Button label="2" onClick ={() => handleAddNumber('2')}/>
          <Button label="3" onClick ={() => handleAddNumber('3')}/>
          <Button label="+" onClick ={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="," onClick ={() => handleAddNumber('')}/>
          <Button label="0" onClick ={() => handleAddNumber('0')}/>
          <Button label="=" onClick ={handleEquals}/>
          <Button label="/" onClick ={handleDivNumbers}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
