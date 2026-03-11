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
      <h1 className="text-[36px] font-bold text-[#ffd700] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
        where every event finds its venue
      </h1>

      <p className="text-[18px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connect people to the perfect place.      </p>
        </div>

    </div>
  );
}
