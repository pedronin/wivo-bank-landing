import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { useScrollY, useWindowWidth } from '@/hooks';
import { BREAKPOINTS } from '@/constants';

import styles from './header.module.scss';
import { Nav } from "@/components/ui/Nav";
import { CustomLink } from "@/components/ui/CustomLink";
import { BurgerTrigger } from '@/components/ui/Burger/BurgerTrigger';
import { BurgerList } from '@/components/ui/Burger/BurgerList';

export const Header = () => {
  const scrollY = useScrollY();
  const windowWidth = useWindowWidth();

  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = useCallback(() => {
    setBurgerOpen(!burgerOpen)
  }, [burgerOpen]);

  return (
    <header className={clsx(
      styles.header,
      scrollY > 0 && styles.background,
      burgerOpen && styles.burger_open
    )}>
      <div className={styles.header__container}>
        <div className={styles.header__wrapper}>
          <img
            src={windowWidth > BREAKPOINTS.tiny
              ? "/icons/logo.svg"
              : "/icons/logo-short.svg"}
            alt="wivo bank logo"
          />

          <div className={styles.header__right}>
            {windowWidth > BREAKPOINTS.extraMedium ? (
              <Nav />
            ) : (
              <BurgerTrigger
                isOpen={burgerOpen}
                toggle={toggleBurger}
              />
            )}

            <CustomLink href='#' theme='light' size='small'>
              Get started
            </CustomLink>
          </div>
        </div>

        {windowWidth <= BREAKPOINTS.extraMedium && (
          <BurgerList
            isOpen={burgerOpen}
            closeBurger={() => setBurgerOpen(false)}
          />
        )}
      </div>
    </header>
  )
}