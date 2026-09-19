const positions = [
  {
    company: 'Urbi / UseTech — проект Balady',
    position: 'Senior Flutter Developer',
    link: 'https://www.balady.gov.sa',
    daterange: 'Март 2024 - н.в.',
    points: [
      'Муниципальный супер-апп Саудовской Аравии (команда 2GIS). 30 тыс. MAU, команда 8 человек. Flutter, Dart, BLoC, 2GIS MSDK, REST API.',
      'Feature Owner направления «Поиск по карте»: полный цикл — редизайн UX, A/B-тестирование гипотез, реализация и метрики. Улучшение релевантности и скорости поиска на 10-15% по всей аудитории.',
      'Ключевой контрибьютор внутреннего UIKit-пакета (47% всех PR, ~30% кодовой базы): проектирование API компонентов, pixel-perfect реализация, версионирование и документация в условиях быстро меняющейся дизайн-системы.',
      'Настройка автоматизации pull-request процессов, регулярное код-ревью в команде из 8 инженеров.',
    ],
  },
  {
    company: 'Epic Charging',
    position: 'Lead Mobile Developer',
    link: 'https://epiccharging.com',
    daterange: 'Январь 2023 - Сентябрь 2024',
    points: [
      'Платформа управления зарядкой электропарков, Сан-Франциско, США. Стартап из 4 человек, единственный Flutter-разработчик. BLoC, Clean Architecture, TDD, Firebase. Контракт, параллельно с Urbi с марта 2024.',
      'Спроектировал архитектуру кроссплатформенного приложения с нуля на Clean Architecture + TDD: сокращение продакшн-багов на ~25% (Sentry + Jira).',
      'Реализовал ключевые фичи: Firebase Authentication, push-уведомления (FCM), deep links, Google Maps SDK с кастомными иконками (CustomPainter), Apple Wallet Pass через нативный Swift.',
      'Полный мобильный цикл как единственный разработчик: CI/CD (Codemagic + GitHub Actions), QA-окружения, публикация в App Store и Google Play.',
    ],
  },
  {
    company: 'Konstructly LTD.',
    position: 'Flutter Developer',
    link: 'https://konstructly.com',
    daterange: 'Январь 2022 - Январь 2023',
    points: [
      'SaaS для управления строительными проектами, Лондон. Команда 8 человек, 2 Flutter-разработчика. Provider, GetX, Firebase, Codemagic.',
      'Разработал и покрыл тестами UIKit-пакет со Storybook, pixel-perfect верстка по Figma.',
      'Firebase Auth, кастомный обработчик ошибок, deep links. CI/CD (Codemagic + GitHub Actions), Sentry, Amplitude.',
    ],
  },
  {
    company: 'No Finish Line LTD. — Pawen',
    position: 'Flutter Developer',
    link: 'https://www.pawen.app',
    daterange: 'Август 2021 - Апрель 2022',
    points: [
      'Приложение для здорового образа жизни, Лондон. Команда 4 человека. Provider, Get_It, RevenueCat, Firebase.',
      'Pixel-perfect анимированные экраны по Figma, сборки TestFlight.',
      'Интеграции: Mixpanel, Amplitude, AppsFlyer, Sentry, RevenueCat (пейволл).',
    ],
  },
  {
    company: 'RAMAX GROUP — приложение Аэрофлот',
    position: 'Junior iOS Developer',
    link: 'https://www.ramax.ru/',
    daterange: 'Май 2021 - Октябрь 2021',
    points: [
      'RxSwift, MVVM. Улучшил алгоритм поиска билетов по датам.',
      'Переработал архитектуру push-уведомлений.',
    ],
  },
  {
    company: 'Strata Solutions',
    position: 'Mixed Reality Lead Developer',
    link: 'https://www.cet-mipt.ru/',
    daterange: 'Август 2018 - Май 2021',
    points: [
      'HoloLens 2, C#, Unity, Photon Unity Networking. Нефтегазовый сектор (резидент Сколково).',
      'Спроектировал архитектуру приложения для HoloLens 2 на C#/Unity, руководил стажёром.',
    ],
  },
];

export default positions;
