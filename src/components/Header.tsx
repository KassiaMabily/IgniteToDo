import styles from './Header.module.css';
import igniteLogo from '../assets/Logo.png';

export function Header() {
  return (
    <div className={styles.header}>
      <img
        src={igniteLogo}
        alt='Logo'
      />
    </div>
  )
}
