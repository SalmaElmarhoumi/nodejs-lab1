// Registration form where user will enter his (name , password, email )
// Validate password should be at least 8 characters if less then show “Error 
// password is less than 8 characters” else show “Registration success “

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/part2/form.html');
});

app.post('/login', (req, res) => {
    const { name, email, password } = req.body; 

    // Validate password length
    if (password.length < 8) {
        res.send('Error: Password is less than 8 characters');
    } else {
        res.send(`Registration Success\nName: ${name}\nEmail: ${email}`);
    }
});

app.listen(PORT, () => {
    console.log(` http://localhost:${PORT}`);
});