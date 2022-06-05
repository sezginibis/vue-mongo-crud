const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectionDB = require('../database/connectionDB');
const Posts = require('../models/postModel');

const router = express.Router();

// // middleware example
// app.use('/posts', (req, res, next) => {
//     console.log('Ama öncesinde middleware dâhil edildi');
//     next();
// });

// app.get('/posts', (req, res) => {
//     res.send('Post çalıştı!');
// });

router.get('/posts', async (req, res) => {
    try {
        const posts = await Posts.find();
            res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }   
});

router.get('/post/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id).limit(1);
        if(post) {
            res.json(post);
        } else {
            res.status(404);
        }
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/posts',async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    });
    try {
    await post.save();
    res.status(201).json({message: 'Post created successfully'});
    } catch (err) {
        res.json({message: err});
    }
});

router.put('/post-edit/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id).limit(1);
        if(post) {
            post.title = req.body.title;
            post.description = req.body.description;
            await post.save();
            res.json({message: 'Post updated successfully'});
        } else {
            res.status(404).json({ message: 'No post found!' });
        }
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/post-delete/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id).limit(1);
        await Posts.remove({ _id: req.params.id }).limit(1);
        if(post) {
            res.status(200).json({ message: 'Post deleted successfully' });
        } else {
            res.status(404).json({ message: 'Post not found!' });
        }
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;
