import './App.css';
import Courses from './Components/Course/Courses';
import Courselists from './Components/Courselist/Courselists';
import { useState } from 'react';
import Header from './Components/Header/Header';

function App() {
  const [lists, setLists] = useState([]);

  const handleSelect = (singleCourse) => {

    const isExist = lists.find((item) => item.id == singleCourse.id);
    if (isExist) {
      alert("Already have the course in the list")
    }
    else {
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
        <Courselists lists={lists}></Courselists>
      </div>
    </>
  );
}

export default App;
