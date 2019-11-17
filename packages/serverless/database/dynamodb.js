import Promise from "bluebird";
import AWS from "aws-sdk";

const dynamodbOfflineOptions = {
  region: "localhost",
  endpoint: "http://localhost:4000"
};

var client = new AWS.DynamoDB.DocumentClient(dynamodbOfflineOptions);

export default (method, params) =>
  Promise.fromCallback(cb => client[method](params, cb));
