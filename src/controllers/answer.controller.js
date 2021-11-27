// const answerModel = require('../models/answer.model')

// exports.getAllAnswers = (req, res)=>{
//     console.log('question No',req);
//     const reqAnswer = new answerModel(req)
//     answerModel.getAnswer(reqAnswer,(err, answer)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('here fetched answers');
//             console.log(answer);
//             res.json(answer)
//         }
//     })
// }