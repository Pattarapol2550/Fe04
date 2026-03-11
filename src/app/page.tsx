import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
export default function Home() {
  return (
    
      <main>
        <Banner/>
        <div style={{margin:"20px" , display : "flex" ,flexDirection : "row",flexWrap:"wrap" , justifyContent:"space-around" ,alignContent:"space-around"}}>
       
            <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" desc="A romantic glasshouse venue with elegant floral decorations, perfect for weddings and special celebrations."/>
               <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" desc="A modern conference venue equipped with large screens and spacious seating for professional events and seminars."/>
              <Card venueName="The Grand Table " imgSrc="/img/grandtable.jpg" desc="A luxurious ballroom with sparkling chandeliers, ideal for grand banquets and unforgettable celebrations."/>
          
        </div>
        
       </main>
    
  );
}
