import dotenv from 'dotenv';
dotenv.config();

export const { PORT, DATABASE_URL, DATABASE_SSL } = process.env;
