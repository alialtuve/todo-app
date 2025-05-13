import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const { DB_NAME, MONGO_PORT, 
        MONGO_USER, MONGO_PASSWORD } = process.env

const PORT = MONGO_PORT ? Number(MONGO_PORT) : 27018

export const client = mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@dbmongo:${PORT}/${DB_NAME}?authSource=admin`)
