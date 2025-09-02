import clsx from 'clsx';
import { NAV_LIST } from '@/constants';

import styles from './nav.module.scss';

export const Nav = ({ footer }) => {
  return (
    <nav className={clsx(
      styles.nav,
      footer && styles.footer
    )}>
      <ul className={styles.nav__list}>
        {NAV_LIST.map(item => (
          <li
            className={styles.nav__item}
            key={item.title}
          >
            <a href={item.path} >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}