const express = require("express");
const app = express();

app.use(express.json());

// CONTROLLER

const homeController = (req, res, next) => {
  return res.json({
    message: "Home route of backend 1",
  });
};
const healthController = (req, res, next) => {
  return res.json({
    message: "Backend 1 is working",
  });
};
const mainController = (req, res, next) => {
  return res.json({
    message: "You are connected to the backend 1",
  });
};

// CONTROLLER

// ROUTER

const mainRouter = express.Router();

mainRouter.route("/").get(mainController);
mainRouter.route("/home").get(homeController);
mainRouter.route("/health").get(healthController);

// ROUTER

app.use("/", mainRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on port ${process.env.PORT || 3000}`);
});
