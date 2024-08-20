const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const SignUpModel = require('./models/SignUp')
const bcrypt = require('bcrypt')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/Register')

app.listen(3001, ()=>{
    console.log('Server is running on port 3001')
})
//Routes

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await SignUpModel.findOne({ email: email });

        if (!user) {
            res.status(406);
            return res.json('Incorrect Details');
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.json('Password Incorrect');
        }

        return res.json(user); // Or 'Success' if you prefer not to return user data

    } catch (e) {
        return res.status(500).json(e);
    }
});


app.post('/signup', async (req, res)=>{
    const {email,firstName,lastName, password} = req.body
    try{

        const hashedPassword = await bcrypt.hash(password, 16)
        const existingUser = await SignUpModel.findOne({email:email});
        if(existingUser){
            res.status(400);
            return res.json('User already exists');
        }
        const newUser = await SignUpModel.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hashedPassword
        });
        res.json(newUser);
    }catch (e){
        res.status(500);
        res.json(e);
    }

        // .then((signup)=>res.json(signup))
        // .catch((err)=>res.json(err))
})
