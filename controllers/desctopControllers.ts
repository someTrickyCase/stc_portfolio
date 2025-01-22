import { SphereRotationScrollType } from "@/types/types";

export function wheelController(rotationState: { scrollState: SphereRotationScrollType }) {
    window.addEventListener("wheel", (e) => {
        const { deltaY } = e;
        switch (deltaY) {
            case 120: {
                if (rotationState.scrollState) return;
                rotationState.scrollState = "scrolledUp";
                setTimeout(() => (rotationState.scrollState = undefined), 2000);
                return;
            }
            case -120: {
                if (rotationState.scrollState) return;
                rotationState.scrollState = "scrolledDown";
                setTimeout(() => (rotationState.scrollState = undefined), 2000);
                return;
            }
        }
    });
}

export function mouseMoveController(mousePosition: { x: number; y: number }) {
    window.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        mousePosition.x = clientX;
        mousePosition.y = clientY;
    });
}
