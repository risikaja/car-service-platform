const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/', (req, res) => {

    db.query('SELECT * FROM Users', (err, result) => {

        if(err){
            res.status(500).send(err);
        } else {
            res.json(result);
        }

    });

});

router.post('/', (req, res) => {

    const { name, email, password, role, discount } = req.body;

    const sql = `
        INSERT INTO Users(name,email,password,role,discount)
        VALUES(?,?,?,?,?)
    `;

    db.query(
        sql,
        [name, email, password, role, discount],
        (err, result) => {

            if(err){
                res.status(500).send(err);
            } else {
                res.json({
                    message: 'User created successfully'
                });
            }

        }
    );

});

module.exports = router;