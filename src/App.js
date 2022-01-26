import React, { useCallback } from "react";

import "./styles.css";
import { useRef } from "react";

export default function App(props) {
  const canvasRef = useRef(null);

  const drawRect = useCallback((ctx) => {
    // Triangle
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(100, 200);
    ctx.lineTo(50, 50);
    // ctx.closePath();
    ctx.fillStyle = "coral";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(200, 50);
    ctx.lineTo(150, 200);
    ctx.lineTo(250, 200);
    ctx.closePath();
    ctx.stroke();
  }, []);

  const rect = useCallback((ctx) => {
    // // Rectangle
    ctx.beginPath();
    ctx.rect(300, 50, 150, 100);
    ctx.fillStyle = "teal";
    ctx.fill();
  }, []);

  const multiColor = useCallback((ctx) => {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.fillStyle = `rgb(
            ${Math.floor(255 - 42.5 * i)},
            ${Math.floor(255 - 42.5 * j)},
            0)`;
        ctx.fillRect(j * 50, i * 50, 50, 50);
      }
    }
  }, []);

  const circle = useCallback((ctx) => {
    ctx.beginPath();
    ctx.arc(100, 75, 100, 0, Math.PI);
    ctx.stroke();
  }, []);

  const drawwShapes = useCallback((ctx) => {
    // Draw shapes
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 2; j++) {
        ctx.beginPath();
        let x = 25 + j * 50; // x coordinate
        let y = 25 + i * 50; // y coordinate
        let radius = 20; // Arc radius
        let startAngle = 0; // Starting point on circle
        let endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        let counterclockwise = i % 2 === 1; // Draw counterclockwise

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }, []);

  const beginpath = useCallback((ctx) => {
    // First path
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.moveTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.stroke();

    // Second path
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.moveTo(20, 20);
    ctx.lineTo(120, 120);
    ctx.stroke();
  }, []);

  const clearrect = useCallback((ctx, canvas) => {
    // Draw yellow background
    ctx.beginPath();
    ctx.fillStyle = "#ff6";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw blue triangle
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.moveTo(20, 20);
    ctx.lineTo(180, 20);
    ctx.lineTo(130, 130);
    ctx.closePath();
    ctx.fill();

    // Clear part of the canvas
    ctx.clearRect(10, 10, 120, 100);
  }, []);

  const createpattern = useCallback((ctx) => {
    var img = new Image();
    img.src = "canvas_createpattern.png";
    img.onload = function () {
      var pattern = ctx.createPattern(img, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, 300, 300);
    };
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // drawRect(ctx);
    // rect(ctx);
    //multiColor(ctx);
    //circle(ctx);
    //drawwShapes(ctx);
    //beginpath(ctx)
    //clearrect(ctx, canvas);
    createpattern(ctx);
  }, [
    createpattern,
    drawRect,
    rect,
    multiColor,
    circle,
    drawwShapes,
    beginpath,
    clearrect
  ]);

  return (
    <div>
      {/* <h1>HTML5 Canvas + React.js</h1> */}
      <canvas
        ref={canvasRef}
        id="canvas"
        width="600"
        height="400"
        // width="200"
        // height="100"
        // style={{ border: "1px solid #d3d3d3" }}
        {...props}
      ></canvas>
    </div>
  );
}
