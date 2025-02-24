import fs from 'node:fs/promises';
import { DB_PATH } from '../constants/index.js';

export const countTotalPrice = async () => {
  try {
    const productsData = await fs.readFile(DB_PATH, 'utf-8');
    const products = JSON.parse(productsData);

    const totalPrice = products.reduce(
      (acc, { price }) => acc + Number(price),
      0
    );

    console.log('Сумарна вартість усіх позицій -', totalPrice.toFixed(2));
  } catch (error) {
    console.log(error);
  }
};

countTotalPrice();
