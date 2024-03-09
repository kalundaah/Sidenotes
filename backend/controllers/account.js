// Db functions in controllers
require("../db/connection.js")


//my notes functions
const getnotes = (req,res)=>{
    res.status(200).send('<h1>Getting all my notes</h1>')
}
const postnotes = (req,res)=>{
    res.status(200).send('<h1>creating a note</h1>')
}
const putnotes = (req,res)=>{
    res.status(200).send('<h1>Updating my notes</h1>')
}
const deletenotes = (req,res)=>{
    res.status(200).send('<h1>Deleting my notes</h1>')
}

// my tasks page
const gettasks = (req,res)=>{
    res.status(200).send('<h1>Getting all my tasks</h1>')
}
const posttasks = (req,res)=>{
    res.status(200).send('<h1>creating a task</h1>')
}
const puttasks = (req,res)=>{
    res.status(200).send('<h1>Updating my tasks</h1>')
}
const deletetasks = (req,res)=>{
    res.status(200).send('<h1>Deleting my tasks</h1>')
}

//labels page
const getlabels = (req,res)=>{
    res.status(200).send('<h1>Getting all my labels</h1>')
}
const postlabels = (req,res)=>{
    res.status(200).send('<h1>creating a label</h1>')
}
const putlabels = (req,res)=>{
    res.status(200).send('<h1>Updating my labels</h1>')
}
const deletelabels = (req,res)=>{
    res.status(200).send('<h1>Deleting my labels</h1>')
}

//Account page
const getaccount = (req,res)=>{
    res.status(200).send('<h1>Getting all my account details</h1>')
}
const postaccount = (req,res)=>{
    res.status(200).send('<h1>creating an account</h1>')
}
const putaccount = (req,res)=>{
    res.status(200).send('<h1>Updating my account</h1>')
}
const deleteaccount = (req,res)=>{
    res.status(200).send('<h1>Deleting my account</h1>')
}

module.exports = {
    getnotes,
    gettasks,
    getlabels,
    getaccount,
    postnotes,
    posttasks,
    postlabels,
    postaccount,
    putnotes,
    puttasks,
    putlabels,
    putaccount,
    deletenotes,
    deletetasks,
    deletelabels,
    deleteaccount,
};