import type { Payload } from 'payload'

import { home } from './home'

export const seed = async (payload: Payload): Promise<void> => {
  
  await payload.create({
    collection: 'users',
    data: {
      email: 'dev@gmail.com',
      name: 'Dev',
      password: 'dev',
      roles: ['admin'],
    },
  })

  const homeJSON = JSON.parse(
    JSON.stringify(home),
  )
  
  const homePage = await payload.create({
    collection: 'pages',
    data: homeJSON,
  })
  
  await payload.updateGlobal({
    slug: 'settings',
    data: {
      homePage: homePage.id,
    },
  })

}
