const express = require('express');
const multer = require('multer');

const app = express();
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()});

app.post('/post',upload.single('image'),async(req,res) => {
    // const {caption} = req.body;
    // const image = req.file;
    // const post = await postModel.create({image, caption});
    // res.status(201).json(post);
    console.log(req.body);
    console.log(req.file);
}) 

module.exports = app;