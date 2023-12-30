'use client'

import React from "react";
import Button from "./Button";


type props = {

	title: string,
	children?: React.ReactNode,
	onConfirm?: (params?:any) => void,
	onDeny?: (params?:any) => void,
	onSubmit?: (params?:any) => void
}

const Popup: React.FC<props> = ({title = "Title", children, onConfirm, onDeny, onSubmit}) => {
	return ( 
		<div className="flex fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-60 rounded-lg m-auto text-black flex-col items-center gap-4 p-3">
			<h2 className="text-2xl">{title}</h2>
			<form className="flex flex-col gap-2" onSubmit={onSubmit}>
				{children}
				<div className="flex flex-row gap-2 m-2 ">
				<Button type="button" customStyle="secondary" size="small" className="flex btn btn-primary" onClick={onDeny}>
					Cancelar
				</Button>
				<Button type="submit" customStyle="primary" size="small" className="flex btn btn-primary" onClick={onConfirm}>
					Criar
				</Button>
				</div>
				
			</form>
		</div> 
	);
}

export default Popup;