import type { AfterChangeHook } from 'payload/dist/globals/config/types'

const setHomePageField:AfterChangeHook = async ({ doc, req: { payload } }) => {
    
    const homePageID = doc.homePage
    
    console.log(`##########################################`)
    console.log(homePageID)
    console.log(`##########################################`)
    
    await payload.update({
        collection : 'pages',
        where: { isHome: { equals: true } },
        data: { isHome: false }
    })

    await payload.update({
        collection: 'pages',
        id : homePageID,
        data : {
            isHome : true
        }
    })
    
}

export default setHomePageField