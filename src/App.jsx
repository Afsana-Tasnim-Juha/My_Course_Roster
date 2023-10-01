import './App.css';
import Courses from './Components/Course/Courses';
import Courselists from './Components/Courselist/Courselists';
import { useState } from 'react';
import Header from './Components/Header/Header';


function App() {
  const [lists, setLists] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);


  const handleSelect = (singleCourse) => {

    const isExist = lists.find((item) => item.id == singleCourse.id);
    let count = singleCourse.credit;

    if (isExist) {
      return alert("Already have the course in the list")
    }
    else {

      lists.forEach(item => {
        count = count + item.credit
      });


      const TotalHourRemaining = 20 - count;
      setTotalCredit(count);
      setRemaining(TotalHourRemaining);


      console.log(TotalHourRemaining);


      const newSelectLists = [...lists, singleCourse];
      setLists(newSelectLists);
    }

    const newSelectLists = [...lists, singleCourse];
    setLists(newSelectLists);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex'>

        <Courses handleSelect={handleSelect}></Courses>
        <Courselists lists={lists} remaining={remaining} totalCredit={totalCredit}></Courselists>
      </div>
    </>
  );
}

export default App;
