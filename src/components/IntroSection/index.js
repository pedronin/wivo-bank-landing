import { useWindowWidth } from '@/hooks';
import { BREAKPOINTS } from '@/constants';

import styles from './introSection.module.scss';
import { CustomLink } from '@/components/ui/CustomLink';

export const IntroSection = () => {
  const windowWidth = useWindowWidth();

  return (
    <section className={styles.banner}>
      <div className={styles.banner__container}>
        <div className={styles.banner__content}>
          <h1 className={styles.banner__content_title}>
            Your future revolutionary banking
          </h1>

          <p className={styles.banner__content_text}>
            Introducing our innovative banking website
            that we can design for your unique needs.
            {windowWidth >= BREAKPOINTS.small && (
              ' Offering both physical and virtual debit cards in addition to a user-friendly banking app. Create your personalized site with customized functionalities today.'
            )}
          </p>

          <div className={styles.banner__content_buttons}>
            <CustomLink href='#'>
              Get started
            </CustomLink>

            <CustomLink href='#' theme='light'>
              Find out more
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
}