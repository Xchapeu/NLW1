import { Request, Response } from 'express';
import knex from '../database/connection';
 
class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            };
        });
    
        return response.json(serializedItems);
        
    //    const search = String(request.query.search);
    //    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    //    response.json(filteredUsers);
    }
}

export default ItemsController;