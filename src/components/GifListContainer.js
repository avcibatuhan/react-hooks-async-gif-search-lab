import React, { useEffect, useState } from 'react';
import GifList from "./GifList";
import GifSearch from './GifSearch';
import { Col,Row } from 'react-bootstrap';

export default function GifListContainer() {
  const [images,setImages]=useState([]);
  const myApiKey=""
  const [fromGifSearch,setFromGifSearch] = useState("basketball");
  const handleGifSearch = (search) => {
    setFromGifSearch(search)
  }
  useEffect(()=> {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${myApiKey}&q=${fromGifSearch}&limit=25&offset=0&rating=pg&lang=en`)
    .then((response)=> response.json())
    .then(({data})=> {
      
        const myImages = data.slice(0,3).map((image) => ({ url: image.images.original.url}));
        setImages(myImages) 
             
    })
  },[fromGifSearch])

  if(images.length > 0){
    //console.log(images[0][0].images.original.url)  
}
  return (
  <div>
       
        <Row>
           <Col><GifList images={images}/> </Col>
          <Col><GifSearch handleGifSearch={handleGifSearch} /></Col>
        </Row> 
     
  </div>
  );
}
