// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'C#',
    competency: 3,
    category: ['GameDev', 'Languages', '.NET', 'Core'],
  },
  {
    title: 'Unity',
    competency: 3,
    category: ['GameDev', 'Tools', '3D'],
  },
  {
    title: 'MRTK 2.x',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Bash',
    competency: 1,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'MySQL',
    competency: 1,
    category: ['Databases', '.NET'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Python',
    competency: 2,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Swift',
    competency: 1,
    category: ['iOS', 'Mobile Dev'],
  },
  {
    title: 'Adobe After Effecs',
    competency: 3,
    category: ['Media', 'Tools'],
  },
  {
    title: 'Adobe Premier Pro',
    competency: 3,
    category: ['Media', 'Tools'],
  },
  {
    title: 'Adobe Illustrator',
    competency: 2,
    category: ['Media', 'Tools', 'UI/UX'],
  },
  {
    title: 'Blender',
    competency: 2,
    category: ['Tools', '3D'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
