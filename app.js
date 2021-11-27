const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const corsOption = {
    origin:"http://localhost:4200",
    Credential:true,
    optionsSuccessStatus:200
}   
//create expp app
const app = express()

app.use(cors(corsOption));

//setoup the serve port
const port = process.env.PORT||3000


//parse request data of content type app/x-www-form-rulence
app.use(bodyParser.urlencoded({extended:false}))

//parse req data type JSON
app.use(bodyParser.json())


//defin root route
app.get('/',(req, res)=>{
    res.send('hello world')
})

// import routes
const userRoutes = require('./src/routes/user.route');
const queRoutes = require('./src/routes/question.route');
const ansRoutes = require('./src/routes/answer.route');
// const question = require('./src/routes/question.route')


//create user routes
app.use('/api/v1/users', userRoutes);

//create question routes
app.use('/api/v1/questions', queRoutes );

//create question routes
// app.use('/api/v1/answers', ansRoutes );

app.listen(port,()=>{
    console.log('running on http://localhost:3000');
})