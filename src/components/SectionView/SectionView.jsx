import styles from './SectionView.module.css';

const SectionView = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default SectionView;
