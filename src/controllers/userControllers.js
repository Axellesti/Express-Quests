const database = require("../../database");

const getUsers = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatuts(500);
    });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);

  database.query("select * from users where id = ?", [id]).then(([user]) => {
    if (user.length > 0) {
      res.status(200).json(user[0]);
    } else {
      res.status(404).send("Sorry bro, not found !");
    }
  });
};

module.exports = {
  getUsers,
  getUsersById,
};
