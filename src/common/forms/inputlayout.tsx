import React from "react";

export function InputLayout({ label, children }: any) {
	return (
		<div className="input-layout">
			<label>{label}</label>
			{children}
		</div>
	);
}