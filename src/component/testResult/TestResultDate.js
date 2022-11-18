import React, {useState} from "react";

const TestResultDate = () => {

  const data= [
    {
        "id": 1,
        "date": "11/11/2022",
        "score": "37/50",
        "ClassRank": "1"
    },
    {
        "id": 2,
        "date": "11/12/2022",
        "score": "37/50",
        "ClassRank": "2"   
    },
    {
        "id": 3,
        "date": "11/13/2022",
        "score": "37/50",
        "ClassRank": "3"   
    },
    {
        "id": 4,
        "date": "11/14/2022",
        "score": "37/50",
        "ClassRank": "4"   
    },
    {
        "id": 5,
        "date": "11/15/2022",
        "score": "37/50",
        "ClassRank": "5"   
    },
    {
        "id": 6,
        "date": "11/16/2022",
        "score": "37/50",
        "ClassRank": "6"   
    },
    {
        "id": 7,
        "date": "11/17/2022",
        "score": "37/50",
        "ClassRank": "7"   
    }
  ]
  
  const [filterData, setfilterData]= useState(data)
  
  const search = (e)=>{
    console.log(e.target.value)
    setfilterData(data.filter((item)=> item.date.includes(e.target.value)))
  }
  

  return(
    <>
       <div>TestResultDate</div>
       <input type="text" placeholder="Search" onKeyUp={search}/>
<ol>
  {filterData.map((user)=>(
    
<div key={user.id}>
<li>{user.date} </li>
<p><a href={user.VedioLectureLink}>Vedio Lecture link</a></p>
</div>
      
    
  ))}
</ol>
    </>
  )
};

export default TestResultDate;
