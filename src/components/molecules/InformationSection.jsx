import Input from '../atoms/Input.jsx';
import Button from '../atoms/Button.jsx';
import Container from '../atoms/Container.jsx';
import Form from '../atoms/Form.jsx';
import {useState} from 'react'

function InformationSection({information, updateInformation, inputTypes, cancelFunction=null}) {
  const [inputValues, setInputValues] = useState({...information});
  
  function updateInputValues(event, valueKey) {
    setInputValues({...inputValues, [valueKey] : event.target.value});
  }

  function formatLabel(string) {
    const separatedString = string.replace(/([A-Z])/g, ' $1').trim();
    return separatedString[0].toUpperCase() + separatedString.slice(1);
  }
  return (
    <Form>
      {Object.keys(inputValues).map((inputKey) => 
      <Input labelName={formatLabel(inputKey)} inputId={inputKey} inputName={inputKey} inputType={inputTypes[inputKey]} inputValue={inputValues[inputKey]} onChange={(e) => updateInputValues(e, inputKey)} key={inputKey}/>
      )}
      <Container className="button-container">
      {(typeof cancelFunction === "function") && <Button onClick={cancelFunction}>Cancel</Button>}
        <Button onClick={() => updateInformation({...inputValues})}>Save Changes</Button>
      </Container>
    </Form>
  )
}

export {InformationSection}