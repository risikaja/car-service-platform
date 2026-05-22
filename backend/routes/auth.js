const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../db');

require('dotenv').config();


// REGISTER

router.post('/register', async (req, res) => {

    const {
        name,
        email,
        password
    } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
            INSERT INTO Users(name,email,password,role,discount)
            VALUES(?,?,?,?,?)
        `;

        db.query(
            sql,
            [name, email, hashedPassword, 'customer', 10],
            (err, result) => {

                if(err){
                    res.status(500).send(err);
                } else {

                    res.json({
                        message: 'User registered successfully'
                    });

                }

            }
        );

    } catch(error){

        res.status(500).json(error);

    }

});


// LOGIN

router.post('/login', (req, res) => {

    const {
        email,
        password
    } = req.body;

    const sql = `
        SELECT * FROM Users WHERE email = ?
    `;

    db.query(sql, [email], async (err, result) => {

        if(err){
            return res.status(500).send(err);
        }

        if(result.length === 0){

            return res.status(401).json({
                message: 'User not found'
            });

        }

        const user = result[0];

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if(!validPassword){

            return res.status(401).json({
                message: 'Invalid password'
            });

        }

        const token = jwt.sign(

            {
                id: user.user_id,
                email: user.email
            },

            process.env.JWT_SECRET,

            {
                expiresIn: '1d'
            }

        );

        res.json({

            token,
            user: {
                id: user.user_id,
                name: user.name,
                email: user.email,
                discount: user.discount
            }

        });

    });

});

module.exports = router;