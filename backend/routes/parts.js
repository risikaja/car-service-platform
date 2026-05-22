const express = require('express');

const router = express.Router();

const db = require('../db');


// GET ALL PARTS

router.get('/', (req, res) => {

    db.query(

        'SELECT * FROM parts',

        (err, result) => {

            if (err) {

                res.status(500).send(err);

            } else {

                res.json(result);

            }

        }

    );

});


// ADD PART

router.post('/', (req, res) => {

    const {

        name,
        brand,
        model,
        price,
        stock

    } = req.body;


    const sql = `

        INSERT INTO parts
        (name,brand,model,price,stock)

        VALUES(?,?,?,?,?)

    `;


    db.query(

        sql,

        [

            name,
            brand,
            model,
            price,
            stock

        ],

        (err, result) => {

            if (err) {

                console.log(err);

                return res
                    .status(500)
                    .send(err);

            }

            res.json({

                message:
                    'Part added successfully'

            });

        }

    );

});


// DELETE PART

router.delete('/:id', (req, res) => {

    const id = req.params.id;


    db.query(

        'DELETE FROM parts WHERE part_id = ?',

        [id],

        (err, result) => {

            if (err) {

                console.log(err);

                return res
                    .status(500)
                    .send(err);

            }

            res.json({

                message:
                    'Part deleted successfully'

            });

        }

    );

});


module.exports = router;