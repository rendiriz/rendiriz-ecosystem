/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

class Circle {
  x: number;
  y: number;
  angle: number;
  radius: number;
  firstColor: string;
  secondColor: string;

  constructor(w, h, color, minR, maxR) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.angle = Math.random() * Math.PI * 2;
    this.radius = Math.random() * (maxR - minR) + minR;
    this.firstColor = `hsla(${color}, 100%, 50%, 0.4)`;
    this.secondColor = `hsla(0, 0%, 100%, 0)`;
  }

  draw(ctx, speed) {
    this.angle += speed;
    const x = this.x + Math.cos(this.angle) * 200;
    const y = this.y + Math.sin(this.angle) * 200;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
    gradient.addColorStop(0, this.firstColor);
    gradient.addColorStop(1, this.secondColor);

    ctx.globalCompositeOperation = `overlay`;
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function Canvas({ color }) {
  const canvasRef = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setCanvasSize = (context) => {
    const w = window.innerWidth;
    const h = isMobile ? 648 : window.innerHeight;

    setWidth(w);
    setHeight(h);
    context.scale(devicePixelRatio, devicePixelRatio);
  };

  const drawCircles = (context, circles) => {
    circles.forEach((circle) => circle.draw(context, 0.005));
  };

  const clearCanvas = (context) => {
    context.clearRect(0, 0, width, height);
  };

  useEffect(() => {
    const cnv = canvasRef.current;
    const ctx = cnv.getContext('2d');
    const radius = isMobile ? 400 : 700;
    const circles = [];
    let animationFrameId;

    const draw = () => {
      for (let i = 0; i < 3; i += 1) {
        circles.push(new Circle(width, height, color, radius, radius));
      }
    };

    (window.onresize = () => {
      setCanvasSize(ctx);
      draw();
    })();

    const render = () => {
      clearCanvas(ctx);
      drawCircles(ctx, circles);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [drawCircles]);

  return (
    <canvas
      className="block w-full lg:(h-full) bg-gradient-to-b from-white to-gray-100"
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
}

export default Canvas;
