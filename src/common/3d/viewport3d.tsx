import React, { useEffect, useRef } from "react";
import { Scene, WebGLRenderer, PerspectiveCamera, Mesh, Group, LineSegments, EdgesGeometry, MeshBasicMaterial, BoxGeometry, Object3D } from "three";
import { SizeBase } from "../../cutlist/core";

declare var THREE : any;

export interface Viewport3DProps {
    width: number;
    height: number;
    model: any;
}

export function Viewport3D(props: Viewport3DProps) {
    const viewEl = useRef(null);
    const sceneRef = useRef(null);

    useEffect(() => {
        let play: boolean = true;
        let scene = sceneRef.current = new Scene();

        var container = viewEl.current as HTMLElement;
        var width = props.width;
        var height = props.height;
        var camera = new PerspectiveCamera(75, width / height, 0.1, 10000);

        var renderer = new WebGLRenderer();
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);
        var controls = new THREE.OrbitControls( camera, renderer.domElement );

        camera.position.set( 0, 20, 1000 );
        
        var animate = () => {
            if(!play)
                return;

            controls.update();            
            renderer.render(scene, camera);

            requestAnimationFrame( animate );
        }

        animate();

        return () => {
            play = false;
        }
    }, []);

    useEffect(() => {
        var scene = sceneRef.current as Scene;
        
        scene.children = [];

        if(props.model)
            scene.add(props.model);
    }, [props.model]);

    return <div ref={viewEl} style={{ width: props.width, height: props.height }}></div>
}