// const Question = require('../models/question.model');
const questionModel = require('../models/question.model')

exports.getAllQuestions = (req, res)=>{
    console.log('here all questions');
    questionModel.getAllQuestions((err, question)=>{
        if(err){
            console.log(err);
        }else{
            console.log('here fetched question');
            console.log(question);
            res.json(question)
        }
    })
}
exports.getAllQuestions = (req, res)=>{
    console.log('here set user questions',req.body);
    questionModel.askQuestion(data, (err, question)=>{
        if(err){
            console.log(err);
        }else{
            console.log('here fetched question');
            console.log(question);
            res.json(question)
        }
    })
}