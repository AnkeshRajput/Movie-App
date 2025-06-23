import {  useState } from 'react'
import Search from './components/Search.jsx'


const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  

  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

       
      </div>
    </main>
  )
}

export default App