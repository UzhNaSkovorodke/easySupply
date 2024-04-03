const generatePos = (maxX: number, maxY: number, id: string) => {
    return {x: Number((Math.random() * maxX).toFixed(1)), y: Number((Math.random() * maxY).toFixed(1)), id: id}
}
const generateNewPos = (cursorX: number, cursorY: number, rect: DOMRect, maxX: number, maxY: number, id: string): {
    x: number,
    y: number,
    id: string
} => {
    const newPos = generatePos(maxX, maxY, id)
    const maxXCursor = cursorX + rect.width
    const minXCursor = cursorX - rect.width

    const maxYCursor = cursorY + rect.height
    const minYCursor = cursorY - rect.height

    if (newPos.x < maxXCursor && newPos.x > minXCursor && newPos.y < maxYCursor && newPos.y > minYCursor) return generateNewPos(cursorX, cursorY, rect, maxX, maxY, id)
    return generatePos(maxX, maxY, id)
}
export {generateNewPos}