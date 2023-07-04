import express from 'express'
import payload from 'payload'

import { seed } from './seed'

const app = express()

const start = async () => {
  
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })
  
  payload.logger.info('Seeding Payload...')
  console.log(seed)
  await seed(payload)
  payload.logger.info('Done.')
  process.exit()
  
}

start()
