const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

// lire JSON envoyé par le site
app.use(express.json());

// servir le dossier public
app.use(express.static("public"));

// route login
app.post("/login", (req, res) => {

    console.log("Requête reçue :", req.body);

    const { username, password } = req.body;

    const newUser = {
        username,
        password,
        date: new Date().toLocaleString()
    };

    let users = [];

    if (fs.existsSync("users.json")) {
        users = JSON.parse(fs.readFileSync("users.json"));
    }

    users.push(newUser);

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});