const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello node vai kamon acen');

});

const users =[
    {  "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz" },
    { "id": 2,"name": "Ervin Howell","username": "Antonette","email": "Shanna@melissa.tv",},
    { "id": 3, "name": "Clementine Bauch", "username": "Samantha", "email": "Nathan@yesenia.net",},
    { "id": 4, "name": "Patricia Lebsack", "username": "Karianne", "email": "Julianne.OConner@kory.org",},
]

app.get('/users' , (req, res) =>{
    // query search parameter 
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }   
    else{
        // console.log('query', req.query);
        res.send(users);
    }
    
});

/* app.get('/fruits', (req, res) =>{
    res.send(['mango', 'apple', 'orange']);

});

app.get('/fruits/mango/fazle', (req , res) =>{
    res.send('wow fazle mango ');
}) */


app.post('/user', (req, res) =>{
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    // const user = users.find(u => u.id == id);
    res.send(user)
})

app.listen(port, () => {
        console.log(`example app listening on port `, port);
})