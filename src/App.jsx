import { useState } from 'react'
import { initialGeneralInformation } from './data.js';
import {InformationSection} from './components/InformationSection.jsx';
import './App.css'

export default function App() {
  const [generalInformation, setGeneralInformation] = useState(initialGeneralInformation);

  
  return (
    <>
      <InformationSection generalInformation={generalInformation} updateGeneralInformation={setGeneralInformation} inputTypes={{name: 'text', email: 'email', phoneNumber: 'tel', location: 'text'}}/>
    </>
  )
}