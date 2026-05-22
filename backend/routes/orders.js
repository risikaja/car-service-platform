const express = require('express');

const router = express.Router();

const db = require('../db');


// CREATE ORDER

router.post('/', (req, res) => {

    const {

        user_id,
        total_price,
        shipping_cost,
        status,
        items

    } = req.body;


    const orderSql = `

        INSERT INTO Orders
        (user_id,total_price,shipping_cost,status)

        VALUES(?,?,?,?)

    `;


    db.query(

        orderSql,

        [

            user_id,
            total_price,
            shipping_cost,
            status

        ],

        (err, result) => {

            if (err) {

                console.log(err);

                return res
                    .status(500)
                    .send(err);

            }


            const orderId =
                result.insertId;


            // NO ITEMS

            if (items.length === 0) {

                return res.json({

                    message:
                        'Order created successfully'

                });

            }


            let completedQueries = 0;


            items.forEach((item) => {

                const itemSql = `

                    INSERT INTO order_items
                    (order_id,part_id,quantity)

                    VALUES(?,?,?)

                `;


                db.query(

                    itemSql,

                    [

                        orderId,
                        item.part_id,
                        item.quantity

                    ],

                    (itemErr) => {

                        if (itemErr) {

                            console.log(itemErr);

                            console.log(item);

                            return res
                                .status(500)
                                .send(itemErr);

                        }


                        completedQueries++;


                        // ALL INSERTS FINISHED

                        if (

                            completedQueries ===
                            items.length

                        ) {

                            res.json({

                                message:
                                    'Order created successfully'

                            });

                        }

                    }

                );

            });

        }

    );

});


// GET ORDERS

router.get('/', (req, res) => {

    db.query(

        'SELECT * FROM Orders',

        (err, result) => {

            if (err) {

                res.status(500).send(err);

            } else {

                res.json(result);

            }

        }

    );

});

router.put('/:id', (req, res) => {

    const id = req.params.id;

    const { status } = req.body;


    const sql = `

        UPDATE Orders
        SET status = ?
        WHERE order_id = ?

    `;


    db.query(

        sql,

        [status, id],

        (err, result) => {

            if(err){

                console.log(err);

                return res
                    .status(500)
                    .send(err);

            }

            res.json({

                message:
                    'Order updated successfully'

            });

        }

    );

});

module.exports = router;