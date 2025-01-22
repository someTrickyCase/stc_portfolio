import { SphereRotationScrollType } from "@/types/types";

export function touchMoveController(mousePosition: { x: number; y: number }) {
    window.addEventListener("touchmove", (e) => {
        const { clientX, clientY } = e.touches[0];
        mousePosition.x = clientX;
        mousePosition.y = clientY;
    });
}

let lastTime: number | undefined;
export function doubleTouchController(rotationState: { scrollState: SphereRotationScrollType }) {
    window.addEventListener("touchstart", (e) => {
        const isBottomScreenHalfTouched = window.innerHeight / 2 > e.touches[0].clientY ? 1 : 0;

        const eventTime = Date.now();
        if (lastTime && eventTime - lastTime < 230) {
            if (rotationState.scrollState) return;
            rotationState.scrollState = isBottomScreenHalfTouched ? "scrolledDown" : "scrolledUp";
            setTimeout(() => (rotationState.scrollState = undefined), 2000);
            return;
        }
        lastTime = eventTime;
    });
}
