import React from 'react'
import './gallery.css'
import { GalleryList } from '../helper/GalleryList'
import GalleryItem from '../helper/GalleryItem'


const MyGallery = () => {
  return (
    <div className='gallery'>
    <h1 className='galleryTitle'>   MyGallery </h1> 
<div className='galleryList'>
{GalleryList.map((galleryItem,key)=>{
  return(
    <GalleryItem
     key={key}
      image={galleryItem.image}
    />
    
  )


})}
</div>
    </div>
  )
}

export default MyGallery