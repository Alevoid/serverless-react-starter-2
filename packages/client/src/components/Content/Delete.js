import React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { DELETE_TODO, GET_ALL_TODOS } from "./query";

const DeleteButton = styled.button`
  /* margin: 4rem 0; */
  padding: 1rem;
  border-radius: 0.4rem;
  background: red;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  outline: 0;
  transition: all 1s ease-out;
`;

const Delete = ({ id }) => {
  const [deleteTodo] = useMutation(DELETE_TODO, {
    update(cache, { data: { deleteTodo } }) {
      const {
        getAllTodos: { Items, Count }
      } = cache.readQuery({ query: GET_ALL_TODOS });
      const { id: deletedItemId } = deleteTodo;
      cache.writeQuery({
        query: GET_ALL_TODOS,
        data: {
          getAllTodos: {
            Items: Items.filter(({ id }) => id !== deletedItemId),
            Count: Count - 1
          }
        }
      });
    }
  });

  return (
    <DeleteButton onClick={() => deleteTodo({ variables: { id } })}>
      Delete
    </DeleteButton>
  );
};

export default Delete;
