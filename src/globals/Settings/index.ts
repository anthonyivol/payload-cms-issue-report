import type { GlobalConfig } from 'payload/types'
import setHomePageField from './hooks/setHomePageField'

const Settings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: () => true,
    update: () => true,
  },
  hooks: {
    afterChange : [setHomePageField]
  },
  fields: [
    {
      name: 'homePage',
      type: 'relationship',
      relationTo: 'pages',
    }
  ],
}

export default Settings