

import './App.css'
import Courses from './Components/Course/Courses'
import Courselists from './Components/Courselist/Courselists'



function App() {


  const [lists, setLists] = ([]);

  const handleSelect = () => {
    console.log('adding');
  }



  return (
    <>

      <div className='md:flex'>

        <Courses handleSelect={handleSelect}></Courses>
        <Courselists></Courselists>
      </div>






    </>
  )
}

export default App
