const fs = require("fs");

let users = JSON.parse(fs.readFileSync("users.json"));

let nextId = users.length + 1;

// GET ALL
function getUsers(req, res) {
    res.json(users);
}

// GET ONE
function getUserById(req, res) {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).send("User not found");
    }

    res.json(user);
}

// CREATE
function createUser(req, res) {
    const name = req.body.name;

    if (!name || name.trim() === "") {
        return res.status(400).send("Name is required");
    }

    const newUser = {
        id: nextId++,
        name: name
    };

    users.push(newUser);

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({ message: "User added", user: newUser });
}

// UPDATE
function updateUser(req, res) {
    const userId = parseInt(req.params.id);
    const name = req.body.name;

    if (!name || name.trim() === "") {
        return res.status(400).send("Name is required");
    }

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).send("User not found");
    }

    user.name = name;

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({ message: "User updated", user });
}

// DELETE
function deleteUser(req, res) {
    const userId = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).send("User not found");
    }

    users.splice(index, 1);

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({ message: "User deleted" });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
