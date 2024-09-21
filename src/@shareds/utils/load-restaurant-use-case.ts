import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';
import { IRestaurantsEntity } from '../../app/entities';

export const restaurants: IRestaurantsEntity[] = [];
export const LoadRestaurants = () => {

  const filePath = path.join(__dirname, '../../infra/database/restaurants.csv');
  return new Promise<void>((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv({ separator: ';' }))
      .on('data', (data: IRestaurantsEntity) => {

        const latitude = parseFloat(String(data.latitude));
        const longitude = parseFloat(String(data.longitude));

        const restaurant: IRestaurantsEntity = {
          name: data.name || 'N/A',
          address: data.address || 'N/A',
          city: data.city || 'N/A',
          latitude,
          longitude,
        };
        restaurants.push(restaurant);
      })
      .on('end', () => {
        resolve();
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};