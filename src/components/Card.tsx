import styles from './card.module.css'
import  Image from 'next/image'
export default function Card({venueName, imgSrc ,desc} : {venueName : string , imgSrc : string ,desc : string}){
    return(
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={imgSrc}
                alt = 'picture card'
                fill={true}
                objectFit='cover'/>
            </div>
            <div className="font-bold h-[30%] text-[#436df5] text-[15px] text-center p-3">
                {venueName}
                <p className="text-[11px] text-[#555] leading-[1.4]">
                    {desc}
                </p>
            </div>

        </div>
    );
}