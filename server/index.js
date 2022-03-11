const sequelize = require("./utils/database");

const User = require("./models/user");

// sequelize
//   .sync({ force: true })
User.sequelize
  .sync({ force: false, logging: console.log })
  .then((result) => {
    return User.create({ email: "john33@gmail.com", password: "12345" });
    console.log("result");
  })
  .then((result) => console.log("User table updated."))
  .catch((error) => {
    console.log("Some problem in updating... not updated.");
  })
  .catch((err) => {
    console.log("error");
  });

// console.log(sequelize.models.User);
