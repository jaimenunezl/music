import React, { useState } from "react";

function Form(props) {
  const { getLyrics } = props;

  const initialSearch = { artist: "", song: "" };
  const [search, setSearch] = useState(initialSearch);

  const handleChange = e => {
    const currentSearch = {
      ...search,
      [e.target.name]: e.target.value
    };
    setSearch(currentSearch);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getLyrics(search);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={handleSubmit}
            className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">Songs lyrics</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artists</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artist's name"
                      value={search.artist}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Song's name"
                      value={search.song}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Search
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
