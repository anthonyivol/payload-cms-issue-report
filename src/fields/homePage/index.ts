import { Field } from 'payload/types';
import Cell from './Cell';

const home: Field = {
  name: 'homePage',
  label: "Accueil",
  type: 'checkbox',
  defaultValue: false,
  admin: {
    position: 'sidebar',
    readOnly: true,
    components: {
      Cell,
    },
  },
};

export default home;
