import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Videojs from "./Videojs";



function HomeVideo ({keyContent}){
    
    let [url,setUrl]=React.useState("")

    const playerRef = React.useRef(null);
    

    const videoJsOptions = { // lookup the options in the docs for more options
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: url,
        type: 'video/mp4'
      }]
    }
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // you can handle player events here
      player.on('waiting', () => {
        console.log('player is waiting');
      });
  
      player.on('dispose', () => {
        console.log('player will dispose');
      });
    };
    
    const firebaseConfig = {

        apiKey: "AIzaSyDFs3FQpiTJvTxngTHhdDUAC3QsamVD9qw",
      
        authDomain: "hector-web-1e65a.firebaseapp.com",
      
        projectId: "hector-web-1e65a",
      
        storageBucket: "hector-web-1e65a.appspot.com",
      
        messagingSenderId: "759660156044",
      
        appId: "1:759660156044:web:1cf0b7426b93765dbed7a9",
      
        measurementId: "G-9GER7NBBNH"
      
      };

      const app = initializeApp(firebaseConfig);

      const analytics = getAnalytics(app);
      console.log("getting URL")

      const storage = getStorage();
//'images/pepe_le_pew.gif'
//videos/planet.mp4
console.log(`videos/${keyContent}`)
getDownloadURL(ref(storage, `videos/${keyContent}`))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    console.log(url)
    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    //const img = document.getElementById('myimg');
    //img.setAttribute('src', url);
    console.log(url)
    setUrl(url)
       
    playerRef.current.src([{src: url, type: 'video/mp4'}]);
    playerRef.current.autoplay(false);
  })
  .catch((error) => {
    // Handle any errors
    console.log(error)
  });


      
    return (
            <React.Fragment>
              <div onContextMenu ={e=>e.preventDefault()}>
              <h1>Welcome </h1>                                            
                      {url!="" && <Videojs options={videoJsOptions} onReady={handlePlayerReady} />}
              <h2>{keyContent}</h2>        

              </div>
            </React.Fragment>
    )
}

export {HomeVideo}