const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const multer = require('multer');
const cors = require('./cors');
var fs = require('fs'); 
var path = require('path');
var OpenWorlds = require('../models/openworld');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const imageFileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter});
const openworldRouter = express.Router();

openworldRouter.use(bodyParser.json());

openworldRouter.route('/')
.options(cors.corsWithOptions, (req, res)=> { res.sendStatus(200); })
.get(cors.cors, authenticate.verifyUser, (req, res, next) => {
    OpenWorlds.find({})
    .populate('author')
    .then((openworlds) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(openworlds);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, upload.single('imageFile'), (req, res, next) => {
    const openworld = new OpenWorlds({
        caption: req.body.caption,
        image: path.join('images', req.file.originalname),
        author: req.user._id
    });
    openworld.save()
    .then((openworld)=>{
        console.log('Post Created', openworld);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({info: openworld, file: req.file});
    }, (err)=>next(err))
    .catch((err) => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /openworlds');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    OpenWorlds.remove({})
    .then ((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

openworldRouter.route('/:openworldId')
.options(cors.corsWithOptions, (req, res)=> { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, (req,res,next)=>{
    OpenWorlds.findById(req.params.openworldId)
    .populate('author')
    .then((openworld) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(openworld);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /openworlds/'+ req.params.openworldId);
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    OpenWorlds.findById(req.params.openworldId)
    .then((openworld)=>{
        if(!openworld.author._id.equals(req.user._id)){
            console.log(req.user._id);
            var err = new Error('You are not the author of this post');
            err.status = 403;
            return next(err);
        }
        if(openworld!=null){
            if(req.body.caption){
                openworld.caption = req.body.caption;
            }
            openworld.save()
            .then((openworld)=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(openworld);
            }, (err) => next(err));
        }
        else if (openworld == null){
            err = new Error('Post '+req.params.openworldId+' not found');
            err.status = 404;
            return next(err);
        }   
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    OpenWorlds.findById(req.params.openworldId)
    .then((openworld)=>{
        if(!openworld.author._id.equals(req.user._id)){
            console.log(req.user._id);
            var err = new Error('You are not the author of this post');
            err.status = 403;
            return next(err);
        }
        if(openworld!=null){
            openworld.remove()
            .then((resp)=>{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({delete: "Successful!", post:resp});
            }, (err) => next(err));
        }
        else if (openworld == null){
            err = new Error('Post '+req.params.openworldId+' not found');
            err.status = 404;
            return next(err);
        }   
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = openworldRouter;