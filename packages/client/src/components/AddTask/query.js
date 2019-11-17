import { gql } from "apollo-boost";

export const ADD_TODO = gql`
  mutation CreateTodo($task: String!) {
    createTodo(task: $task) {
      id
      task
      isCompleted
    }
  }
`;
