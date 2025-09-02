import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';

import styles from './card.module.scss';

export const Card = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <section id="card" className={styles.card}>
      <div className={styles.card__container}>
        <div className={styles.card__decor} >
          <img
            ref={ref}
            className={clsx(
              styles.card__image,
              inView && styles.visible
            )}
            src='/img/hand-with-card.png'
            alt=''
          />
        </div>

        <div className={styles.card__content}>
          <h2 className={styles.card__title}>
            Spend anywhere with a

            <span className={styles.gray}> physical debit card</span>
          </h2>

          <p className={styles.card__description}>
            Experience the ease of using WIVO, a digital
            bank that offers a physical debit card tailored
            for effortless daily transactions. This card
            comes equipped with an integrated RFID
            transponder to enable fast, contactless payments.
          </p>
        </div>
      </div>
    </section>
  )
}