import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/DmitriiProshutinskii/DmitriiProshutinskii.github.io
 */
const data = [
  {
    label: 'Звёзд на github у этого репозитория',
    key: 'stargazers_count',
    link: 'https://github.com/DmitriiProshutinskii/DmitriiProshutinskii.github.io/stargazers',
  },
  {
    label: 'Наблюдателей репозитория',
    key: 'subscribers_count',
    link: 'https://github.com/DmitriiProshutinskii/DmitriiProshutinskii.github.io/stargazers',
  },
  {
    label: 'Форков',
    key: 'forks',
    link: 'https://github.com/DmitriiProshutinskii/DmitriiProshutinskii.github.io/network',
  },
  {
    label: 'Открытых issue на github',
    key: 'open_issues_count',
    link: 'https://github.com/DmitriiProshutinskii/DmitriiProshutinskii.github.io/issues',
  },
  {
    label: 'Последнее обновление',
    key: 'pushed_at',
    link: 'https://github.com/DmitriiProshutinskii/DmitriiProshutinskii.github.io/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;
