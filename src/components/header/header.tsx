import Image from "next/image";
import logo from '../../../public/logo.png';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        src={logo}
        width={90}
        height={90}
        alt="Logo"
      ></Image>
      <div>
        <span className={styles.urlText}>URL</span>
        <p className={styles.shortnerText}>Shortner</p>
      </div>
    </div>
  );
}
