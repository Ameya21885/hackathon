import React, {useState} from "react";

const VideoLectureDate = () => {

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
      <h4>Please type in the date of the video lectures you wish to watch.</h4>
      <h4>The format must be MM/DD/YYYY</h4>
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
  );
};

export default VideoLectureDate;
