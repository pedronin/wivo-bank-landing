import clsx from 'clsx';
import { NAV_LIST } from '@/constants';

import styles from './burgerList.module.scss';
import { TeleportToRoot } from '../../TeleportToRoot';

export const BurgerList = ({ closeBurger, isOpen }) => {
  return (
    <div className={styles.burger}>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {NAV_LIST.map(item => (
            <li
              className={styles.nav__item}
              key={item.title}
              onClick={closeBurger}
            >
              <a href={item.path} >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <span className={styles.burger__copyright}>
        Ⓒ 2025 WIVO Finance Inc. All rights reserved.
      </span>

      <TeleportToRoot>
        <div className={clsx(
          styles.burger__overlay,
          isOpen && styles.active
        )} />
      </TeleportToRoot>
    </div>
  );
}