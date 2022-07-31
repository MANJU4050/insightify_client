import React from "react";
import "./Insight.css";
import Data from "./Data";

const Insight = (props) => {

  
  return (
    <>
    <div className="newinsightbtn">
        {/* <button
          className="btn"
          onClick={() => {
            props.handleState();
          }}
        >
          Another Insight
        </button> */}
      </div>
      <div className="tablediv">
        <table className="table">
          <thead className="thead">
            <tr className="tr">
              <th className="th">DOMAIN NAME</th>
              <th className="th">WORD COUNT</th>
              <th className="th">FAVOURITE</th>
              <th className="th">WEB-LINKS</th>
              <th className="th">MEDIA-LINKS</th>
              <th className="th">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {props.insight?.map((item) => {
              return (
                <Data
                key={item.id}
                  url={item.url}
                  fav={item.fav}
                  wordcount={item.wordcount}
                  weblinks={item.weblinks}
                  medialinks={item.medialinks}
                  id={item.id}
                  setFav={props.setFavourite}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      
    </>
  );
};

export default Insight;
