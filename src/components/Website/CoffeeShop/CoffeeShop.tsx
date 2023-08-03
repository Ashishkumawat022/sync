import React, { useState } from "react";
import cx from './CoffeeShop.module.scss';
import { Container,Row,Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { coffeeShop1, location, Filled, location2, saved } from "../../../assets/images";
import { BsStarFill } from "react-icons/bs";

// const coffeShop = [
// 	{
// 	image:coffeeShop1,
// 	location:"Greater Boston, Boston",
// 	shopName:"James Brews & Coffee"
// },
// 	{
// 	image:coffeeShop2,
// 	location:"Urban Coffee",
// 	shopName:"James Brews & Coffee"
// },
// 	{
// 	image:coffeeShop3,
// 	location:"Greater Boston, Boston",
// 	shopName:"James Brews & Coffee"
// },
// 	{
// 	image:coffeeShop4,
// 	location:"Greater Boston, Boston",
// 	shopName:"James Brews & Coffee"
// },

// ]

const CoffeeShop = (props:any) => {
	const {status} = props
	const [cafeStatus,setCafeStatus] = useState<string>(status)

  return (
    <>
	{/* {coffeShop.map((item:any)=>{  return*/ }
		 <div className={`${cx.coffeShop}`}>
			<div className={`${cx.coffeShopImg}`}>
			    <NavLink to="/cafe-details"><img src={coffeeShop1} className={`${cx.image}`} /></NavLink>
				<div className={`${cx.overlay}`}>
				   <img src={Filled} className={`${cx.shapeBg}`} />
					{cafeStatus === "inactive" && <NavLink to="#" onClick={()=>{setCafeStatus("active")}} className={`${cx.viewBtn}`}><img src={location} /></NavLink> }
					{cafeStatus === "active" && <NavLink to="#" onClick={()=>{setCafeStatus("inactive")}} className={`${cx.viewBtn} ${cx.active}`}><img src={location2} /></NavLink>}
					{cafeStatus === "saved" && <NavLink to="#" onClick={()=>{setCafeStatus("saved")}} className={`${cx.viewBtn} ${cx.saved}`}><img src={saved} /></NavLink>}
				</div>
			</div>
			<div className={`${cx.coffeShopBody}`}>
			<h3><NavLink to="/cafe-details">James Brews & Coffee</NavLink></h3>
			<p>Greater Boston, Boston <span className={cx.reviewCount}>(153 Reviews)</span></p>
			<span className={`${cx.rating}`}><BsStarFill /> 4.5</span>
			</div>
		</div>
	{/* })} */}
	
    </>
  );
};

export default CoffeeShop;
