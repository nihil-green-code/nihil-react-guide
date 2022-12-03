import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ButtonBlock } from './components/Calculator';

const Calculator = () => {
  const [calc, setCalc] = useState('');
  const [formular, setFormular] = useState('');

  return (
    <>
      <Container>
        <div>{formular}</div>
        <Screen>{calc}</Screen>
        <ButtonBlock calc={calc} setCalc={setCalc} setFormular={setFormular} />
      </Container>
    </>
  );
};

export default Calculator;

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const Screen = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: #aaaaaa;
  margin-bottom: 10px;
  height: 30px;
`;
