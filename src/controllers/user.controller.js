const usermodel = require('../models/user.model');
// const { use } = require('../routes/user.route');


// get all userlist
exports.getallusers = (req, res) => {
    console.log(' here all user list');
    usermodel.getallusers((err, users) => {
        console.log('we are here');
        res.send(users)
    })
}
//get user by id
exports.getUserByID = (req, res) => {
    console.log("get user by id");
    usermodel.getUserByID(req.params.id, (err, user) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            console.log(user);
            res.send(user)
        }
    })
}
// login user
exports.loginUser = (req, res) => {
    console.log('dta::', req.body);
    const userReqData = new usermodel(req.body);
    usermodel.LoginUser(userReqData, (err, result) => {
        console.log("req data::", result);
        res.json({ status: 200, message: 'login successfully', data: result })
    })
}


//create new user
exports.createNewUser = (req, res) => {
    // console.log('create user');
    console.log(req.body);
    const userReqData = new usermodel(req.body)
    //check null
    if (req.body.constructor === Object && Object(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'please fill all fields' })
    } else {
        console.log('valid data');
        // res.send({status:200})
        usermodel.createNewUser(userReqData, (err, user) => {
            try {
                if (err) {
                    console.log("err::", err);
                    res.send(err)
                    res.json({ status: false, message: 'account not created err', data: user })
                } else {
                    console.log("created::", user);
                    res.json({ status: true, message: 'account created successfully', data: user.insertId })
                }
                
            } catch (error) {console.log('error while creating user');}
            // if (err) {
            //     console.log("err::", err);
            //     res.send(err)
            //     res.json({ status: false, message: 'account not created err', data: user })
            // } else {
            //     console.log("created::", user);
            //     res.json({ status: true, message: 'account created successfully', data: user.insertId })
            // }
        })
    }
}

//update user data

exports.updateUser = (req, res) => {
    console.log('updateuser by id');
    console.log(req.body);
    const userReqData = new usermodel(req.body)
    //check null
    if (req.body.constructor === Object && Object(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'please fill all fields' })
    } else {
        console.log('valid data');
        // res.send({status:200})
        usermodel.updateUser(req.params.id, userReqData, (err, user) => {
            if (err) {
                console.log("err::", err);
                res.send(err)
                res.json({ status: false, message: 'account not updated err', data: user })
            } else {
                console.log("created::", user);
                res.json({ status: true, message: 'account updated successfully', data: user.insertId })
            }
        })
    }
}