const express = require('express');
const cors = require('cors');

const usersRoutes = require('./routes/users');
const partsRoutes = require('./routes/parts');
const ordersRoutes = require('./routes/orders');
const servicesRoutes = require('./routes/services');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/parts', partsRoutes);
app.use('/orders', ordersRoutes);
app.use('/services', servicesRoutes);

app.listen(5000, () => {
    console.log('Server running on port 3000');
});