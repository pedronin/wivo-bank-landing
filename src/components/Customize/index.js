import styles from './customize.module.scss';

export const Customize = () => {
  return (
    <section id="customize" className={styles.customize}>
      <div className={styles.customize__container}>
        <div className={styles.customize__content}>
          <h2 className={styles.customize__title}>
            Get noticed with a custom card to
            <span className={styles.gray}> fit your style</span>
          </h2>

          <p className={styles.customize__description}>
            Stand out from the crowd by not settling
            for a boring bank card. Choose a card
            color that reflects your style, and the
            app will adapt to match it.
          </p>
        </div>

        <div className={styles.customize__decor}>
          <img className={styles.customize__image} src='/img/custom-cards.png' alt='' />
        </div>
      </div>
    </section>
  )
}