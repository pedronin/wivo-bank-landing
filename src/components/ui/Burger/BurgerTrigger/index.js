import { useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { useKeyPress } from '@/hooks';

import styles from './burgerTrigger.module.scss';

export const BurgerTrigger = ({ isOpen, toggle }) => {
  const toggleOpen = useCallback(() => {
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';

    toggle();
  }, [toggle, isOpen]);

  useKeyPress('Escape', () => {
    isOpen && toggleOpen();
  })

  useEffect(() => {
    return () => {
      isOpen && toggleOpen()
    };
  }, [isOpen, toggleOpen]);

  return (
    <div
      className={clsx(
        styles.burger,
        isOpen && styles.open
      )}
      onClick={toggleOpen}
    >
      <span className={styles.burger__line} />
      <span className={styles.burger__line} />
    </div>
  );
}