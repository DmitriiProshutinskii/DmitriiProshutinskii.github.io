import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Персональный сайт</Link></h2>
          <p>
            Однажды мне захотелось визитку, но было лень идти в типографию.
            Так появился этот сайт...
          </p>
        </div>
      </header>
      <p> Добро пожаловать! Вы можете почитать немного <Link to="/about">обо мне</Link>,
        или сразу посмотреть моё {' '}
        <Link to="/resume">резюме</Link>, {' '}
        <Link to="/projects">проекты</Link>, {' '}
        посмотреть <Link to="/stats">статистику сайта</Link>, {' '}
        или <Link to="/contact">связаться</Link> со мной.
      </p>
    </article>
  </Main>
);

export default Index;
