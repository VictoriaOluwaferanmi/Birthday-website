import React from 'react'

const GalleryItem = ({image}) => {
  return (
    <div className="galleryItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
  
    </div>
  );
}

export default GalleryItem
