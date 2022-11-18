import React, { useState } from "react";
import "./doubtsolving.css";

const DoubtSolving = () => {
  // const [items, setItems] = useState([]);
  // const [visible, setVisible] = useState(3);

  // const showMoreIems = () => {
  //   setVisible((prevValue) => prevValue + 3);
  // };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setItems(data));
  // }, []);
  const data= [
    {
        "id": 1,
        "date": "11/11/2022",
        "VedioLectureLink": "https://www.youtube.com/watch?v=vMGbxOAaCLY"
    },
    {
        "id": 2,
        "date": "11/12/2022",
        "VedioLectureLink": "https://www.youtube.com/watch?v=vMGbxOAaCLY"   
    },
    {
        "id": 3,
        "date": "11/13/2022",
        "VedioLectureLink": "https://www.youtube.com/watch?v=vMGbxOAaCLY"   
    },
    {
        "id": 3,
        "date": "11/14/2022",
        "VedioLectureLink": "https://www.youtube.com/watch?v=vMGbxOAaCLY"   
    },
    {
        "id": 4,
        "date": "11/15/2022",
        "VedioLectureLink": "https://www.youtube.com/watch?v=vMGbxOAaCLY"   
    },
    {
        "id": 5,
        "date": "11/16/2022",
        "VedioLectureLink": "https://www.youtube.com/watch?v=vMGbxOAaCLY"   
    },
    {
        "id": 6,
        "date": "11/17/2022",
        "VedioLectureLink": "https://www.youtube.com/watch?v=vMGbxOAaCLY"   
    }
  ]
  
  
  const [filterData, setfilterData]= useState(data)
  
  const search = (e)=>{
    console.log(e.target.value)
    setfilterData(data.filter((item)=> item.date.includes(e.target.value)))
  }
  


  


  return (
    <>
      <div>DoubtSolving</div>



      {/* <div className="container">
        {items.slice(0, visible).map((item) => (
          <div className="card">
            <div className="id">
              <span>{item.id}</span>
            </div>
            <p>{item.body}</p>
          </div>
        ))}
        <button onClick={showMoreIems} className="ButtonLoad">
          load more
        </button>
      </div> */}



      <input type="text" placeholder="Search" onKeyUp={search}/>
<ol>
  {filterData.map((user)=>(
    
<div key={user.id}  className="box">
<li>{user.date} </li>
<p><a href={user.VedioLectureLink}>Vedio Lecture link</a></p>
</div>
      
    
  ))}
</ol>


    </>
  );
};

export default DoubtSolving;
