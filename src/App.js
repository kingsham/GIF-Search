import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { v4 } from "uuid";
import axios from "axios";
import "./App.css";

import SearchField from "./components/SearchField";
import GifView from "./views/GifView";

const App = () => {
  const API_KEY = "1hOSiwyFAu6RUOiLerPpGfXzCVqILCrG";
  const [gifs, setGifs] = useState([]);
  const [url, setUrl] = useState(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
  );
  const [viewing, setViewing] = useState("Trending");
  const [isRandom, setIsRandom] = useState();

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const resp = await axios(url);
        if (isRandom) {
          setGifs([resp.data.data]);
          setIsRandom(false);
        } else {
          setGifs(resp.data.data);
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, [url]);

  const search = value => {
    setUrl(
      `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=${API_KEY}`
    );
    setViewing(value);
  };

  const random = () => {
    setIsRandom(true);
    setUrl(`https://api.giphy.com/v1/gifs/random?&api_key=${API_KEY}#${v4()}`);
    setViewing("Random");
  };

  return (
    <div className="App">
      <SearchField search={search} random={random} />
      <Container>
        <h2>Currently Viewing: {viewing} GIFS</h2>
        <br />
        <Row>
          {gifs.map(gif => (
            <GifView key={gif.id} gif={gif} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
