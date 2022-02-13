const db = require("../models");
const RolesModel = db.Roles;
const UserModel = db.User;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  UserModel.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "This username already exists." });
      return;
    }
    // Email
    UserModel.findOne({
      email: req.body.email
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res.status(400).send({ message: "This email is already associated with an account." });
        return;
      }
      next();
    });
  });
};
addRoleToUser = (req, res, next) => {
  console.log(res)
}
const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  addRoleToUser
};
module.exports = verifySignUp;