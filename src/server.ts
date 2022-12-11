import express from "express";

const app = express();

app.listen(3333, () =>
  console.log("Server funcionando na porta localhost:3333 !!!")
);
