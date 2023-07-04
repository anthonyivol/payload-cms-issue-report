import { CollectionConfig } from 'payload/types';
import isHome from '../fields/isHome';

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
    isHome
  ],
}

export default Pages;