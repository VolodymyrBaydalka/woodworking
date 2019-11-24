import React from "react";

export function InputLayout(props: any) {
    return <>
        <div className="input-layout">
            <label>{props.label}</label>
            {props.children}
        </div>
    </>;
}