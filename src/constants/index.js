import path from 'node:path';

// export const DB_PATH = path.resolve('src', 'db', 'db.json');

export const DB_PATH = path.join(process.cwd(), 'src', 'db', 'db.json');
