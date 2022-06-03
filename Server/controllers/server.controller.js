const userModel = require('../models/user.model')
const register =(req, res)=>{
    let user = req.body
    console.log(req.body)
    userModel.find({email: req.body.email}, (err, result)=>{
        console.log(result)
        if (result.length == 0) {
            let form = new userModel(user)
            form.save((err)=>{
                if (err) {
                    res.send({msg: 'Error! Please try again'})
                } else {
                    res.send({msg: 'Success'})
                }
            })
        } else {
            res.send({msg: 'E-mail already exists'})
        }
    })
}

let ServerController = {register}
module.exports = ServerController