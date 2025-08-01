import dotenv from 'dotenv'
dotenv.config()

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET_KEY: string,
    }
  }
}

export {}
