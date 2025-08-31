//import express from 'express'//ES module
const express = require('express'); //CommonJS
const path = require('path');
const app = express();

//console.log(__dirname);
//publicのフォルダにstaticのファイルがあると伝達。→ フォルダ内を参照できる。
app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.urlencoded({ extended: false})); //bodyの使用が可能となる。

// app.get('/', (req, res) => {
//     res.send('<h1>Top Page !!</h1>')
// })

// app.get('/about', (req, res) => {
//     res.send('About Page')
// })

app.post('/api/v1/quiz', (req, res) => {
    const answer = req.body.answer;
    const correctAns = "API";

    //const result = 
    answer === correctAns ?
    res.redirect('/correct.html'): 
    res.redirect('/wrong.html');
    //res.send(`<h1>${result}</h1>`);//htmlタグで送る時は必ずクォートで囲む。
});

app.get('/api/v1/users', (req, res) => {
    res.send({
        name: "Tom",
        age: 20
    });
});

app.listen(3000, () => {
    console.log('Running server')
});