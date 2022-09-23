import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import RenderMeme from "./components/RendeMeme";

function App() {
  let [memes, setMemes] = useState(null);

  let [meme, setMeme] = useState({
    topMessage: "",
    bottomMessage: "",
    randomMemeImage: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    async function fetchMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();      
      setMemes(data.data.memes);
    }
    fetchMemes();    
  }, []);

  function getMemeImage(e) {
    e.preventDefault();

    const randomNumber = Math.floor(Math.random() * memes.length);
    setMeme((preMeme) => {
      return {
        ...preMeme,
        randomMemeImage: memes[randomNumber].url,
      };
    });
  }
  function handleInputChange(e) {
    const { value, name } = e.target;
    setMeme((preMeme) => {
      return {
        ...preMeme,
        [name]: value,
      };
    });
  }

  return (
    <div className="App">
      <Header />
      <Form
        onInputChange={(e) => {
          handleInputChange(e);
        }}
        onSubmit={(e) => {
          getMemeImage(e);
        }}
        value={{
          topMessage: meme.topMessage,
          bottomMessage: meme.bottomMessage,
        }}
      />
      <RenderMeme meme={meme} />
    </div>
  );
}

export default App;
