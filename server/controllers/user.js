const User= require('../Modules/user')


// const getAllUsers = async (req, res) => {
//     try {
//         let myUsers = await User.find().populate('name')
//         res.status(200).json({ users: myUsers });
//     }
//     catch (error) {
       
//         res.send("error", error.mssage)
//     }
// }

// const getAllItems = async (req, res) => {


//     try {
//         let myItems = await User.find().populate('id')
//         res.status(200).json({ myItems: myItems });
//     }
//     catch {
//         (error)
//         res.send("cannot save new user", error.mssage)
//     }

// }

const getAllUsers=async (req, res) => {
    try {
        let allusers = await User.find()
        res.status(200).json({ allUsers: allusers });
    }
    catch {
        (error)
        res.send("error", error.mssage)
    }
}


// const getAll = (req, res) => {
//     //    let myUsers=new User(req.body)
//     let myUsers= User.find(
//         function (err, myUsers) {
//             if (err) {
//                 res.status(400).send(err);
//             }
//             else {
//                 res.status(200).json({ users: myUsers })
//             }
//         })
// }


const newUser = async (req, res) => {
    console.log("myUser")
    let myUser = new User(req.body)
    console.log(myUser)
    try {
        await myUser.save();
        res.status(200).json({ newUser: myUser })
    }
    catch (error) {
        res.send("can't save new user...", error.message)
    }
}

  module.exports={  newUser,getAllUsers,getAllUsers};