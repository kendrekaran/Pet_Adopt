import { BrowserRouter , Routes , Route , Link} from "react-router-dom"
import MainPage from "./mainPage" 
import AdoptPage from "./AdoptPage1"
import AboutPage from "./aboutPage"
import './App.css'
import './index.css'


function App(){
    return(
        <>
        <BrowserRouter>
        <div className="nav">
            <div className="leftNav">
            <h2>Pet Heaven</h2>
            </div>
            <div className="rightNav">
            <Link style={{textDecoration: "none",color: "black"}} to="/">Home</Link>
            <Link style={{textDecoration: "none",color: "black"}} to="/adopt">Adopt</Link>
            <Link style={{textDecoration: "none",color: "black"}} to="/about">About</Link>
            </div>
        </div>
        <br/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/about" element={<About />} />

        </Routes>
        </BrowserRouter>
        
        </>
    )
}

function Home(){
 return(
    <div style={{marginTop:"3%"}}>
    <MainPage />
    </div>
 )
}

function About(){
    return(
        <div style={{marginTop:"3%"}}>
        <AboutPage />
        </div>
     )
}

function Adopt(){
    return(
        <div style={{marginTop:"3%"}}>
        <AdoptPage />
        </div>
     )
}

export default App;
