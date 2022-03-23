const { v4: uuidv4 } = require("uuid");

let users = [
  { id: 1, name: "husnil", email: "husnil@gmail.com" },
  { id: 2, name: "maarif", email: "maarif@gmail.com" },
];

module.exports = {
  index: (req, res) => {
    res.render("pages/user/index", { users: users });
  },
  create: (req, res) => {
    res.render("pages/user/create");
  },
  show: (req, res) => {
    const id = req.params.id;
    const data = users.filter((user) => {
      return user.id == id;
    });
    res.render("pages/user/show", { user: data });
  },
  store: (req, res) => {
    users.push({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
    });
    res.redirect("/users");
  },
  update: (req, res) => {
    const id = req.params.id;
    users.filter((user) => {
      if (user.id == id) {
        user.id = id;
        user.name = req.body.name;
        user.email = req.body.email;
        return user;
      }
    });
    res.json({
      status: true,
      data: users,
      message: "data user berhasil diedit",
      method: req.method,
      url: req.url,
    });
  },
  delete: (req, res) => {
    let id = req.params.userId;
    users = users.filter((user) => user.id != id);
    res.send({
      status: true,
      data: users,
      message: "data user berhasil dihapus",
      method: req.method,
      url: req.url,
    });
  },
};
