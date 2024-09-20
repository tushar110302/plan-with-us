import { useState } from 'react'
import allData from "./data"
import Tours from './components/Tours'

function App() {
  const [data, setData] = useState(allData)
  function removeTour(id){
    setData(prev => prev.filter((d) => d.id !== id));
  }

  return (
    <>
      {data.length==0 ?
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setData(allData)}>
            Refresh
          </button>
        </div>
        :  <div className='App'>
            <h2 className='title'>Plan with Us!</h2>
            <Tours tours={data} removeTour={removeTour} /> 
          </div>
        }
    </>
  )
}

export default App
