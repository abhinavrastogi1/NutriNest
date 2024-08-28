import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './component/Header/Header'
import Footer from"./component/Footer/Footer"
import Home from './component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
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
