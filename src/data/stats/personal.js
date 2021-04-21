import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1996-12-31T06:45:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const CurrentYear = () => {
  const date = new Date().getFullYear();
  return <>Прочитано книг в {date}</>;
};

const data = [
  {
    key: 'age',
    label: 'Возраст',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Посещенные страны',
    value: 11,
    link:
      'https://www.google.com/maps/d/u/0/embed?mid=1Yb2u5jH6WMYyK7A1QseHNdlNS2jzcE7G',
  },
  {
    key: 'location',
    label: 'Город проживания',
    value: 'Долгопрдуный, МО',
  },
  {
    key: 'born',
    label: 'Родился в',
    value: 'г. Якутск',
    link:
      'https://ru.wikipedia.org/wiki/%D0%AF%D0%BA%D1%83%D1%82%D1%81%D0%BA',
  },
  {
    key: 'books',
    label: <CurrentYear />,
    value: '2',
  },
];

export default data;
