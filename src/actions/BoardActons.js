export const drawXAction = (cellIndex) =>{
    return{
        type: 'Draw_X',
        cellIndex
    }
}

export const drawYAction = (cellIndex)=>{
    return{
        type: 'Draw_O',
        cellIndex
    }
}