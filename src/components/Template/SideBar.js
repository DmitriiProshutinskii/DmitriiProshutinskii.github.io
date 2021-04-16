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
        <p><a href="mailto:dmitriy.proshutinskiy@phystech.edu">dmitriy.proshutinskiy@phystech.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Привет, я Дмитрий Прошутинский. Я люблю красивые вещи и концепции.
        Выпускник <a href="https://mipt.ru/">МФТИ</a> 2020 года, iOS разработчик в <a href="https://www.ramax.ru/">Ramax Group</a>.
        До Ramax работал разработчиком приложений смешанной реальности в <a href="https://www.cet-mipt.ru/">Инжиниринговом Центре МФТИ</a>.
        Люблю, когда интересные идеи воплощаются в жизнь.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Чуть больше обо мне</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Dmitrii Proshutinskii <Link to="/">https://dmitriiproshutinskii.github.io/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
