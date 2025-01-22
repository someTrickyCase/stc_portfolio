export function getCameraPositionY(mouseCoordY: number) {
    const ratioY = 5 / window.innerHeight;
    const windowCenterY = window.innerHeight / 2;
    return (windowCenterY - mouseCoordY) * ratioY;
}

export function getCameraPositionX(mouseCoordX: number) {
    const ratioX = 5 / window.innerWidth;
    const windowCenterX = window.innerWidth / 2;
    return (mouseCoordX - windowCenterX) * ratioX;
}
