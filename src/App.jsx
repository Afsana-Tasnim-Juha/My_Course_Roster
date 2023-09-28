

import './App.css'
import Courses from './Components/Course/Courses'
import Courselists from './Components/Courselist/Courselists'



function App() {


  return (
    <>

      <div className='md:flex'>
        <Courses></Courses>
        <Courselists></Courselists>
      </div>



    </>
  )
}

export default App
