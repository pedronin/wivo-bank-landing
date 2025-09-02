import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import styles from './accordion.module.scss';

export const Accordion = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const toggle = () => {
    onToggle(!isOpen)
  }

  return (
    <div className={styles.accordion}>
      <button
        className={styles.accordion__header}
        onClick={toggle}
      >
        <h3 className={styles.accordion__title}>
          {title}
        </h3>

        <img
          className={clsx(
            styles.accordion__indicator,
            isOpen && styles.open
          )}
          src='/icons/chevron.svg'
          alt=''
        />
      </button>

      <div
        ref={contentRef}
        className={styles.accordion__content}
        style={{ height: `${height}px` }}
      >
        <span className={styles.accordion__inner}>
          {content}
        </span>
      </div>
    </div>
  )
}