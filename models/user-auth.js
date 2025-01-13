const db = require('../config/db')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const SECRET_KEY = '7ajkoasoomsddw1ilsj9n'

const userRegistration = async (data) => {
    const {customer_id,name,email,password,phone,address} = data

    if(!name || !email || !password){
        return "Data is not valid"
    }
    try{
        const salt = 10
        const hash = await bcrypt.hash(password,salt)
        const [result] = await db.query('insert into customer (customer_id,name,email,password,phone,address) values(?,?,?,?,?,?)',[customer_id,name,email,hash,phone,address])
        return ({id:result.insertId,hash:hash})
    } catch (error) {
        console.log(error);
    }
}

const userLogin = async (data) => {
    const {email,password} = data
    if(!email|| !password){
        return "Email and Password Required"
    }
    try{
        const query = "select * from customer where email=?"
        const [result] = await db.query(query,[email])
        const isLogin = await bcrypt.compare(password,result[0].password)
        if(isLogin){
            const payload = {
                id:result[0].id,
                name:result[0].name,
                email:result[0].email
            }
            const token = jwt.sign(payload,SECRET_KEY,{expiresIn:"1h"})
            return ({
                message : "Login Successfulll",
                token : token
            })
        }
        return ({
            message:"Wrong username or password"
        })
    } catch(error){
        console.log(error)   
    }
}

const getAllUser = async (data) => {
    try {
        const query = "select * from customer"
        const [result] = await db.query(query)
        return result
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (id, customer) => {
    const {name,email,password,phone,address} = customer
    const [result] = await db.query('UPDATE customer SET name=?, email=?, password=?, phone=?, address=? WHERE id=?', [name,email,password,phone,address,id]);
    return result.affectedRows;
}

const deleteUser = async (id) => {
    const [result] = await db.query('DELETE FROM customer WHERE id=?', id);
    return result.affectedRows;
}


module.exports = {userRegistration,userLogin,getAllUser,updateUser,deleteUser}