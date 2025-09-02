import { useWindowWidth } from '@/hooks';
import { SOCIALS_LIST, BREAKPOINTS } from '@/constants';

import styles from './footer.module.scss';
import { Nav } from "@/components/ui/Nav";
import { CustomInput } from '@/components/ui/CustomInput';
import { CustomButton } from '@/components/ui/CustomButton';

export const Footer = () => {
  const windowWidth = useWindowWidth();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          {windowWidth > BREAKPOINTS.extraMedium && (
            <Nav footer />
          )}

          <button
            className={styles.footer__top_button}
            onClick={scrollToTop}
          >
            Back to top
          </button>
        </div>

        <img
          className={styles.footer__logo}
          src="/icons/logo-short.svg"
          alt="wivo logo"
        />

        <div className={styles.footer__connect}>
          <div className={styles.footer__mailing}>
            <span className={styles.footer__mailing_description}>
              Join our newsletter to stay up to date on features and releases
            </span>

            <form className={styles.footer__form} name="following">
              <div className={styles.footer__form_row}>
                <CustomInput
                  className={styles.footer__form_input}
                  type="email"
                  name="email"
                  autoComplete="on"
                  placeholder="Enter your email"
                />

                <span className={styles.footer__form_disclaimer}>
                  By subscribing you agree to with our Privacy
                  Policy and provide consent to receive updates
                  from our company.
                </span>
              </div>

              <CustomButton
                theme="light"
                onClick={(e) => e.preventDefault()}
              >
                Subscribe
              </CustomButton>
            </form>
          </div>

          <div className={styles.footer__socials}>
            <span className={styles.footer__socials_description}>
              Follow us
            </span>

            <ul className={styles.footer__socials_list}>
              {SOCIALS_LIST.map(({ name, icon, link }) => (
                <li className={styles.footer__socials_item} key={name}>
                  <a href={link} target='_blank' rel="noopener noreferrer">
                    <img src={icon} alt={name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <ul className={styles.footer__bottom_list}>
            <li>
              Ⓒ 2025 WIVO Finance Inc. All rights reserved.
            </li>
            <li>
              <a href="/privacy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/cookies">
                Cookies Settings
              </a>
            </li>
          </ul>

          <div className={styles.footer__bottom_download}>
            <a href="https://play.google.com/store/apps/details?id=com.wivo.finance" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/google-play-badge.svg"
                alt="Download on the Google Play"
              />
            </a>

            <a href="https://apps.apple.com/app/id6448311063" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/app-store-badge.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </footer >
  )
}