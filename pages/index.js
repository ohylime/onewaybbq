import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>One Way BBQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}> One Way BBQ </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href="#">
                  <span> About</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span> Recipes</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span> Equipment</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Footer + instagram logo 2020 &copy;
      </footer>
    </div>
  )
}
