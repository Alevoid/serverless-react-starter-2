import React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { UPDATE_TODO } from "./query";

const StatusButton = styled.button`
  padding: 1rem;
  border-radius: 0.4rem;
  background: ${({ backgroundColor }) => backgroundColor};
  color: white;
  font-size: 1rem;
  font-weight: bold;
  outline: 0;
  transition: all 1s ease-out;
`;

const ChangeStatus = ({ isCompleted, id }) => {
  const [updateItem] = useMutation(UPDATE_TODO);

  return (
    <StatusButton
      backgroundColor={isCompleted ? "gray" : "#009e91"}
      onClick={() =>
        updateItem({ variables: { id, isCompleted: !isCompleted } })
      }
    >
      {isCompleted ? "To Do" : "Done"}
    </StatusButton>
  );
};

export default ChangeStatus;
