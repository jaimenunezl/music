import React from "react";

function Information(props) {
  const { info } = props;
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Artist information
      </div>
      <div className="card-body">
        <img src={info.strArtistThumb} alt="artist logo" />
        <p className="card-text">Gender: {info.strGenre}</p>
        <h2 className="card-text text-center">Biography</h2>
        <p className="card-text">{info.strBiographyES}</p>
        <p className="card-text">
          <a
            href={`https://${info.strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${info.strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`https://${info.strFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Information;
