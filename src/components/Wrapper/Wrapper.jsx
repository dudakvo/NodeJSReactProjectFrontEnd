import styles from './Wrapper.module.scss';
const Wrapper = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Wrapper;
