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

//3- List articles with optional filters

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
