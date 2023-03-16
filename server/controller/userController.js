
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const userModel = require('../model/userModel')
const contactModel = require('../model/contactModel')
const bcrypt = require('bcrypt')

module.exports = {

    userSignup: (req, res) => {

        userModel.findOne({ email: req.body.email })
            .then((existinguser) => {

                if (existinguser) {

                    return res.status(404).json({ message: "Email Id already exist" })
                }

                bcrypt.hash(req.body.password, 10).then((password) => {
                    req.body.password = password
                    userModel.create(req.body)
                        .then(() => {
                            res.status(201).json({ message: 'Account created' })
                        })
                        .catch((er) => {

                            res.status(500).json({ message: er.message })
                        })
                })
                    .catch((er) => {

                        res.status(500).json({ message: er.message })
                    })


            })
            .catch((er) => {

                res.status(500).json({ message: er.message })
            })
    },




    userLogin: (req, res) => {

        userModel.findOne({ email: req.body.email })
            .then((user) => {

                if (!user) return res.status(403).json({ message: 'Incorrect Email' })

                bcrypt.compare(req.body.password, user.password)
                    .then((status) => {

                        if (!status) return res.status(403).json({ message: 'Incorrect Password' })

                        res.status(200).json({ message: 'Login Success', userId: user._id })
                    })
            })

    },


    addContact: (req, res) => {

        console.log(req.body)
        req.body.userId = new ObjectId(req.body.userId)

        console.log(req.body.userId)

        contactModel.findOne({ user: req.body.userId }).then((doc) => {

            if (doc) {

                let data = {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone
                }

                contactModel.updateOne({ user: req.body.userId }, {
                    $push: { contacts: data }
                })
                    .then(() => {

                        res.status(200).json({ message: 'Conatct Added' })
                    })
                    .catch((er) => {

                        res.status(500).json({ message: er.message })
                    })

                return;
            }


            let data = {
                user: req.body.userId,
                contacts: [
                    {
                        name: req.body.name,
                        email: req.body.email,
                        phone: req.body.phone
                    }
                ]
            }

            contactModel.create(data).then(() => {

                res.status(200).json({ message: 'Contact Added' })

            })
                .catch((er) => {

                    res.status(500).json({ message: er.message })
                })

        })


    },

    getContact: (req, res) => {

        console.log('paramsssssss ', req.params.id)
        let id = new ObjectId(req.params.id)

        contactModel.findOne({ user: id })
            .then((data) => {

                res.status(200).json(data)

            })
            .catch((er) => {
                res.status(500).json({ message: er.message })
            })

    },


    viewContact: (req, res) => {
        console.log(req.params.id, req.params.userId, 'vew')

        const userId = new ObjectId(req.params.userId)
        const contactId = new ObjectId(req.params.id)

        contactModel.aggregate([
            { $match: { user: userId } },
            { $unwind: '$contacts' },
            { $match: { 'contacts._id': contactId } }

        ])
            .then((doc) => {
                res.status(200).json(doc)
            })
            .catch((er) => {
                console.log(er)
            })
    },



    udateContact:(req,res)=>{
         
      
        let userId = new ObjectId(req.params.userId)
        let id = new ObjectId(req.params.id)
        delete req.body._id
        
        contactModel.updateOne({user:userId,'contacts._id':id},{
           $set:{'contacts.$.name':req.body.name,'contacts.$.email':req.body.email,'contact.$.phone':req.body.phone}
        })
        .then(()=>{
            res.status(200).json({message:'updated'})
        })
        .catch((er)=>{
            res.status(500).json({message:er.message})
        })
    }
    ,
    

    deletContact: (req, res) => {

        let userId = new ObjectId(req.params.userId)
        let id = new ObjectId(req.params.id)

        contactModel.updateOne({user:userId},{
             
            $pull:{contacts:{_id:id}}
        })
        .then(()=>{
            
            res.status(200).json({message:"deleted"})
        })

        .catch((er)=>{
            res.status(500).json({message:er.message})
        })
      
    }
} 