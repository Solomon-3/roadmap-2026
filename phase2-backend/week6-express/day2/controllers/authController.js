// week7 day 5, jwt

const pool = require("../db");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register
async function register(req, res, next){
    const {name,password}=req.body;

    if (!name || !password){
       return res.status(400).json({
                   success: false,
                   message: "name and password required"
              });
    }

    try{
        const hashedPassword = await bcrypt.hash(password,10);

        const result = await pool.query(
             "INSERT INTO users (name, password) VALUES ($1,$2) RETURNING id, name",
             [name, hashedPassword]
        );

        res.json({
          success: true,
          data: result.rows[0]
        });
    }
    catch(err){
          next(err);
    }
}

//login
async function login(req, res,next){
     const {name, password}=req.body;

     try{
       const result = await pool.query(
           "SELECT * FROM users WHERE name =$1",
           [name]
       );

       if (result.rows.length===0){
           return res.status(401).json({
              success: false,
              message: "INVALID CREDENTIALS"
           });
        }

        const user =result.rows[0];
        const valid = await bcrypt.compare(password,user.password);

        if(!valid){
           return res.status(401).json({
                success: false,
                message: "invalid credentials"
           });
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET || "secretkey",
            { expiresIn: "1h"}
        );

        res.json({
           success: true,
           token
        });
     }
     catch (err){
        next(err);
     }
}

module.exports  = {register, login};
