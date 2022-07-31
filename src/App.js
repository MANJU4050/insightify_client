// import './App.css';
import { useState } from "react";
import Input from "./Input";
import Insight from "./Insight";

function App() {
  const [state, setState] = useState(false);
  const [insight, setInsight] = useState([]);
  const[url,setUrl] = useState([]);

  const handleState = () => {
    setState(!state);
  };

  const getData = (data) => {

    if(data?.result){
      alert(data.result);
    }else{

      if(url.includes(data.url)){



        const copyInsight = insight;
        const index = copyInsight.findIndex((item)=>{
          return item.url===data.url;
        })
        copyInsight.splice(index,1,data);
        setInsight(()=>{
          return [...copyInsight]
        })
        
        
        handleState();
      }else{
      setInsight((prev) => [data,...prev]);
      setUrl((prev)=>[data.url,...prev]);
      }

    }

    

  };

  const setFavourite =(id)=>{

    const copyInsight = insight;
    const index = copyInsight.findIndex((item)=>{
      return item.id===id;
    })

    if(copyInsight[index].fav==="true"){
      copyInsight[index].fav="false";
    }else{
      copyInsight[index].fav="true";

    }
   
    setInsight(()=>{
      return [...copyInsight]
    })
    

    
  }

 

  return (
    <div className="App">
      <header className="App-header">
        
        <Input getData={getData} handleState={handleState} />
       {insight.length!==0?<Insight insight={insight} handleState={handleState}  setFavourite={setFavourite}/>:null}
      </header>
    </div>
  );
}

export default App;
