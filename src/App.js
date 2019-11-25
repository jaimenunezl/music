import React, { useState, useEffect, Fragment } from "react";
import Form from "./components/Form";
import Axios from "axios";
import Error from "./components/Error";
import Song from "./components/Song";
import Information from "./components/Information";

function App() {
  const [artist, setArtist] = useState("");
  const [info, setInfo] = useState({});
  const [lyric, setLyric] = useState([]);
  const [error, setError] = useState(false);

  const getLyrics = async search => {
    const url = `https://api.lyrics.ovh/v1/${search.artist}/${search.song}`;
    try {
      const response = await Axios(url);
      setArtist(search.artist);
      setLyric(response.data.lyrics);
      setError(false);
    } catch (e) {
      setError(true);
    }
  };

  const getArtist = async artist => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
    try {
      const response = await Axios(url);
      console.log(response);
      setInfo(response.data.artists[0]);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    if (lyric.length === 0) return;
    getArtist(artist);
  }, [artist, lyric]);

  return (
    <Fragment>
      <Form getLyrics={getLyrics} />
      {error ? (
        <Error setError={setError} message={"Lyrics not found"} />
      ) : null}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            {Object.keys(info).length > 0 ? <Information info={info} /> : null}
          </div>
          <div className="col-md-6">
            <Song lyric={lyric} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
