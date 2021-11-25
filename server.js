// http server here
//Write a simple http server using the `http` module. The server will accept 4 methods:
//`GET`, `POST`, `PUT`, `DELETE`. You can freely write the server response. Then use postman to make
//request to your server

const http = require("http");

const server = http.createServer((request, response) => {
  const requestMethod = request.method;
  const urlMethod = request.url;
  console.log(urlMethod);

  switch (requestMethod) {
    case "GET":
      switch (urlMethod) {
        case "/products":
          response.write("List of products");
          response.end();
          break;
        case "/users":
          response.write("List of users");
          response.end();
          break;

        default:
          response.write("You made a get method");
          response.end();
          break;
      }
      break;

    case "POST":
      response.write("You made a post method");
      response.end();
      break;

    case "PUT":
      response.write("You made a put method");
      response.end();
      break;

    case "DELETE":
      response.write("You made a delete method");
      response.end();
      break;

    default:
      response.write("You made a bad request");
      response.end();
      break;
  }
});

server.listen(3000, (error) => {
  if (error) {
    console.log("error in listening", error);
  }
  console.log("server is listening on 3000 port");
});
