'use client'
import Header from 'components/header/header';
import styles from './page.module.css';
import Selector from 'components/selector/selector';
import { useState, createContext } from 'react';
import LinkCard from 'components/urlShortnerCards/linkCard/link-card';
import QrCodeCard from 'components/urlShortnerCards/qrCodeCard/qr-code';

type SelectorContextType = {
  selector: boolean | null;
  setSelector: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const iSelectorContextState = {
  selector: false,
  setSelector: () => {}
}

export const SelectorContext = createContext<SelectorContextType>(iSelectorContextState);

export default function Home() {
  
  const [selector, setSelector] = useState<boolean | null>(false);

  return (
    <div className="body">
        <header>
          <Header />
        </header>
        <section>
            <SelectorContext.Provider value={{ selector, setSelector}}>
              <Selector />
            </SelectorContext.Provider>
        </section>
        <section>
          <div className={styles.container}>
            {
              selector ? <QrCodeCard /> : <LinkCard />
            }
          </div>
        </section>
    </div>
  );
}
