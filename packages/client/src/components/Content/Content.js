import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { get } from "lodash";

import { GET_TODO, GET_ALL_TODOS, GREETING } from "./query";

import Delete from "./Delete";
import ChangeStatus from "./ChangeStatus";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  min-height: 100px;
  border: 1px solid black;
  margin: 40px;
  border-radius: 10px;
  background: ${({ isCompleted }) => (isCompleted ? "lightgreen" : "white")};
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;

  > span {
    align-self: flex-start;
    margin-right: 0;
    font-weight: bold;
    margin-right: 5px;
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const CardButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Content = () => {
  const { loading, error, data } = useQuery(GET_ALL_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const items = get(data, "getAllTodos.Items", []);
  const itemsCount = get(data, "getAllTodos.Count", 0);

  return (
    <StyledSection>
      {items.map(({ id, task, isCompleted }, index) => (
        <StyledCard key={id} isCompleted={isCompleted}>
          <CardHeader>
            <span>{isCompleted ? "Done" : "To do"}</span>{" "}
            {`${index + 1}/${itemsCount}`}
          </CardHeader>
          <CardContent>{task}</CardContent>

          <CardButtons>
            <Delete id={id} />
            <ChangeStatus isCompleted={isCompleted} id={id} />
          </CardButtons>
        </StyledCard>
      ))}
    </StyledSection>
  );
};

export default Content;
