// import React, { useRef } from 'react';
// import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
// import imageBg from './background.jpg';
// import imageFar from './background.jpg';
// import imageMid from './background.jpg';
// import imageClose from './background.jpg';
// import styles from './DemonWoods.module.css'; // Correct path to your CSS module
// function DemonWoods() {
//     const target = useRef(null);

//     const mid = useParallax({
//         speed: 50,
//         targetElement: target.current,
//     });
//     const close = useParallax({
//         speed: 100,
//         targetElement: target.current,
//     });

//     const midExtend = 50 * 5 * -1;
//     const closeExtend = 100 * 5 * -1;

//     return (
//         <div className={styles.root} ref={target}>
//             <div
//                 style={{ backgroundImage: `url(${imageBg})`, left: 0, right: 0 }}
//                 className={styles.layer}
//             />
//             <div
//                 style={{
//                     backgroundImage: `url(${imageFar})`,
//                     left: 0,
//                     right: 0,
//                 }}
//                 className={styles.layer}
//             />
//             <div
//                 style={{
//                     backgroundImage: `url(${imageMid})`,
//                     left: midExtend,
//                     right: midExtend,
//                     transform: `translateX(${mid.position}px)`,
//                 }}
//                 className={styles.layer}
//                 ref={mid.ref}
//             />
//             <div
//                 style={{
//                     backgroundImage: `url(${imageClose})`,
//                     left: closeExtend,
//                     right: closeExtend,
//                     transform: `translateX(${close.position}px)`,
//                 }}
//                 className={styles.layer}
//                 ref={close.ref}
//             />
//         </div>
//     );
// }

// const HorizontalContainer = () => (
//     <ParallaxProvider scrollAxis="horizontal">
//         <DemonWoods />
//     </ParallaxProvider>
// );

// export default HorizontalContainer;