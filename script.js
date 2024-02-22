const sombra=document.getElementsByClassName('sombra');
// sombra.onmousedown=(e)=>{
//     console.log(e);
//     e.preventDefault();
//     const som=document.getElementById('som');

    
//     const x=e.offsetX-8;
//     const y=e.offsetY-8;
//     som.style.left=`${x}px`;
//     som.style.top=`${y}px`;
//     som.style.display='none';
//     setTimeout(() => {
//         som.style.display='block';
//     }, 0);
// };
// function display(modo){
//     som.style.display=modo;
// };
// sombra.onmousedown=(e)=>{
//     e.preventDefault();
//     const som=document.getElementById('som');
//     som.animate(
//         [
//             {
//                 borderRadius: '12px',
//                 width:'3.6rem',
//                 height:'4rem',
//                 backgroundColor:' rgba(245, 245, 245, 0.250)',
//                 offset:0.0
//             },
//             {
//                 width:'4.5rem',
//                 height:'4.5rem',
//                 backgroundColor:' rgba(245, 245, 245, 0.200)',
//                 offset:0.4
//             },
//             {
//                 width:'4.6rem',
//                 height:'4.5rem',
//                 borderRadius:'4px',
//                 backgroundColor:' rgba(245, 245, 245, 0.100)',
//                 offset:1.0
//             }
//         ],
//         {
//             duration:290,
//             iterations:1,
//             easing:"ease-in-out"
            
//         });
//         setTimeout(function() {window.location.assign('https://youtube.com')},250)
// };

// for (const iterator of sombra) {
//     iterator.onclick=(e)=>{
//         console.log(e);
//         e.preventDefault();
//         iterator.animate(
//             [
//                 {
//                     scale:'1.2',
//                     offset:0.2
//                 },
//                 {
//                     scale:'1',
//                     offset:1.0
//                 }
//             ],
//             {
//                 duration:260,
//                 iterations:1,
//                 easing:"ease-out"
                
//             }
//         );
//         setTimeout(function() {window.location.assign('./apps/ahorrador/index.html')},200)
//     };
// };

// Notification.requestPermission();
// document.onclick=()=>{
//     new Notification('Soy una NOTI',{body:'No me conoces pero yo a ti si'})
// };

// navigator.serviceWorker.ready.then(
//     (res)=>{console.dir(res);res.periodicSync.register('EL BANA',{minInterval:24 * 60 * 60 * 1000})}
// );
function notificar() {
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification("SOY uNA Noti", {
            body:msj});
        });
      }
    });
}

// document.onclick=()=>{
//     showNotification()
// };
navigator.permissions.query({name:"periodic-background-sync"}).then((res)=>{
  console.dir(res);
  notificar(res.state+'.exe');
});
