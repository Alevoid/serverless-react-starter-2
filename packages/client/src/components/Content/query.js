import { gql } from "apollo-boost";

export const GREETING = gql`
  {
    greeting
  }
`;

export const GET_ALL_TODOS = gql`
  {
    getAllTodos {
      Items {
        id
        task
        isCompleted
      }
      Count
    }
  }
`;

export const GET_TODO = gql`
  {
    getTodo {
      Items {
        id
        task
        isCompleted
      }
      Count
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodoItem($id: String!, $isCompleted: Boolean!) {
    updateTodoStatus(id: $id, isCompleted: $isCompleted) {
      id
      isCompleted
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;
