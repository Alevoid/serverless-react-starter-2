import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { get } from "lodash";
import styled from "styled-components";

import { GREETING } from "./query";
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

const App = () => {
  const { data } = useQuery(GREETING);

  const greetingMessage = get(data, "greeting", "");

  return (
    <Container>
      <Header>
        <p>React {greetingMessage}</p>
      </Header>
      <AddTask />
      <Content />
    </Container>
  );
};

export default App;
