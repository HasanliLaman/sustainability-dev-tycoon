import { useEffect, useRef } from "react";
import StyleBackground from "./style";

interface Dot {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
}

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && canvas.parentElement) {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }

    const dots: Dot[] = [];
    const numberOfDots = 10;
    const cols = Math.ceil(Math.sqrt(numberOfDots));
    const rows = Math.ceil(numberOfDots / cols);
    const zoneWidth = canvas ? canvas.width / cols : 0;
    const zoneHeight = canvas ? canvas.height / rows : 0;

    let i = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (i >= numberOfDots) break;
        dots.push({
          x: col * zoneWidth + Math.random() * zoneWidth,
          y: row * zoneHeight + Math.random() * zoneHeight,
          radius: Math.random() * 3 + 2,
          dx: (Math.random() - 0.5) * 0.2,
          dy: (Math.random() - 0.5) * 0.2,
        });
        i++;
      }
    }

    function animate() {
      if (!ctx) return;
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0faa4dad";
        ctx.fill();

        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <StyleBackground>
      <div className="circle-big"></div>
      <div className="circle-big"></div>
      <div className="circle-big"></div>
      <canvas ref={canvasRef}></canvas>
    </StyleBackground>
  );
};

export default Background;
