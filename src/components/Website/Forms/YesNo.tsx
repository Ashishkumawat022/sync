import React from "react";
import st from "../../../assets/stylesheet/style.module.scss";


const YesNo = () => {
  return (
    <>
	<label className={`${st.switch}`}>
		<input className={`${st.switchInput}`} type="checkbox" />
		<span className={`${st.switchLabel}`} data-on="Yes" data-off="No"></span> 
		{/* <span className={`${st.switchHandle}`}></span>  */}
	</label>
    </>
  );
};

export default YesNo;
