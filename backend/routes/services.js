const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/', (req, res) => {

    db.query('SELECT * FROM Services', (err, result) => {

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
        description,
        service_date
    } = req.body;

    const sql = `
        INSERT INTO Services(user_id,description,service_date)
        VALUES(?,?,?)
    `;

    db.query(
        sql,
        [user_id, description, service_date],
        (err, result) => {

            if(err){
                res.status(500).send(err);
            } else {
                res.json({
                    message: 'Service created successfully'
                });
            }

        }
    );

});

module.exports = router;