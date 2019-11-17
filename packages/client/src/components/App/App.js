import React, { useState } from "react";
import styled from "styled-components";

import Content from "../Content";
import AddTask from "../AddTask";

const Container = styled.div`
  text-align: center;
  padding: 0 3rem;
`;

const Header = styled.div`
  background-color: #282c34;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(0.6rem + 2vmin);
  color: white;
`;

const Button = styled.button`
  margin: 4rem 0;
  padding: 1rem;
  border-radius: 0.4rem;
  background: #009e91;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  outline: 0;
  transition: all 1s ease-out;

  &:disabled {
    background: white;
    color: gray;
  }
`;

const App = () => {
  const [callApi, setCallApi] = useState(false);

  return (
    <Container>
      <Header>
        <p>React + Serverless with GraphQL</p>
      </Header>
      <AddTask />
      <Content />
    </Container>
  );
};

export default App;
