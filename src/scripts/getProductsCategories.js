import fs from 'node:fs/promises';
import { DB_PATH } from '../constants/index.js';

export const getProductsCategories = async () => {
  try {
    const productsData = await fs.readFile(DB_PATH, 'utf-8');
    const products = JSON.parse(productsData);

    const findCategories = products
      .map((item) => item.category)
      .filter((category, index, array) => array.indexOf(category) === index);
    console.log(findCategories);
  } catch (error) {
    console.log(error);
  }
};

getProductsCategories();
