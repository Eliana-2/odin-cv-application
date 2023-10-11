import Input from './Input.jsx';
import Button from './Button.jsx';
import {useState} from 'react'

function InformationSection({generalInformation, updateGeneralInformation, inputTypes}) {
  const [inputValues, setInputValues] = useState({...generalInformation});
  
  function updateInputValues(event, valueKey) {
    setInputValues({...inputValues, [valueKey] : event.target.value});
  }

  function formatLabel(string) {
    const separatedString = string.replace(/([A-Z])/g, ' $1').trim();
    return separatedString[0].toUpperCase() + separatedString.slice(1);
  }
  return (
    <form>
      {Object.keys(inputValues).map((inputKey) => 
      <Input labelName={formatLabel(inputKey)} inputId={inputKey} inputName={inputKey} inputType={inputTypes[inputKey]} inputValue={inputValues[inputKey]} onChange={(e) => updateInputValues(e, inputKey)} key={inputKey}/>
      )}
      <Button/>
    </form>
  )
}

export {InformationSection}