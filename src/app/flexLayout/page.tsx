import styles from './style.module.css';
type Props = {}

export default function page({ }: Props) {
  return (
    <main>
      <h4>How to use Flex grow</h4>
      <p>flex-grow tells flex item to grow when it needs to.</p>
      <section className={styles.flexContainer}>
        <div className={styles.flexItem}>1</div>
        <div className={styles.flexItem}>2</div>
        <div className={styles.flexItem}>3</div>
        <div className={styles.flexItem}>4</div>
        <div className={styles.flexItem}>5</div>
      </section>
    </main>
  )
}