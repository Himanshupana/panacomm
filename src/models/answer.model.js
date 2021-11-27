const db = require('../config/db.config')

var Answer = function(question){
    this.ansID = question.queID,
    this.uID = question.uid,
    this.qID = question.qid,
    this.answers = question.questions
}
Answer.getAnswer = (quesNo, result)=>{
    db.query(`select * from where ansid = ${quesNo}`,(err, res)=>{
        if (err) {
            console.log(err);
            result(err, null)
        }else{
            console.log(res);
            result(null, res)
        }
    })
}

module.exports = Answer