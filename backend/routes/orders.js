const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/', (req, res) => {

    db.query('SELECT * FROM Orders', (err, result) => {

        if(err){
            res.status(500).send(err);
        } else {
            res.json(result);
        }

    });

});

router.post('/', (req, res) => {

    const {
        user_id,
        total_price,
        shipping_cost,
        status
    } = req.body;

    const sql = `
        INSERT INTO Orders(user_id,total_price,shipping_cost,status)
        VALUES(?,?,?,?)
    `;

    db.query(
        sql,
        [user_id, total_price, shipping_cost, status],
        (err, result) => {

            if(err){
                res.status(500).send(err);
            } else {
                res.json({
                    message: 'Order created successfully'
                });
            }

        }
    );

});

module.exports = router;