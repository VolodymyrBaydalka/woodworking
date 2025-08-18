import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Part } from "./core";
import { Button, InputLayout } from "../../common";
import { useLocation } from "react-router";
import { flitSizes, layoutParts } from "./layout";
import "./Cutlist.scss";

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
    const location = useLocation();
    const [sheetSize, setSheetSize] = useState(() => ({ width: 2750, height: 1830 }));
    const [parts, setParts] = useState<PartLine[]>(location.state?.parts || []);
    const [newPart, setNewPart] = useState<PartLine>(initialPart);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        var input = e.target;
        var newValue = {... newPart} as any;
        newValue[input.name] = input.value;
        setNewPart(newValue);
    }

    function addPart() {
        setParts([newPart, ...parts]);
        setNewPart(initialPart);
    }

    function removePart(part: Part) {
        setParts(parts.filter(p => p != part));
    }

    function flip() {
        setParts(flitSizes(parts));
    }

    function build() {
        const canvas = canvasRef.current;

        const { offsetWidth, offsetHeight } = canvas;
        canvas.width = offsetWidth;
        canvas.height = offsetHeight;

        const ctx = canvas.getContext("2d");
        const rects = layoutParts(parts, sheetSize.width, sheetSize.height);

        const scale = Math.min(canvas.width / sheetSize.width, canvas.height / sheetSize.height);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.scale(scale, scale);

        ctx.strokeRect(0, 0, sheetSize.width, sheetSize.height);
        ctx.font = `${(12 / scale).toFixed(0)}px Arial`;

        for (const rect of rects) {
            ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
            ctx.fillText(`W: ${rect.width}, H: ${rect.height}`, rect.x + 5, rect.y + 15 / scale);
        }

        ctx.resetTransform();
    }

    return (
        <div className="cutlist-editor">
            <form className="parts-form">
                <InputLayout label="Sheet Size">
                    <input name="sheetWidth" type="number" value={sheetSize.width} onChange={e => setSheetSize(p => ({ ...p, width: e.target.valueAsNumber }))} />
                    <input name="sheetHeight" type="number" value={sheetSize.height} onChange={e => setSheetSize(p => ({ ...p, height: e.target.valueAsNumber }))} />
                </InputLayout>
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
                            <td><Button onClick={() => addPart()}>Add</Button></td>
                        </tr>
                        {parts.map((p, i) => {
                            return (<tr key={i}>
                                <td>{p.number}</td>
                                <td>{p.width}</td>
                                <td>{p.height}</td>
                                <td><Button onClick={() => removePart(p)}>remove</Button></td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </form> 
            <div className="canvas-container">
                <div>
                    <Button onClick={() => build()}>Build</Button>
                    <Button onClick={() => flip()}>Flip</Button>
                </div>
                <canvas ref={canvasRef} style={{ border: "1px solid black" }} />
            </div>
        </div>
    );
}