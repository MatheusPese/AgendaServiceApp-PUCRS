'use client'
import { useRouter } from "next/navigation";
import React from "react";
import { useUserService } from "../../_services";
import Button from "./Button";

interface Props {
    children: React.ReactElement;
    className?:string;
    type: "Default"|"Warning";
    title: string;
    buttonTextConfirm: string;
    buttonTextCancel: string;
}

const CustomPopup: React.FC<Props> = ({children, title, buttonTextConfirm, buttonTextCancel, type = "Default", className = ""}) => {
    
    const  userService = useUserService();
    const router = useRouter();

    return ( 
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-60 rounded-lg m-auto p-0 text-black flex-row items-center ">
        <div className="text-2xl">{title}</div>
        <div className="min-h-[20px]">{children}</div>
        {type === "Default" && (<div><Button buttonText={buttonTextConfirm} customStyle="primary" /></div>)}
        {type === "Warning" && (<div><Button buttonText={buttonTextConfirm} customStyle="danger" /></div>)}
        <div><Button buttonText={buttonTextCancel} customStyle="secondary" /></div>)

    </div> 
    );
}
 
export default CustomPopup;