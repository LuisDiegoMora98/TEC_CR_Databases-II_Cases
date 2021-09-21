import express from 'express';
const router = express.Router();
import Article from '../models/article'

//1- Aggregate an Article

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
            query.initialDate = {"$gte": req.query.initialDate,
                                "$lte": req.query.finalDate};
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

module.exports = router;