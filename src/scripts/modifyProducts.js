import fs from 'node:fs/promises';
import { DB_PATH } from '../constants/index.js';
import { log } from 'node:console';

export const modifyProducts = async () => {
  try {
    const productsData = await fs.readFile(DB_PATH, 'utf-8');
    const products = JSON.parse(productsData);

    const modifiedProducts = products.map(
      ({ description, ...product }) => product
    );
    await fs.writeFile(DB_PATH, JSON.stringify(modifiedProducts, undefined, 2));
  } catch (error) {
    console.log(error);
  }
};

modifyProducts();
