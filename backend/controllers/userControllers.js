const { QueryTypes } = require("sequelize");
const sequelize = require("../utiles/databaseConnection");

const welcome = (req, res) => {
  res.send("HEllo");
};

const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, profilUrl } = req.body;

    console.log(req.body);

    const insertData = sequelize.query(
      "INSERT INTO `users` (`firstname`, `lastname`, `email`, `profilepic`) VALUES (?, ?, ?, ?);",
      {
        type: QueryTypes.INSERT,
        replacements: [firstname, lastname, email, profilUrl],
      }
    );

    if (!insertData) {
      return res
        .status(400)
        .json({ error: "Something went wrong while inserting the data" });
    }

    res.status(200).json({ status: "success"});
  } catch (err) {
    res.status(500).json({ error: "Internal server error ", msg: err.message });
  }
};

module.exports = {
  welcome,
  registerUser,
};
