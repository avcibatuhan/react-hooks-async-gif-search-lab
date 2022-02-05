import React,{useState} from 'react';

export default function GifSearch({handleGifSearch}) {
    const [search,setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value)        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleGifSearch(search)
    }

  return(
    <div>
        <label>
        Search in Giphy! 
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={search}/>
            <button type='submit'>Search!</button>
        </form>
        </label>
    </div>
  ) ;
}
