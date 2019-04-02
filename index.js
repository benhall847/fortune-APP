const port = 1337;
const express = require('express');
const app = express();
const Fortune = require('./models/fortuneApp')

app.get('/fortune', async (req, res)=>{
    res.json(await Fortune.getRandom())
})
app.listen(port, ()=>{
    console.log(`now listening on port: ${port}`)
})