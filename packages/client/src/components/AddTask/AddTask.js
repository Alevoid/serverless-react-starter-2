import React from "react";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";

import { ADD_TODO } from "./query";
import { GET_ALL_TODOS } from "../Content/query";

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
  border: 1px solid gray;
`;

const Input = styled.input`
  border-radius: 0.4rem;
  height: 45px;
  width: 320px;
  margin-right: 10px;
`;
const AddTask = () => {
  let input;
  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { createTodo: todo } }) {
      const { getAllTodos } = cache.readQuery({ query: GET_ALL_TODOS });
      const { Items, Count } = getAllTodos;

      cache.writeQuery({
        query: GET_ALL_TODOS,
        data: {
          getAllTodos: { Items: [...Items, ...[todo]], Count: Count + 1 }
        }
      });
    }
  });

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();

          addTodo({
            variables: { task: input.value }
          });

          input.value = "";
        }}
      >
        <Input
          ref={node => {
            input = node;
          }}
        />
        <Button type="submit">Add Todo</Button>
      </form>
    </div>
  );
};

export default AddTask;
