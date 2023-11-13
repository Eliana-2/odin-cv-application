import Button from '../atoms/Button.jsx'
import {InformationSection} from '../molecules/InformationSection.jsx'
import {useState} from 'react'

function PanelContent({information, updateInformation, inputTypes}) {
  const [activeIndex, setActiveIndex] = useState(-1);
  function addInformation() {
    updateInformation([...information, Object.fromEntries(Object.keys(inputTypes).map((key) => [key, ""]))]);
    setActiveIndex(information.length);
  }

  if (activeIndex === -1) {
    return <>
    {information.map((informationItem, index) => 
    <Button onClick={() => setActiveIndex(index)} className="section-button" key={index}>{informationItem.degree}</Button>
    )}
    <Button onClick={addInformation}>Add Degree</Button>
    </>
  }
  else {
    return <>
    <InformationSection information={information[activeIndex]} inputTypes={inputTypes} cancelFunction={() => setActiveIndex(-1)}></InformationSection>
    </>
  }
}

export {PanelContent}