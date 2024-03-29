import React, { useState, ChangeEvent, FormEvent } from "react";
import { Part } from "./core";

interface PartLine extends Part {
    number: number;
}

interface CutListState {
    parts: PartLine[];
    newPart: PartLine;
}

const initialPart = {
    width: 0,
    height: 0,
    number: 1  
}

export function CutListEditor(props: any) {

    const [parts, setParts] = useState<PartLine[]>(props.parts || []);
    const [newPart, setNewPart] = useState<PartLine>(initialPart);

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        var input = e.target;
        var newValue = {... newPart} as any;
        newValue[input.name] = input.value;
        setNewPart(newValue);
    }

    function handleSubmit(e: FormEvent) {
        setParts([newPart, ...parts]);
        setNewPart(initialPart);
        e.preventDefault();
    }

    function removePart(part: Part) {
        setParts(parts.filter(p => p != part));
    }

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Width</th>
                        <th>Height</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input name="number" value={newPart.number} onChange={handleInput} /></td>
                        <td><input name="width" value={newPart.width} onChange={handleInput} /></td>
                        <td><input name="height" value={newPart.height} onChange={handleInput} /></td>
                        <td><button type="submit">Add</button></td>
                    </tr>
                    {parts.map((p, i) => {
                        return (<tr key={i}>
                            <td>{p.number}</td>
                            <td>{p.width}</td>
                            <td>{p.height}</td>
                            <td><button type="button" onClick={() => removePart(p)}>remove</button></td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </form> 
    );
}