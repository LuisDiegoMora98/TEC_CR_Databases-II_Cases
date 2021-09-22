import express from 'express';
const router = express.Router();
import Article from '../models/article'

//1- Aggregate an Article
/* 
Aggregates an Article to database
Body should has the JSON object with Article attributes
Output is the created object.
Exceptions are send with the error specification
*/
router.post('/createArticle', async(req, res) => {
    const body = req.body;
    try {
        const article = await Article.create(body);
        res.status(200).json(article)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
});

//2- Deregister an article
router.put('/deregister', async(req, res) => {
    const body = req.body;
    try {
        const article = await Article.findOne(body.article);
        if(article.active){
            article.active = false;
            await article.save();
            return res.status(200).json({message: "Deregistered article!"})
        }
        res.status(304).json({message: "Article was already deregistered."});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "There was an error",
                                error})
    }
});

//3- List articles with optional filters
router.get('/listArticles/:initialDate?/:finalDate?/'
            +':initialPriceRange?/:finalPriceRange?/:initialYear?/:maxYear?/', async(req, res) => {
    try {
        console.log("ListArticles req");
        console.log(req.query);
        let query = {};
        //date diff
        if(req.query.initialDate && req.query.finalDate){
            //Date must be in "Aug 9, 1995" format
            query.initialDate = {"$gte": new Date(req.query.initialDate),
                                "$lte": new Date(req.query.finalDate)};
        }
        //price ranges
        if(req.query.initialPriceRange && req.query.finalPriceRange){
            query.initialPrice = { "$gte": req.query.initialPriceRange, 
                                    "$lte": req.query.finalPriceRange};
        }
        //year Range
        if(req.query.initialYear && req.query.maxYear){
            query.year = { "$gte": req.query.initialYear,
                            "$lte": req.query.maxYear };
        }
        console.log("ListArticles Query");
        console.log(query)
        var articles = [];
        if(query === {}){
            articles = await Article.find();
            console.log(articles);
        }
        else{
            articles = await Article.find(query);
            console.log(articles);
        }
        res.status(200).json(articles);
    } catch (error) {
        return res.status(500).json({
            message: 'There was an error',
            error})
    }
})

//4- Bid an article
router.put('/bid', async(req, res) => {
    const body = req.body;
    try {
        const article = await Article.findOne(body.article);
        if(article.maxPrice < body.offeredBid){
            article.maxPrice = body.offeredBid;
            await article.save();
            return res.status(200).json({message: "Bidded succesfully!"})
        }
        res.status(304).json({message: "Your bet was lower than the last bet. Bet more!"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "There was an error",
                                error})
    }
});

module.exports = router;