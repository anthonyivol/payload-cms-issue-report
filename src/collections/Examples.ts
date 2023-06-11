import { CollectionConfig } from 'payload/types';
import arrayMap from '../fields/arrayMap'

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
  slug: 'examples',
  admin: {
    useAsTitle: 'someField',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'someField',
      type: 'text',
    },
    arrayMap({
      custom: {
        fromField: 'someField',
        arrayField : 'list'
      }
    }),
    {
      name: 'list',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text'
        },
        {
          name: 'value',
          type: 'number'
        }
      ]
    }
  ],
}

export default Examples;