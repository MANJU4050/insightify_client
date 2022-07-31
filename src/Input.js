import React, { useState } from "react";
import axios from "axios";
import './Input.css'

const Input = (props) => {
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleClick = async () => {

    
   
      const data = {
        url: url,
      };
  
      const response = await axios.post("https://thawing-harbor-90132.herokuapp.com/getinsight", data,{
        headers:{ 'Content-Type': 'application/json'},
        withCredentials: true
      });
      props.getData(response.data);
      props.handleState();
      setUrl(()=>{
        return '';
      })
    
  };

  

  return (
    <div className="getinsight">
    <div className="getinsightcontent">
    <input
        type="text"
        onChange={handleChange}
        placeholder="enter website url"
        value={url}
      />
      <button className="getinsightbtn" onClick={handleClick}>GET INSIGHT</button>

    </div>
   
      
    </div>
  );
};

export default Input;
