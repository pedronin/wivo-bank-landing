import clsx from 'clsx';

import styles from './customLink.module.scss';

export const CustomLink = ({ children, href, theme, size }) => {
  return (
    <a
      className={clsx(
        styles.link,
        styles[theme],
        styles[size]
      )}
      href={href}
    >
      {children}
    </a>
  );
}