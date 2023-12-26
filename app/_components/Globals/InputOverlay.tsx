'use client'

import React from "react";
import CustomPopup from "./CustomPopup";

interface Props {
	className?:string;
	title: string;
	buttonTextConfirm: string;
	buttonTextCancel: string;
	type: "text" | "password";
	placeholder: string;

}

const InputOverlay: React.FC<Props> = ({title, type="text", placeholder="Input Field", buttonTextConfirm, buttonTextCancel, className = ""}) => {
    return ( 
    <CustomPopup type="Default" title={title} buttonTextConfirm={buttonTextConfirm} buttonTextCancel={buttonTextCancel} className={className}>
	<input placeholder={placeholder} type={type} />
    </CustomPopup>
    );
}
 
export default InputOverlay;