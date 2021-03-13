
import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/OrphanagesController';
import UploadConfig from './config/upload';

const routes = Router();
const upload = multer(UploadConfig);

routes.get('/users', (request, response) => {
    return response.json({message: ["João"]});
});

routes.post('/orphanages', upload.array('images'), OrphanagesController.create); 
routes.get('/orphanages', OrphanagesController.getAll);
routes.get('/orphanages/:id', OrphanagesController.getIndex);



export default routes;