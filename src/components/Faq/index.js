import { useState } from 'react';
import { FAQ_LIST } from '@/assets/mock';

import styles from './faq.module.scss';
import { Accordion } from '@/components/ui/Accordion';
import { CustomLink } from '@/components/ui/CustomLink';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.faq__container}>
        <div className={styles.faq__header}>
          <h2 className={styles.faq__title}>FAQ</h2>

          <span className={styles.faq__cta_text}>
            Don’t see your question here?
          </span>

          <a className={styles.faq__cta_link} href="/#">
            Get in touch →
          </a>
        </div>

        <div className={styles.faq__content}>
          <div className={styles.faq__list}>
            {FAQ_LIST.map(item => (
              <Accordion
                title={item.title}
                content={item.content}
                isOpen={openIndex === item.id}
                onToggle={(open) =>
                  setOpenIndex(open ? item.id : null)
                }
                key={item.id}
              />
            ))}
          </div>

          <CustomLink href='#' theme="white">Ask question</CustomLink>
        </div>
      </div>
    </section>
  )
}