import clsx from 'clsx';

import styles from './customInput.module.scss';

export const CustomInput = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        styles.input,
        className
      )}
      {...props}
    />
  );
}