const db = require('../config/db.config')

var Question = function(question){
    this.queID = question.queID,
    this.uID = question.uid,
    this.questions = question.questions,
    this.depID = question.depID
}

Question.getAllQuestions = (result)=>{
    db.query('select * from questions', (err, res)=>{
        if(err){
            console.log("err::",err);
            result(err, null)
        }else{
            console.log('res::',res);
            result(null, res)
        }
    })
}

Question.askQuestion = (data,result)=>{
    db.queID(`insert into questions set ?`, data, (err, res)=>{
        if (err) {
            console.log(err);
        }else{
            console.log(res);
        }
    })
}

module.exports = Question