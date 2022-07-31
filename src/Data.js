import React, { useRef, useState } from "react";
import "./Data.css";

const Data = (props) => {
  const mod = useRef();
  const weblinkmod = useRef();
  const urlmod = useRef();
  const [button,setButton] = useState(false);



  const modalHandler = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "medialink":
        mod.current.style.display = "block";
        break;
      case "weblink":
        weblinkmod.current.style.display = "block";
        break;
        case "url":
          urlmod.current.style.display = "block";
          break;
      default:
        break;
    }
  };
  const modaldeHandler = (e) => {
    switch (e.target.id) {
      case "medialink":
        mod.current.style.display = "none";
        break;
      case "weblink":
        weblinkmod.current.style.display = "none";
        break;
        case "url":
        urlmod.current.style.display = "none";
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="modal" ref={mod}>
        <div className="close" onClick={modaldeHandler}>
          <p id="medialink">close</p>
        </div>
        <div className="innermodal">
          {props.medialinks?.map((item, index) => {
            return <><p key={index}><span>{index+1} </span>{item}</p></>;
          })}
        </div>
      </div>

      <div className="modal" ref={weblinkmod}>
        <div className="close" onClick={modaldeHandler}>
          <p id="weblink">close</p>
        </div>
        <div className="innermodal">
          {props.weblinks?.map((item, index) => {
            return <><p key={index}><span>{index+1} </span>{item}</p></>;
          })}
        </div>
      </div>

      <div className="modal" ref={urlmod}>
        <div className="close" onClick={modaldeHandler}>
          <p id="url">close</p>
        </div>
        <div className="innermodal">
          {
            <p>{props.url}</p>
          }
        </div>
      </div>
      <tr className="tr">
        <td className="td tdmodal" onClick={modalHandler} id="url">{props.url}</td>
        <td className="td">{props.wordcount}</td>
        <td className="td tdfav" ><div style={{backgroundColor:button?"rgb(0, 74, 193)":"rgb(230, 51, 23)"}} className="favdiv" >{props.fav}</div></td>
        <td onClick={modalHandler} id="weblink" className="td tdmodal">
          <div className="tdsize" id="weblink">
            {props.weblinks?.map((item, index) => {
              return (
                <p id="weblink" key={index}>
                  {item}
                </p>
              );
            })}
          </div>
        </td>
        <td onClick={modalHandler} id="medialink" className="td tdmodal">
          <div className="tdsize" id="medialink">
            {props.medialinks?.map((item, index) => {
              return (
                <p id="medialink" key={index}>
                  {item}
                </p>
              );
            })}
          </div>
        </td>
        <td className="td"><button style={{backgroundColor:button?"rgb(230, 51, 23)":"rgb(0, 74, 193)"}} className="fav" onClick={()=>{setButton(!button); props.setFav(props.id)}}>{button?'REMOVE FAV':'ADD FAV'}</button></td>
      </tr>
    </>
  );
};

export default Data;
