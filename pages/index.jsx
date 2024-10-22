import Link from 'next/link';
import styles from '../styles/footer.module.css';


export default function footer() {
  return (
    <div>

<footer className={styles.footer}>
      <div className={styles.container}>
        {/* Логотип или название */}
        <div className={styles.logo}>
          <h2>Smart City</h2>
          <p>Innovating urban living</p>
        </div>

        {/* Ссылки на разделы сайта */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Социальные сети */}
        <div className={styles.socials}>
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
            <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
          </ul>
        </div>

        {/* Контактная информация */}
        <div className={styles.contact}>
          <h3>Contact Info</h3>
          <p>Email: info@smartcity.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Smart St., Cityville</p>
        </div>
      </div>

      {/* Копирайт */}
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Smart City. All Rights Reserved.</p>
      </div>
    </footer>


    </div>
  );
}
