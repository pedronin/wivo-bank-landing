import clsx from 'clsx';

import styles from './customButton.module.scss';

export const CustomButton = ({ children, theme, onClick }) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[theme]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}