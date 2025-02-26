import Header from 'components/header/header';
import styles from './page.module.css';
import Selector from 'components/selector/selector';

export default function Home() {
  return (
    <div className="body">
        <header>
          <Header />
        </header>
        <section>
          <Selector />
        </section>
      <section>

      </section>
    </div>
  );
}
