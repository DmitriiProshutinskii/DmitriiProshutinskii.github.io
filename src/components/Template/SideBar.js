import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/me2.jpg" alt="" />
      </Link>
      <header>
        <h2>Дмитрий Прошутинский</h2>
        <p><a href="mailto:koptehe@gmail.com">koptehe@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Привет, я Дмитрий Прошутинский — Senior Flutter Developer с 5+ годами опыта
        кроссплатформенной разработки для iOS и Android.
        Выпускник <a href="https://mipt.ru/">МФТИ</a>, сейчас работаю
        в <a href="https://www.balady.gov.sa">Urbi / UseTech</a> над проектом Balady.
        Люблю Clean Architecture, TDD и когда дизайн-система собирается воедино.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Чуть больше обо мне</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Дмитрий Прошутинский <Link to="/">proshutinskii.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
