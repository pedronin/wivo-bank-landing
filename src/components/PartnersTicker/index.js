import Marquee from 'react-fast-marquee';
import { trustedCompanies } from '@/assets/mock';

import styles from './partnersTicker.module.scss';

export const PartnersTicker = () => {
  return (
    <div className={styles.ticker}>
      <span className={styles.ticker__description}>
        Used by the world's most amazing companies
      </span>

      <Marquee
        autoFill
        pauseOnHover
        speed={70}
      >
        {trustedCompanies.map(({ name, logo, url }) => {
          return (
            <a
              className={styles.ticker__child}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={name}
            >
              <img src={logo} alt={`${name} logo`} />
            </a>
          )
        })}
      </Marquee>
    </div>
  );
};

