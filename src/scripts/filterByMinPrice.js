import fs from 'node:fs/promises';
import { DB_PATH } from '../constants/index.js';

export const filterByMinPrice = async (minPrice) => {
  try {
    const productsData = await fs.readFile(DB_PATH, 'utf-8');
    const parseProduct = JSON.parse(productsData);
    const filteredProducts = parseProduct.filter(
      (product) => product.price >= minPrice
    );
    console.table(filteredProducts);
  } catch (error) {
    console.log(error);
  }
};

filterByMinPrice(750);
