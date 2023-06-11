import { Field } from 'payload/types';
import Input from './Input';

const arrayMap = (config={}): Field => ({
  name: 'arrayMap',
  type: 'text',
  admin: {
    components: {
      Field: Input,
    },
  },
  ...config
})

export default arrayMap;