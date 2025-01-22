import { CameraRotationNavigateType, SphereRotationScrollType } from "@/types/types";

export function getCameraRotationNavigate(state: CameraRotationNavigateType) {
    switch (state) {
        case "forward":
            return -0.02;
        case "backward":
            return 0.02;
        case "":
            return 0;
    }
}

export function getSphereRotationScroll(state: SphereRotationScrollType) {
    switch (state) {
        case "scrolledUp":
            return { x: 0.005, y: Math.random() * 0.003 };
        case "scrolledDown":
            return { x: -0.005, y: Math.random() * 0.003 };
        case undefined:
            return { x: 0, y: 0 };
    }
}
