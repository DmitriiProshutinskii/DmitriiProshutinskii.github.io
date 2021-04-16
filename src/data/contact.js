import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';
import { faVk } from '@fortawesome/free-brands-svg-icons/faVk';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
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
    link: 'https://vk.com/koptehe',
    label: 'Vk',
    icon: faVk,
  },
  {
    link: 'https://www.instagram.com/koptehe/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/dmitrii-proshutinskii-797259191/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.facebook.com/koptehe',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'mailto:dmitriy.proshutinskiy@phystech.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
