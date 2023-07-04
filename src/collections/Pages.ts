import { CollectionConfig } from 'payload/types';
import home from '../fields/homePage';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    home
  ],
}

export default Pages;