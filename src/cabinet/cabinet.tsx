import { ChangeEvent, useState } from "react";
import React from "react";
import { Viewport3D } from "../common/3d/viewport3d";
import { Group } from "three";
import { func } from "prop-types";
import { createCabinetModel } from "../common/3d/utils";
import { InputLayout } from "../common/forms/inputlayout";
import { useLocation, useHistory } from "react-router-dom";

interface CabinetState {
    width: number;
    height: number;
    depth: number;

    thickness: number;

    model: any;
}

export function CabinetEditor(props: any) {
    const [state, setState] = useState<CabinetState>(function() {
        var state = {
            width: 400,
            height: 720,
            depth: 550,
            thickness: 18
        } as CabinetState;

        state.model = createCabinetModel(state.width, state.height, state.depth, state.thickness, 0xff0000, 0xffffff);
        return state;
    });

    let history = useHistory();

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        var state = { ...state } as any;

        state[name] = value;
        state.model = createCabinetModel(state.width, state.height, state.depth, state.thickness, 0xff0000, 0xffffff);

        setState(state);
    }

    function build() {
        let parts = [
            { width: state.depth, height: state.height, number: 2 },
            { width: state.depth, height: state.width - (2 * state.thickness), number: 2 },
        ];

        history.push("/cutlist", {
            parts: parts
        });
    }

    return <form>
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

        <button type="button" onClick={build}>Build Cutlist</button>

        <Viewport3D width={600} height={600} model={state.model} />
    </form>
}