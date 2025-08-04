        const express = require('express');
        const path = require('path');
        const app = express();


        app.set('view engine', 'ejs');

        app.set('views', path.join(__dirname, 'views'));
        app.use(express.static(path.join(__dirname, 'public')));


    function generateRandomName() {
        const firstNames = ["Alice", "Bob", "Charlie", "David", "Emma"];
        const lastNames = ["Smith", "Jones", "Williams", "Brown", "Davis"];

        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        return `${randomFirstName} ${randomLastName}`;
    }
    
        app.get('/', (req, res) => {
            res.render('index', { name: 'Band name Generator' });
        });

        app.get('/submit', (req,res)=>{
            res.render('index',{name: generateRandomName()})
        })

        // Start the server
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });