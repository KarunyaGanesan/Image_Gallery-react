import React from 'react';
import ReactDOM from 'react-dom/client';
import instaImage from "./images/insta.jpg"
import fbImage from "./images/fb.jpg"
import snapImage from "./images/snapchat.jpg"
import linkedin from "./images/linkedin.jpg"
import tiktok from "./images/tiktok.jpg"
import twitter from "./images/twitter.jpg"
import youtube from "./images/youtube.jpg"
import watsapp from "./images/whatsapp.jpg"
import "./style.css"



const root = ReactDOM.createRoot(document.getElementById('root'));


function Gallery(props){
  return(
    
      <div className='set'>
      <img src={props.image} alt='app'></img>
      <p>{props.name}</p>

   
   </div>
  )
}

const pics = [
 
  {
    image: fbImage,
    name:"Facebook"
   },
   {
    image: youtube,
    name:"Youtube"
   },
   {
    image: snapImage,
    name:"Snapchat"
   },
   {
    image: watsapp,
    name:"Whatsapp"
   },
   {
    image: twitter,
    name:"Twitter"
   },
   {
    image: snapImage,
    name:"Snapchat"
   },
   {
    image: tiktok,
    name:"TikTok"
   },
   {
    image: instaImage,
    name:"Instagram"
   },
   {
    image: linkedin,
    name:"LinkedIn"
   },
   {
    image: fbImage,
    name:"Facebook"
   }
   
]


root.render(
<div className='container'>
  
  {
    pics.map(function(item)
  {

    return <Gallery image ={item.image} name ={item.name}></Gallery>
  })
  }
</div>
);


