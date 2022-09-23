import React from 'react';


function RenderMeme({meme}) {
  const styles = {
    backgroundImage: `url("${meme.randomMemeImage}")` 
  };
  return (
    <div className="meme" style={styles}>       
    <h2 className="meme-text top">{meme.topMessage}</h2>
    <h2 className="meme-text bottom">{meme.bottomMessage}</h2>
  </div>
  );
}

export default RenderMeme;
