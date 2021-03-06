
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import OrphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

export default {

    async getAll(request: Request, response: Response) {
        return response.json(OrphanageView.renderMany(await getRepository(Orphanage).find({
            relations: ['images']
        })));
    },

    async getIndex(request: Request, response: Response) {
        return response.json(OrphanageView.render(await getRepository(Orphanage).findOneOrFail(request.params.id, {
            relations: ['images']
        })));
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename};
        })
        
        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        };

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images: Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const orphanage = getRepository(Orphanage).create(data);
        
        return response.status(201).json(await getRepository(Orphanage).save(orphanage));
    }
}