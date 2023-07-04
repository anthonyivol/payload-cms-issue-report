import { Field } from 'payload/types';
import Cell from './Cell';

const isHome: Field = {
  name: 'isHome',
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

export default isHome;
