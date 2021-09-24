import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
  LOGIN_URL: process.env.BASE_URL
}

export const CREDENTIALS = {
  MY_USER: {
    EMAIL: process.env.MY_EMAIL,
    PASSWORD: process.env.MY_PASSWORD
  }
}
