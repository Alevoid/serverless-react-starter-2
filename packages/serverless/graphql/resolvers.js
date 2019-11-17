import db from "../database/dynamodb";
import uuid from "uuid/v1";

const getAllTodos = () =>
  db("scan", {
    TableName: "todos"
  });

const getTodo = () =>
  db("query", {
    TableName: "todos",
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeValues: {
      ":id": "c796d733-9779-45c5-a130-20fd1fd0b652"
    },
    ExpressionAttributeNames: {
      "#id": "id"
    }
  });

const createTodo = (task, id) =>
  db("put", {
    TableName: "todos",
    Item: {
      id,
      task,
      isCompleted: false
    }
  });

const deleteTodo = id => {
  return db("delete", {
    TableName: "todos",
    Key: {
      id
    }
  });
};

const updateItemStatus = (id, isCompleted) =>
  db("update", {
    TableName: "todos",
    Key: {
      id: id
    },
    UpdateExpression: "set isCompleted = :isCompleted",
    ExpressionAttributeValues: {
      ":isCompleted": isCompleted
    }
  });

export const resolvers = {
  Query: {
    greeting: () => "Hello there!",
    getAllTodos: () => getAllTodos(),
    getTodo: () => getTodo()
  },
  Mutation: {
    createTodo: async (root, { task }) => {
      const id = uuid();

      await createTodo(task, id);

      return { id, task, isCompleted: false };
    },
    updateTodoStatus: async (root, { id, isCompleted }) => {
      await updateItemStatus(id, isCompleted);

      return { id, isCompleted };
    },
    deleteTodo: async (root, { id }) => {
      const test = await deleteTodo(id);
      console.log(test, id);
      return { id };
    }
  }
};
