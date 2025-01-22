export function getLightPositionY(mouseCoordY: number) {
    const ratioY = 50 / window.innerHeight;
    const windowCenterY = window.innerHeight / 2;
    return (windowCenterY - mouseCoordY) * ratioY;
}

export function getLightPositionX(mouseCoordsX: number) {
    const ratioX = 50 / window.innerWidth;
    const windowCenterX = window.innerWidth / 2;
    return (mouseCoordsX - windowCenterX) * ratioX;
}
