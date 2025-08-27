import { useMemo } from "react";
import React from "react";
import { Viewport3D } from "../../common/3d/Viewport3d";
import { BoxType, calcCabinetStats, createCabinetModel } from "../../common/3d/utils";
import { Button, Form, InputLayout, useInputChange } from "../../common";
import { useNavigate } from "react-router";
import { lineColor, sideColor } from "../../config";
import { useLocalStorage } from "../../common/useLocalStorage";

export function CabinetEditor(props: any) {

	const navigate = useNavigate();
	const [state, setState, reset] = useLocalStorage("cabinet", () => ({
		width: 400,
		height: 720,
		depth: 550,
		thickness: 18,
		boxType: "TypeA" as BoxType,
		verticalDividers: 0,
		horizontalDividers: 0,
		dividersType: "TypeB" as BoxType
	}));
	const onInputChange = useInputChange(setState);

	const model = useMemo(() => createCabinetModel(state.width, state.height, state.depth, state.thickness,
		state.verticalDividers, state.horizontalDividers, sideColor, lineColor, state.boxType, state.dividersType), [state]);

	const stats = useMemo(() => calcCabinetStats(state.width, state.height, state.thickness, state.verticalDividers, state.horizontalDividers), [state]);

	function build() {
		const { width, height, depth, boxType, verticalDividers, horizontalDividers, dividersType } = state;
		const { innerW, innerH, cellW, cellH } = stats;

		let parts = [
			{ width: depth, height: boxType == "TypeA" ? innerW : width, number: 2 },
			{ width: depth, height: boxType == "TypeB" ? innerH : height, number: 2 },
		];

		if (dividersType == "TypeA") {
			parts.push({ width: depth, height: innerH, number: verticalDividers });
			parts.push({ width: depth, height: cellW, number: (verticalDividers + 1) * horizontalDividers });
		} else if (dividersType == "TypeB") {
			parts.push({ width: depth, height: innerW, number: horizontalDividers });
			parts.push({ width: depth, height: cellH, number: (horizontalDividers + 1) * verticalDividers });
		}

		navigate("/cutlist", { state: { parts: parts.filter(x => x.number > 0) } });
	}

	return (<div className="hstack gap-1">
		<Form className="flex-grow">
			<InputLayout label="Width">
				<input name="width" type="number" value={state.width} onChange={onInputChange} />
			</InputLayout>
			<InputLayout label="Height">
				<input name="height" type="number" value={state.height} onChange={onInputChange} />
			</InputLayout>
			<InputLayout label="Depth">
				<input name="depth" type="number" value={state.depth} onChange={onInputChange} />
			</InputLayout>
			<InputLayout label="Thickness">
				<input name="thickness" type="number" value={state.thickness} onChange={onInputChange} />
			</InputLayout>
			<InputLayout label="Box Type">
				<label><input name="boxType" type="radio" value="TypeA" onChange={onInputChange} defaultChecked /> Type A</label>
				<label><input name="boxType" type="radio" value="TypeB" onChange={onInputChange} /> Type B</label>
			</InputLayout>
			<InputLayout label="Vertical Dividers">
				<input name="verticalDividers" type="number" value={state.verticalDividers} onChange={onInputChange} />
			</InputLayout>
			<InputLayout label="Horizontal Dividers">
				<input name="horizontalDividers" type="number" value={state.horizontalDividers} onChange={onInputChange} />
			</InputLayout>
			<InputLayout label="Dividers Type">
				<label><input name="dividersType" type="radio" value="TypeA" onChange={onInputChange} defaultChecked /> Type A</label>
				<label><input name="dividersType" type="radio" value="TypeB" onChange={onInputChange} /> Type B</label>
			</InputLayout>

			<div>Inner Width: {stats.innerW}</div>
			<div>Inner Height: {stats.innerH}</div>
			<div>Cell Width: {stats.cellW}</div>
			<div>Cell Height: {stats.cellH}</div>

			<div className="hstack gap-1">
				<Button onClick={build}>Build Cutlist</Button>
				<Button onClick={() => reset()}>Reset</Button>
			</div>
		</Form>
		<Viewport3D className="flex-grow" width={600} height={600} model={model} />
	</div>);
}