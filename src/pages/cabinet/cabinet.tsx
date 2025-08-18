import { ChangeEvent, useMemo, useState } from "react";
import React from "react";
import { Viewport3D } from "../../common/3d/viewport3d";
import { createCabinetModel } from "../../common/3d/utils";
import { InputLayout } from "../../common";
import { useNavigate } from "react-router";

interface CabinetState {
    width: number;
    height: number;
    depth: number;
    thickness: number;
}

export function CabinetEditor(props: any) {

    const navigate = useNavigate();
    
    const [state, setState] = useState<CabinetState>(() => ({
        width: 400,
        height: 720,
        depth: 550,
        thickness: 18
    }));

    const model = useMemo(() => createCabinetModel(state.width, state.height, state.depth, state.thickness, 0xff0000, 0xffffff), [state]);

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        setState(state => ({ ...state, [target.name]: parseInt(target.value) }));
    }

    function build() {
        let parts = [
            { width: state.depth, height: state.height, number: 2 },
            { width: state.depth, height: state.width - (2 * state.thickness), number: 2 },
        ];

        navigate("/cutlist", { state: { parts: parts } });
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

        <Viewport3D width={600} height={600} model={model} />
    </form>
}