import Link from 'next/link';
import styles from '../styles/nsvbar.module.css';


export default function Home() {
  return (
    <div>
  <header className={styles.navbar}>
      <div className={styles.logo}>
        <h1>SmartCity</h1>
      </div>
      <nav className={styles.navLinks}>
        <a href="#home">
          <a>Home</a>
        </a>
        <a href="#services">
          <a>Services</a>
        </a>
        <a href="#news">
          <a>News</a>
        </a>
        <a href="#projects">
          <a>Projects</a>
        </a>
        <a href="#contacts">
          <a>Contacts</a>
        </a>
      </nav>
      <div className={styles.burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header> 


    </div>
  );
}
