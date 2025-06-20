import './App.css'
import Nav from "./component/Nav"
import Trends from "./component/Trends"
import Reasons from "./component/Reasons"
import Faq from "./component/Faq"



function App()
{

  return(

    <>
    
    <div className='bg-black px-30 text-white' >
      <Nav/>
      <Trends/> 
      <Reasons/>
      <Faq/>
    </div>

    </>
  )

}


export default App