import styles from "./style.module.scss";

export default function Player() {
    return(
      <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Playing now"/>
        <strong>PLaying now</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Select one Podcast to hear</strong>
      </div>

       <footer className={styles.empty}>
         <div className={styles.progress}>
         <span>00:00</span>
         <div className={styles.slider}>
            <div className={styles.emptySlider}/>
         </div>
         <span>00:00</span>
         </div>
         <div className={styles.buttons}>
           <button type="button">
             <img src="/shuffle.svg" alt="mix"/>
           </button>
         </div>
       </footer>
      </div>
    )
}