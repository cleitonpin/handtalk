import styled from 'styled-components';

export const Container = styled.div`  
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #282c34;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  max-width: 275px;
  width: 100%;

  gap: 10px;
`;

export const Joke = styled.p`
  align-self: center;
  font-weight: bold;
  color: #fff;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;

  padding: 0 20px;

  font-size: 16px;

  border: 1px solid #ddd;
  border-radius: 4px;

  color: #666;
`;

export const SigninButton = styled.button`
  height: 48px;
  width: 100%;
  margin-top: 10px;

  border: 0;
  border-radius: 4px;

  font-size: 16px;
  font-weight: bold;

  background: rgb(225, 75, 95);
  color: #fff;
  cursor: pointer;

  &:hover {
    background: rgb(225, 75, 95, 0.85);
  }

  &:disabled {
    background: rgb(225, 75, 95, 0.5);
    cursor: not-allowed;
  }
`;