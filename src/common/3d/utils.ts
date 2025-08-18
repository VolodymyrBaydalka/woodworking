import { BoxGeometry, MeshBasicMaterial, EdgesGeometry, LineSegments, Group, Mesh, Object3D, LineBasicMaterial } from "three";

export type BoxType = "TypeA" | "TypeB";

export function createBox(width: number, height: number, depth: number, fillColor: number, lineColor: number): Object3D {
	var geometry = new BoxGeometry(width, height, depth);
	var material = new MeshBasicMaterial({ color: fillColor });

	var edges = new EdgesGeometry(geometry);
	var line = new LineSegments(edges, new LineBasicMaterial({ color: lineColor }));

	var g = new Group();

	g.add(new Mesh(geometry, material), line)

	return g;
}

export function createCabinetModel(width: number, height: number, depth: number,
	thickness: number, verticalDividers: number, horizontalDividers: number,
	fill: number, stroke: number, boxType: BoxType = "TypeA", dividersType: BoxType = "TypeA"): Object3D {
	const { innerW, innerH, cellW, cellH } = calcCabinetStats(width, height, thickness, verticalDividers, horizontalDividers);

	const panelW = boxType == "TypeA" ? innerW : width;
	const panelH = boxType == "TypeB" ? innerH : height;

	const left = createBox(thickness, panelH, depth, fill, stroke);
	const right = createBox(thickness, panelH, depth, fill, stroke);
	const top = createBox(panelW, thickness, depth, fill, stroke);
	const bottom = createBox(panelW, thickness, depth, fill, stroke);

	left.translateX(-(width - thickness) / 2);
	right.translateX((width - thickness) / 2);
	top.translateY(-(height - thickness) / 2);
	bottom.translateY((height - thickness) / 2);

	var g = new Group();

	g.add(left, right, top, bottom);

	if (dividersType == "TypeA") {
		for (let x = 0; x < verticalDividers; x++) {
			const d = createBox(thickness, innerH, depth, fill, stroke);
			d.translateX((x + 1) * cellW + x * thickness + thickness / 2 - (innerW / 2));
			g.add(d);
		}

		for (let y = 0; y < horizontalDividers; y++) {
			for (let x = 0; x < verticalDividers + 1; x++) {
				const d = createBox(cellW, thickness, depth, fill, stroke);
				d.translateX(x * (cellW + thickness) + cellW / 2 - (innerW / 2));
				d.translateY((y + 1) * cellH + y * thickness + thickness / 2 - (innerH / 2));
				g.add(d);
			}
		}
	}
	else if (dividersType == "TypeB") {
		for (let y = 0; y < horizontalDividers; y++) {
			const d = createBox(innerW, thickness, depth, fill, stroke);
			d.translateY((y + 1) * cellH + y * thickness + thickness / 2 - (innerH / 2));
			g.add(d);
		}

		for (let x = 0; x < verticalDividers; x++) {
			for (let y = 0; y < horizontalDividers + 1; y++) {
				const d = createBox(thickness, cellH, depth, fill, stroke);
				d.translateX((x + 1) * (cellW + thickness) - (innerW + thickness) / 2);
				d.translateY(y * (cellH + thickness) - (innerH - cellH) / 2);
				g.add(d);
			}
		}
	}

	return g;
}

export function calcCabinetStats(width: number, height: number,
	thickness: number, verticalDividers: number, horizontalDividers: number) {

	const innerW = width - 2 * thickness;
	const innerH = height - 2 * thickness;

	return {
		innerH, innerW,
		cellW: (innerW - (verticalDividers * thickness)) / (verticalDividers + 1),
		cellH: (innerH - (horizontalDividers * thickness)) / (horizontalDividers + 1),
	}
}