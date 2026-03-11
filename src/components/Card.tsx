import styles from './card.module.css'
import  Image from 'next/image'
export default function Card(){
    return(
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/room.jpg'}
                alt = 'picture card'
                fill={true}
                objectFit='cover'/>
            </div>
            <div className={styles.cardtext}>
                Celestial Palace Hall
                <p className={styles.carddesc}>
                    A luxurious venue with dazzling lights, perfect for weddings 
                    and grand celebrations.
                </p>
            </div>

        </div>
    );
}