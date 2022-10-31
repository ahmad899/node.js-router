import express from "express";
import cardsRestController from './cards/routes/cardsRestController.js';
import usersRestController from './users/routes/usersRestController.js';
const app = express();
app.use(express.json());

app.use('/cards', cardsRestController);
app.use('/users', usersRestController);




app.listen(3000,()=>console.log('listening to 3000'));