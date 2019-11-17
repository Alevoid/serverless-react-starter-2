export const schema = `
  type Item {
    id: String
    task: String!
    isCompleted: Boolean
  }

  type GetTodo {
    Items: [Item]
    Count: Int
    ScannedCount: Int
  } 

  type Query {
    greeting: String
    getAllTodos: GetTodo
    getTodo: GetTodo
  }

  type Mutation {
    createTodo(task: String!): Item
    updateTodoStatus(id: String!, isCompleted: Boolean!): Item
    deleteTodo(id: String!): Item
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
