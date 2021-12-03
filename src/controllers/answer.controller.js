const answerModel = require('../models/answer.model')

exports.getAllAnswers = (req, res)=>{
    console.log('question No',req.body);
    // const reqAnswer = new answerModel(req.body)
    answerModel.getAnswer(req.body,(err, answer)=>{
        if(err){
            console.log(err);
        }else{
            console.log('here fetched answers');
            // console.log(answer);
            res.json(answer)
        }
    })
}