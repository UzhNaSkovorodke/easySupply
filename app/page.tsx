import styles from './page.module.css'
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.root}>
          <Image src={'https://rostline.com/wp-content/uploads/2019/12/slayder-11-1920x1140.jpg'} alt={'traktor'} width={320} height={320}/>
      </div>
    </main>
  )
}
