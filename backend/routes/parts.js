const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/', (req, res) => {

    db.query('SELECT * FROM Parts', (err, result) => {

        if(err){
            res.status(500).send(err);
        } else {
            res.json(result);
        }

    });

});

router.get('/:id', (req, res) => {

    const id = req.params.id;

    db.query(
        'SELECT * FROM Parts WHERE part_id = ?',
        [id],
        (err, result) => {

            if(err){
                res.status(500).send(err);
            } else {
                res.json(result);
            }

        }
    );

});

router.post('/', (req, res) => {

    const { name, brand, model, price, stock } = req.body;

    const sql = `
        INSERT INTO Parts(name,brand,model,price,stock)
        VALUES(?,?,?,?,?)
    `;

    db.query(
        sql,
        [name, brand, model, price, stock],
        (err, result) => {

            if(err){
                res.status(500).send(err);
            } else {
                res.json({
                    message: 'Part added successfully'
                });
            }

        }
    );

});

module.exports = router;