import { useState } from 'react'
import logo from './assets/favicon.svg'

const App: React.FunctionComponent<any> = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <img src={logo} alt='DayList' width={80} />
      <h1>DayList</h1>
    </div>
  )
}

export default App
