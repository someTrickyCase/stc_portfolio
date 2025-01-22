"use client";

import { mouseMoveController, wheelController } from "@/controllers/desctopControllers";
import { touchMoveController, doubleTouchController } from "@/controllers/mobileControllers";
import { getCameraPositionX, getCameraPositionY } from "@/lib/getCameraPosition";
import { mobileCheck } from "@/lib/getDeviceType";
import { getLightPositionX, getLightPositionY } from "@/lib/getLightPosition";
import { getCameraRotationNavigate, getSphereRotationScroll } from "@/lib/getRoataion";
import { readCustomStore } from "@/store/customStore";

import { SphereRotationScrollType } from "@/types/types";
import { useEffect } from "react";
import {
    Object3D,
    Object3DEventMap,
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    TextureLoader,
    PlaneGeometry,
    MeshPhongMaterial,
    Mesh,
    AmbientLight,
    SpotLight,
    PointLight,
} from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import Loader from "../loader/Loader";
import { onWindowResize } from "@/controllers/onResize";

export default function MainScene() {
    let SPHERE: Object3D<Object3DEventMap> | null = null;
    let RINGS: Object3D<Object3DEventMap> | null = null;

    const mousePosition = { x: 0, y: 0 };
    const rotationState: {
        scrollState: SphereRotationScrollType;
    } = {
        scrollState: undefined,
    };

    useEffect(() => {
        const isMobile = mobileCheck();

        // controllers
        if (!isMobile) {
            wheelController(rotationState);
            mouseMoveController(mousePosition);
        } else {
            touchMoveController(mousePosition);
            doubleTouchController(rotationState);
        }

        renderScene();
    });

    function renderScene() {
        // Scene
        const scene = new Scene();
        const camera = new PerspectiveCamera(91, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 38);

        // renderer
        const renderer = new WebGLRenderer({
            canvas: document.querySelector("#scene") as HTMLCanvasElement,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // loader
        const loader = new TextureLoader();
        const iceTexture = loader.load("/assets/textures/Ice_001/Ice_001_COLOR.jpg");
        const iceNormals = loader.load("/assets/textures/Ice_001/Ice_001_NRM.jpg");
        const iceDisp = loader.load("/assets/textures/Ice_001/Ice_001_DISP.png");
        const iceSpec = loader.load("/assets/textures/Ice_001/Ice_001_SPEC.jpg");

        // gltf loader
        const gltfLoader = new GLTFLoader();
        gltfLoader.load("/assets/models/scene.gltf", (gltf) => {
            const sphere = gltf.scene.getObjectByName("Sphere") as Object3D<Object3DEventMap>;
            SPHERE = sphere;
            SPHERE.scale.set(10, 10, 10);
            SPHERE.position.set(0, 0, 0);

            const rings = gltf.scene.getObjectByName("Torus") as Object3D<Object3DEventMap>;
            RINGS = rings;
            RINGS.scale.set(30, 30, 30);
            RINGS.position.set(0, 0, 0);
            scene.add(SPHERE, RINGS);

            document.querySelector("#loader")?.classList.add("hide");
        });

        // plane
        const planeGeometry = new PlaneGeometry(1000, 1000);
        const planeMaterial = new MeshPhongMaterial({
            map: iceTexture,
            normalMap: iceNormals,
            displacementMap: iceDisp,
            specularMap: iceSpec,
        });
        const plane = new Mesh(planeGeometry, planeMaterial);
        plane.position.set(0, 0, -100);
        scene.add(plane);

        // ambient light
        const ambientLight = new AmbientLight(0xabc8ca, 0.02);
        scene.add(ambientLight);

        // spotlight
        const spotlLight = new SpotLight(0xe6a74a, 100, 0, 90, 0.22);
        spotlLight.position.set(15, -15, 20);
        scene.add(spotlLight);

        // pointLight
        const pointLight = new PointLight(0xffffff, 50);
        pointLight.position.z = 32;
        scene.add(pointLight);

        // animate function launched every fps times
        function animate() {
            if (!SPHERE || !RINGS) return;

            pointLight.position.x = getLightPositionX(mousePosition.x);
            pointLight.position.y = getLightPositionY(mousePosition.y);

            camera.position.x = getCameraPositionX(mousePosition.x);
            camera.position.y = getCameraPositionY(mousePosition.y);

            SPHERE.rotation.x += getSphereRotationScroll(rotationState.scrollState).x;
            SPHERE.rotation.y += getSphereRotationScroll(rotationState.scrollState).y;
            SPHERE.rotation.z -= 0.001;

            RINGS.rotation.z += getSphereRotationScroll(rotationState.scrollState).x;
            RINGS.rotation.y += 0.001;

            RINGS.rotation.x += getCameraRotationNavigate(readCustomStore());
            plane.rotation.z += getCameraRotationNavigate(readCustomStore());

            renderer.render(scene, camera);
        }
        renderer.setAnimationLoop(animate);

        // on resize
        window.addEventListener("resize", () => onWindowResize(camera, renderer), false);
    }

    return (
        <>
            <canvas id='scene' />;
            <Loader />
        </>
    );
}
