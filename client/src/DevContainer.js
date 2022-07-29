import React, { useState, useEffect } from "react";
import DevCard from "./DevCard";

function DevContainer() {

const [devList, setDevList] = useState([])

useEffect(()=>{
    fetch("/developers")
    .then(response => response.json())
    .then(data => setDevList(data))
  }, [devList.length])

  const renderDevs = devList.map((dev) => {
    return <DevCard key={dev.id} dev={dev}/>
})


return (
    <div>
        <center>{renderDevs}</center>
    </div>
)
}
export default DevContainer