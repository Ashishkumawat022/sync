import React from "react";
import st from "../../../assets/stylesheet/style.module.scss";
import { NavLink } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import es from 'react-phone-input-2/lang/es.json'



const PhoneNumber = () => {

  function handleOnChange(value:any) {
    
 }
  

  return (
    <>
   <PhoneInput
      country={"in"}
      localization={es}
      inputProps={{
        name: "phone",
        required: true,
        autoFocus: true,
        countryCodeEditable:false,
        inputExtraProps:{
          name: "tel",
        required: true,
        autoFocus: true,
        }
      }}
    />
    </>
  );
};

export default PhoneNumber;
