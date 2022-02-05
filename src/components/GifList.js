import React, { useState } from 'react';

export default function GifList({images}) {
    
    if(images.length == 0){
        return <div>Please type something you want to see!</div>
    }
  return (
  <div>
    {images.map((image) => (      
        <img width="200" length="200" src={image.url} alt="gif" />
    ))}
  </div>
  );
}
