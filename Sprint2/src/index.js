const sequelize = require('./database/db');
const express = require('express');
const db = require('./database/db')
const app = express();


require('dotenv').config('../.env');
PORT = process.env.PORT || 5000;

app.use(express.json());

const insertAdmin = require('./schemas/insertAdmin')
const userRouter = require('./routes/users.routes');
const adressRouter = require('./routes/adresses.routes')
const productRouter = require('./routes/products.routes');
const payMethodRouter = require('./routes/payMethods.routes');
const orderRouter = require('./routes/orders.routes');



app.use('/users', userRouter);
app.use('/User/adress', adressRouter);
app.use('/products', productRouter);
app.use('/pays', payMethodRouter);
app.use('/orders', orderRouter);







db.sequelize.sync({ force: false })
    .then(()=> {
        console.log('This Project is connecting to MySQL DB');
        app.listen(PORT);
        console.log('Listen Port '+ PORT);
        insertAdmin; //Generacion ADMIN       
    })
    .catch(err => {
        console.log('Error to concect to DB:' +err);
    });
 




