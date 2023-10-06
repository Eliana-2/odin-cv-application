import {Input} from './Input.jsx';

function InformationSection({generalInformation}) {
  return (
    <form>
      <Input labelName="Name" inputId="name" inputName="name" inputValue={generalInformation.name}/>
      <Input labelName="Email" inputId="email" inputName="email" inputType="email" inputValue={generalInformation.email}/>
      <Input labelName="Phone Number" inputId="phone-number" inputName="phone_number" inputType="tel" inputValue={generalInformation.phoneNumber}/>
      <Input labelName="Location" inputId="location" inputName="location" inputValue={generalInformation.location}/>
    </form>
  )
}

export {InformationSection}