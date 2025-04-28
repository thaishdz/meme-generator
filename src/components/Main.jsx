import { useState, useEffect } from "react";

function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "https://i.imgflip.com/1bij.jpg"
  });

  const [allMemes, setAllMemes] = useState([]);


  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setAllMemes(data.data.memes))
  }, []);

  
  
  const handleChange = (event) => {
    const {value, name} = event.currentTarget;
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value /* dynamically update the property  */
    }));
  }

  return (
    <main>
      <div className="form">
        <label>Top Text
          <input 
            type="text" 
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText} /* ver controlled component */
            />
        </label>
        
        <label>Bottom Text
          <input 
            type="text" 
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button>Get a new meme</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} alt="Meme" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

export default Main;