const skills = [
  {
    title: 'Flutter',
    competency: 5,
    category: ['Mobile Dev', 'Core'],
  },
  {
    title: 'Dart',
    competency: 5,
    category: ['Languages', 'Core'],
  },
  {
    title: 'BLoC / Cubit',
    competency: 5,
    category: ['Architecture', 'State Management'],
  },
  {
    title: 'Clean Architecture',
    competency: 5,
    category: ['Architecture'],
  },
  {
    title: 'TDD',
    competency: 4,
    category: ['Architecture', 'Testing'],
  },
  {
    title: 'Provider',
    competency: 4,
    category: ['State Management'],
  },
  {
    title: 'Firebase',
    competency: 4,
    category: ['Tools', 'Backend'],
  },
  {
    title: 'REST API',
    competency: 4,
    category: ['Backend'],
  },
  {
    title: 'CI/CD (Codemagic, GitHub Actions)',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Дизайн-системы / UIKit',
    competency: 4,
    category: ['UI/UX'],
  },
  {
    title: 'Google Maps SDK',
    competency: 3,
    category: ['Tools', 'Mobile Dev'],
  },
  {
    title: 'Юнит / виджет / интеграционные тесты',
    competency: 4,
    category: ['Testing'],
  },
  {
    title: 'Swift',
    competency: 2,
    category: ['iOS', 'Mobile Dev'],
  },
  {
    title: 'Kotlin',
    competency: 2,
    category: ['Android', 'Mobile Dev'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['GameDev', 'Languages'],
  },
  {
    title: 'Unity',
    competency: 3,
    category: ['GameDev', 'Tools'],
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
  '#f0a500',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index % colors.length],
  }));

export { categories, skills };
