import React, { useEffect, useState } from 'react'
import styles from "./Slider.module.scss"
import { GrNext, GrPrevious } from "react-icons/gr";
import {images} from "./slideData.js"

const Slider = () => {
  const[slideIndex,setSlideIndex]=useState(0)

  const lastIndex=images.length - 1
  const length = images.length
//Auto slide
const autoScroll= true;
let slideInterval;
let intervalTime = 5000;

//When page loads for the first rime, it will set slideIndex  to 0
useEffect(()=>{
  setSlideIndex(0)
  
},[])

function auto(){
  slideInterval = setInterval(()=>{
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1)
  }, intervalTime)
}

useEffect(()=>{
  if(autoScroll){
      auto()
  }
  return()=>{
      clearInterval(slideInterval)
  }
  
},[slideIndex, autoScroll, intervalTime,slideInterval])
 

  const prevImageSlide=()=>{
 
    const prevIndex = slideIndex === 0 ? lastIndex: slideIndex - 1;
    
setSlideIndex(prevIndex);
  };


  
  const nextImageSlide=()=>{
 
   const  nextIndex = slideIndex === lastIndex ? 0: slideIndex + 1;
        
    setSlideIndex(nextIndex);
  };


  return (
   
      <div className={styles.slider}>
      <div>
        <span className={styles.prev}>
          <GrPrevious size={25} color={"red"} onClick={prevImageSlide} />
        </span>
      </div>
      {images.map((image, index) => (
                                                                                                                                                                                                
      <div className='slide' key={index}>
      {index === slideIndex && (
         <img  src={image.img} alt="slider" style={{objectFit:"cover"}} className={styles.img}/>
       
             


      )}
      </div>
      ))}

      <div>
        <span className={styles.next}>
          <GrNext size={25} className="arrow next" onClick={nextImageSlide} />
        </span>
      </div>
      </div>

    
  )
}

export default Slider