import React, { useRef, useState } from 'react';

export const ButtonBlock = ({ calc, setCalc, setFormular }) => {
  const [oper, setOper] = useState('');
  const [isOper, setIsOper] = useState(false);
  const [isPoint, setIsPoint] = useState(false);
  const [isMinus, setIsMinus] = useState(true);
  const numLengthRef = useRef(0);

  const operators = ['+', '-', '*', '/'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const onClickOperator = (e) => {
    const { operator } = e.target.dataset;

    console.log('isOper >> ', isOper);
    console.log('isPoint >> ', isPoint);
    console.log('isMinus >> ', isMinus);

    if (operator !== '-') {
      return;
    }

    if (isMinus && operator === '-' && numLengthRef.current === 0) {
      numLengthRef.current++;
      setCalc((prev) => prev + operator);
      setIsMinus(false);
    }

    if (!isOper) {
      setOper(operator);
      setIsOper(true);
      setIsMinus(true);
      setCalc((prev) => prev + operator);
      setIsPoint(false);
      numLengthRef.current = 0;
    }
  };

  const onClickPoint = (e) => {
    if (calc.length === 0 || numLengthRef.current === 0) {
      return;
    }

    if (!isPoint) {
      setCalc((prev) => prev + e.target.textContent);
      setIsPoint(true);
    }
  };

  const onClickNumber = (e) => {
    const { number } = e.target.dataset;

    if (number === '0' && numLengthRef.current === 0) {
      setCalc((prev) => prev + number);
      numLengthRef.current++;
    } else if (calc[calc.length - 1] === '0' && number === '0' && numLengthRef.current === 1) {
      setCalc((prev) => prev);
    } else {
      setCalc((prev) => prev + number);
      numLengthRef.current++;
    }
  };

  const onClickResult = (e) => {
    if (oper) {
      const [first, second] = calc.split(oper);

      let result;

      switch (oper) {
        case '+':
          result = +first + +second;
          break;
        case '-':
          result = +first - +second;
          break;
        case '*':
          result = +first * +second;
          break;
        case '/':
          result = +first / +second;
          break;
        default:
          break;
      }

      if (!isOper) {
        setCalc('');
      }

      if (numLengthRef.current === 0) {
        setCalc('');
      }

      if (isNaN(result) || parseInt(result) === Infinity || parseInt(result) === -Infinity) {
        setCalc('');
      } else {
        setCalc(result.toString());
      }

      setIsPoint(false);
      setIsOper(false);
      setOper('');
      numLengthRef.current = result.toString().length;
    }
  };

  const onClickAllClear = () => {
    setCalc('');
    setIsPoint(false);
    setIsOper(false);
    setOper('');
    numLengthRef.current = 0;
  };

  const onClickDelete = () => {

    if (calc[calc.length - 1] === '.') {
      setIsPoint(false);
    }

    if (calc === 'Infinity' || calc === '-Infinity') {
      setCalc('');
      return;
    }

    setCalc((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <div>
        <button type='button' onClick={onClickAllClear}>AC</button>
        <button type='button' onClick={onClickDelete}>DEL</button>
      </div>
      <div>
        {operators.map((item) => (
          <button
            key={item}
            type='button'
            data-operator={item}
            onClick={onClickOperator}
          >
            {item}
          </button>
        ))}
        <button type='button' onClick={onClickPoint}>{'.'}</button>
        <button type='button' onClick={onClickResult}>{'='}</button>
      </div>
      <div>
        {numbers.map((item) => (
          <button
            key={item}
            type='button'
            data-number={item}
            onClick={onClickNumber}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};
