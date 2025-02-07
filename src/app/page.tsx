import Header from 'components/header/header';
import styles from './page.module.css';
import Selector from 'components/selector/selector';

export default function Home() {
  return (
    <div className="body">
      <Header></Header>
      <section>
        <Selector title='Caralho'></Selector>
      </section>
      <section>

      </section>
    </div>
  );
}
