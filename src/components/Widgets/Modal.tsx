import { useState, useEffect } from 'react';

// import styles from '@/assets/styles/Modal.css';

export default function Modal() {
    // const [hidden , setHidden] = useState(true);
    // const [closed , setCloased] = useState(false);
    // const [timeRemaining, setTimeRemaining] = useState(time);
    // let icon = null;
    // let rgbColor = '--alert-color-rgb';

    // useEffect(() => {
    //     setHidden(false);
    // }, []);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         onClose();
    //     }, (timeRemaining + 1) * 1000);

    //     const hiddenTimer = setTimeout(() => {
    //         setHidden(true);
    //     }, timeRemaining * 1000);

    //     const interval = setInterval(() => {
    //         setTimeRemaining(prevTime => prevTime - 0.01);
    //     }, 10);

    //     return () => {
    //         clearTimeout(timer);
    //         clearTimeout(hiddenTimer);
    //         clearInterval(interval);
    //     };
    // }, [onClose, timeRemaining]);

    // const handleClose = () => {
    //     setCloased(true);
    //     setTimeout(() => {
    //         onClose();
    //     }, 500);
    // };

    // switch (type) {
    //     case 'success':
    //         icon = (
    //             <Image src={successIcon} alt='Success icon' width={64} height={64} />
    //         );
    //         rgbColor = '--success-color-rgb';
    //         break;
    //     case 'danger':
    //         icon = (
    //             <Image src={alertIcon} alt='Danger icon' width={64} height={64} />
    //         );
    //         rgbColor = '--danger-color-rgb';
    //         break;
    //     case 'warning':
    //         icon = (
    //             <Image src={warningIcon} alt='Warning icon' width={64} height={64} />
    //         );
    //         rgbColor = '--warning-color-rgb';
    //         break;
    //     case 'info':
    //         icon = (
    //             <Image src={infoIcon} alt='Info icon' width={64} height={64} />
    //         );
    //         rgbColor = '--alert-color-rgb';
    //         break;
    //     case 'loading':
    //         icon = (
    //             <div className={styles.wheel}></div>
    //         );
    //         rgbColor = '--alert-color-rgb';
    //         break;
    //     default:
    //         icon = (
    //             <Image src={alertIcon} alt='Alert icon' width={64} height={64} />
    //         );
    //         rgbColor = '--alert-color-rgb';
    //         break;
    // }
    
    return (
        <div>Modal</div>
        // <div className={`${styles.alert} ${styles[type]}`} data-hidden={hidden} data-closed={closed} style={{ zIndex: index + 20 }}>
        //     {timer && (
        //         <div className={styles.overlay} style={{ background: `linear-gradient(90deg, rgba(0,0,0,0) ${95 - (timeRemaining / time * 100)}%, rgba(var(${rgbColor}), .05) ${100 - (timeRemaining / time * 100)}%)` }}></div>
        //     )}
        //     <div className={`${styles.alertContainer} container`}>
        //         <div className={styles.content}>
        //             <div className={styles.icon}>
        //                 {icon}
        //             </div>
        //             <div className={styles.text}>
        //                 <p>{message}</p>
        //             </div>
        //             {closable && (
        //                 <div className={styles.closeBtn}>
        //                     <button onClick={handleClose}>
        //                         <span></span>
        //                     </button>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        // </div>
    );
}