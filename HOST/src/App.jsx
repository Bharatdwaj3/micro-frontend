import './App.css'
import React, {lazy, Suspense} from 'react'


const RemoteApp=lazy(()=>import('remoteApp/App'))
function App() {

  return (
    <>
       <div  className='h-[500px] w-[1469px] bg-green-500'>
          <h1>This is the Host App</h1>   
          <p>This is the main Container App</p>
          <hr />
          <Suspense fallback={<div>Loading remote component...</div>}>
            <RemoteApp/>
          </Suspense>
        </div>  
    </>
  )
}

export default App
