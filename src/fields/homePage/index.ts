import { Field } from 'payload/types';
import Cell from './Cell';

const home: Field = {
  name: 'homePage',
  label: "Accueil",
  type: 'checkbox',
  defaultValue: false,
  admin: {
    readOnly: true,
    hidden: true,
    components: {
      Cell,
    },
  },
};

export default home;
