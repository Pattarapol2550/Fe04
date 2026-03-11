import styles from "./banner.module.css"
import Image from "next/image"
export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={"/img/bg02.jpg"} 
      alt="banner"
      fill={true}
       objectFit='cover'/>
        
        <div className={styles.bannerText}>
      <h1 className={styles.text}>
        where every event finds its venue
      </h1>

      <p className={styles.subtext}>
Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connect people to the perfect place.      </p>
        </div>

    </div>
  );
}
