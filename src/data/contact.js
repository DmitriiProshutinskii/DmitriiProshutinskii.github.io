import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/DmitriiProshutinskii',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://t.me/koptehe',
    label: 'Telegram',
    icon: faTelegramPlane,
  },
  {
    link: 'https://www.linkedin.com/in/dmitrii-proshutinskii-797259191/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:koptehe@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
