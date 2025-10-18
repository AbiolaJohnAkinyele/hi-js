const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send("My Week 2 API!")
});

app.post('/user', (req, res) =>{
    const {name, email} = req.body;
    res.send(`Hi ${name}`);

});

app.get('/user/:id', (req, res) =>{
    const id = req.params.id;
    if(!id){
        return res.status(400).json({error: "missing data"});
    }
    console.log(id);
    res.send(`User ${id} profile`);
});

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})