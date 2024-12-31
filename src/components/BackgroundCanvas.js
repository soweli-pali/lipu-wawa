import { useEffect, useRef } from "react";
import './BackgroundCanvas.css'

const BackgroundCanvas = () => {
    const canvasRef = useRef(null);

    const generateNextRow = (currentRow) => {
        const max = currentRow.length-1;
        const rule = [0,1,1,1,1,0,0,0];
        return currentRow.map((value, index) => {
            const leftIndex = (index == 0) ? max : index-1;
            const rightIndex = (index == max) ? 0 : index+1;
            const ruleIndex = currentRow[leftIndex]*4 + value*2 + currentRow[rightIndex];
            return rule[ruleIndex];
        });
    };

    const generateBackground = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const canvasWidth = canvas.width = window.innerWidth;
        const canvasHeight = canvas.height = window.innerHeight;

        const squareWidth = 5;
        const numColumns = Math.ceil(canvasWidth/squareWidth); // Number of squares in a row
        const numRows = Math.ceil(canvasHeight/squareWidth)
        const colors = ['#000000', '#FFFFFF']; // Example colors

        let currentRow = Array.from({ length: numColumns }, () =>
            Math.floor(Math.random() * 2)
          );

          for (let y = 0; y <= canvasHeight; y += squareWidth) {
            currentRow.forEach((value, x) => {
              ctx.fillStyle = colors[value];
              ctx.fillRect(x * squareWidth, y, squareWidth, squareWidth);
            });
            currentRow = generateNextRow(currentRow);
          }
    };

    useEffect(() => {
        generateBackground();
        window.addEventListener('resize', generateBackground);
        return () => {window.removeEventListener('resize', generateBackground);};
    });

    return <canvas ref={canvasRef} className="backgroundCanvas"></canvas>
}

export default BackgroundCanvas;