const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image.png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

const upload = multer({ storage: storage, limits: {
    fileSize: 1024 * 1024 * 5
} });

// const upload = multer({storage: storage})
const Meme = require('../models/meme.model');

router.post('/new', upload.single('image'),(req, res) => {
    console.log(req.file);
    // res.send('OK');
    const { date } = req.body;
    const meme = new Meme({
        image: req.file.path,
        date
    });
    meme.save((err) => {
        if(err) res.json({
            image: '',
            err: err
        });
        else {
            res.json(meme);
        }
    });
});

router.get('/', async (req, res) => {
    const all = await Meme.find({});
    res.json(all);
});

router.put('/rate', async (req, res) => {
    const { rating, id } = req.body;
    let memeRating = rating;
    let memeNumOfRatings = 0;
    let sumOfRatings = 0;

    await Meme.findById(id, (err, meme) => {
        if(err) console.error(err);
        else {
            memeNumOfRatings = meme.ratings.length + 1;
            for (let i = 0; i < meme.ratings.length; i++) {
                sumOfRatings += parseInt(meme.ratings[i]);
            }
        }
    });

    // console.log(memeRating, memeNumOfRatings, sumOfRatings);

    await Meme.findByIdAndUpdate(id, { $push: { ratings: memeRating } }, { useFindAndModify: true });

    Meme.findById(id, (err, meme) => {
        // console.log(meme.ratings)
        res.json({
            rating: (sumOfRatings + meme.ratings[meme.ratings.length - 1]) / memeNumOfRatings,
            numOfRatings: memeNumOfRatings
        });
    })
});

// router.put('/comment', (req, res) => {
//     const { comment, id } = req.body;
//     Meme.findByIdAndUpdate(id, { $push: { ratings: memeRating } }, { useFindAndModify: true });
// });

module.exports = router;