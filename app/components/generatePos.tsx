import {cursorTransform, maxTransform} from "@/app/components/types";

const generatePos = (maxX: number, maxY: number, id: string) => {
    return {x: Number((Math.random() * maxX).toFixed(1)), y: Number((Math.random() * maxY).toFixed(1)), id: id}
}
const generateNewPos = (cursor: cursorTransform, rect: DOMRect, maxTransform: maxTransform, id: string): {
    x: number,
    y: number,
    id: string
} => {
    console.log(id)
    const newPos = generatePos(maxTransform.maxX, maxTransform.maxY, id)
    const maxXCursor = cursor.cursorX + rect.width
    const minXCursor = cursor.cursorX - rect.width

    const maxYCursor = cursor.cursorY + rect.height
    const minYCursor = cursor.cursorY - rect.height

    if (newPos.x < maxXCursor && newPos.x > minXCursor && newPos.y < maxYCursor && newPos.y > minYCursor) return generateNewPos(cursor, rect, maxTransform, id)
    return generatePos(maxTransform.maxX, maxTransform.maxY, id)
}
export {generateNewPos}