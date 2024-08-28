import { useState } from 'react'

import './App.css'
import Header from './component/Header/Header'
import Footer from"./component/Footer/Footer"
import Home from './component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="">
     < Header />
     {/* <Outlook /> */}
     < Home />
     < Footer />
     </div>
    </>
  )
}

export default App
