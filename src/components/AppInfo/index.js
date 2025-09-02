import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';

import styles from './appInfo.module.scss';

export const AppInfo = () => {
  const { ref: decorRef, inView } = useInView({
    threshold: 0.8,
    rootMargin: '-100px 0px 0px 0px',
  });

  return (
    <section id="app" className={styles.app}>
      <div className={styles.app__container}>
        <div className={styles.app__wrapper}>
          <div className={styles.app__content}>
            <h2 className={styles.app__title}>
              Spending insights
              <span className={styles.gray}> at your fingertips</span>
            </h2>

            <p className={styles.app__description}>
              Crafted to enhance your day-to-day spending
              with a focus on transparency and efficiency.
              Instant transfers, virtual cards, and heads-up
              displays offer reassurance and peace of mind
              when it comes to managing your finances.
            </p>
          </div>

          <div ref={decorRef} className={styles.app__decor}>
            <img
              className={styles.app__image}
              src="/img/screen-app.png"
              alt="screen from app"
            />

            <div className={clsx(
              styles.app__tooltip,
              styles.left,
              inView && styles.visible
            )}>
              <span className={styles.app__tooltip_title}>
                Financial control
              </span>

              <span className={styles.app__tooltip_text}>
                Improving visibility of transactions
              </span>
            </div>

            <div className={clsx(
              styles.app__tooltip,
              styles.right,
              inView && styles.visible
            )}>
              <span className={styles.app__tooltip_title}>
                Easily get paid
              </span>

              <span className={styles.app__tooltip_text}>
                Make payments in a few minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}