import React, { Fragment } from "react";

function Song(props) {
  const { lyric } = props;

  if (lyric.length === 0) return null;

  return (
    <Fragment>
      <h2>Lyrics</h2>
      <p className="letra">{lyric}</p>
    </Fragment>
  );
}

export default Song;
