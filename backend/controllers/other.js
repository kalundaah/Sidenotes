// Db functions in controllers
require("../db/connection.js")


// home page
const home = (req,res)=>{
    res.status(200).send('<h1>Home page</h1>')
};


const getsignin = (req,res)=>{
    res.status(200).send('<h1>Sign in page</h1>')
};

const postsignin  = (req,res)=>{
    res.status(200).send('<h1>Send sign in details</h1>')
};

const getsignup  = (req,res)=>{
    res.status(200).send('<h1>Sign up page</h1>')
};

const postsignup = (req,res)=>{
    res.status(200).send('<h1>send sign up details</h1>')
};

module.exports ={ 
    home,
    getsignin
};