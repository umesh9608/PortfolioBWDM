import Reac, {useState} from 'react'
import Navbar from './componants/Navbar'
import Rightbar from './componants/Rightbar'
import Sidebar from './componants/Sidebar'
import Post from './componants/Post'
import { Data, data2 } from './Data'

const App = () => {
  const [bgColor, setbgColor] = useState("#232D3f")
  const [color, setColor] = useState("white")
  const [toggle, setToggle] = useState(true)

  const toggleButton=()=>{
    setToggle(!toggle)
    if(toggle){
      setbgColor("rgb(255,255,255)");
      setColor("black")
      document.querySelector('body').style.backgroundColor="#cbc5c5"
    }else{
       setbgColor("#232D3f");
      setColor("white")
      document.querySelector('body').style.backgroundColor="black"
    }
  }
  return (
    <>
      <Navbar  bgColor={bgColor} color={color} toggleButton={toggleButton} toggle={toggle} />
      <div className="container">
        <div className="side_bar">
          <Sidebar bgColor={bgColor} color={color} />
        </div>
        <div className="post_section">
          {Data.map((d) => (
            <Post key={d.id} Data={d} bgColor={bgColor} color={color} />

          ))}
        </div>


        <div className="right_bar">
          {data2.map((d) => (
            <Rightbar key={d.id} Data={d} bgColor={bgColor} color={color} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App