import { v4 as uuidv4 } from 'uuid';
import Drawing from '../images/drawing.jpg';
import LeeHeadshot from '../images/Lee Headshot.jpg';
import Pitur from '../images/pitur.jpg';
import Stop from '../images/STOP.jpg';
import Sxc from '../images/sxc.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Blah',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec leo est. Ut non nisi in leo rutrum egestas dictum.',
    img: Drawing,
  },
  {
    id: uuidv4(),
    name: 'Blah',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec leo est. Ut non nisi in leo rutrum egestas dictum.',
    img: LeeHeadshot,
  },
  {
    id: uuidv4(),
    name: 'Blah',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec leo est. Ut non nisi in leo rutrum egestas dictum.',
    img: Pitur,
  },
  {
    id: uuidv4(),
    name: 'Blah',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec leo est. Ut non nisi in leo rutrum egestas dictum.',
    img: Stop,
  },
  {
    id: uuidv4(),
    name: 'Blah',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec leo est. Ut non nisi in leo rutrum egestas dictum.',
    img: Sxc,
  },
];

export default projects;
