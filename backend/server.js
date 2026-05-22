const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


// ROUTES

const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const partsRoutes = require('./routes/parts');
const ordersRoutes = require('./routes/orders');
const servicesRoutes = require('./routes/services');


// API ROUTES

app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/parts', partsRoutes);
app.use('/orders', ordersRoutes);
app.use('/services', servicesRoutes);


// SHIPPING API

app.get('/shipping/:km', (req, res) => {

    const km = parseFloat(req.params.km);

    const shippingCost = km * 0.5;

    res.json({

        kilometers: km,
        shipping_cost: shippingCost

    });

});


// SERVER

app.listen(5000, () => {

    console.log('Server running on port 5000');

});