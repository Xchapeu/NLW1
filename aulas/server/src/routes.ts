import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//index, show, create, delete, update
routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

//app.get('/users/:id', (request, response) => {
//   const id = Number(request.params.id);
//   const user = users[id];
//    return response.json(user);
//});

//app.post('/users', (request, response) => {
//    const data = request.body; 
//    const user = {
//        name: data.name,
//        email: data.email
//    };
//    return response.json(user);
//});

export default routes;