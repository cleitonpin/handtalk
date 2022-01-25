import styled from 'styled-components';

// box with text inside
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  width: 300px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #ccc;

  input {
    margin: 10px;
  }

  button {
    margin: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

// container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin: 0;
  
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;