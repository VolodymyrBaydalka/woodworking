import THREE, { BoxGeometry, MeshBasicMaterial, EdgesGeometry, LineSegments, Group, Mesh, Object3D, LineBasicMaterial } from "three";

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
    thickness: number, fill: number, stroke: number, boxType: BoxType = "TypeA"): Object3D {

    var panelW = boxType == "TypeA" ? width - 2 * thickness : width;
    var panelH = boxType == "TypeB" ? height - 2 * thickness : height;
        
    var left = createBox(thickness, panelH, depth, fill, stroke);
    var right = createBox(thickness, panelH, depth, fill, stroke);
    var top = createBox(panelW, thickness, depth, fill, stroke);
    var bottom = createBox(panelW, thickness, depth, fill, stroke);

    left.translateX(-(width - thickness) / 2);
    right.translateX((width - thickness) / 2);
    top.translateY(-(height - thickness) / 2);
    bottom.translateY((height - thickness) / 2);

    var g = new Group();

    g.add(left, right, top, bottom);

    return g;
}