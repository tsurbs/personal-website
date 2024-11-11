"use client";

import "~/styles/globals.css";

import { Lato } from 'next/font/google';
import { type Metadata } from "next";
import { useRef, useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import BackgroundExplain from "~/components/BackgroundExplain";



const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const [clusters, setClusters] = useState<[number, number][] | null>(null)
  const [bounds, setBounds] = useState<[number, number, number, number]>([0,1,0,1])
  const [showBg, setShowBg] = useState(false);
  // const [runnerStates, setRunnerStates] = useState<number[]>([[0, 10]]);

  useEffect(() => {
    fetch('/clusters.json').then((response) => response.json()).then((data) => {
      data = JSON.parse(data);
      const flip_data = data['centers'].map((x: [number, number]) => [x[0], -x[1]]);
      setClusters(flip_data);

      const local_bounds: [number, number, number, number] = [Math.min(...flip_data.map((x: [number, number]) => x[0])), 
                Math.max(...flip_data.map((x: [number, number]) => x[0])), 
                Math.min(...flip_data.map((x: [number, number]) => x[1])), 
                Math.max(...flip_data.map((x: [number, number]) => x[1]))
            ];
      setBounds(local_bounds);
    }
    );
  }, []);

  function dist([x1, y1]: [number, number]) {
    return ([x, y]: [number, number]) => Math.sqrt((x - x1) ** 2 + (y - y1) ** 2);
  }
  let runnerStates = Array(1).fill([0, 0]);
  let runnerColors = Array(1).fill("#00FF00");
  let runnerHistory = Array(1).fill(new Set());
  function runners() {
    const ctx = canvas.current?.getContext("2d");
    if (!ctx || !clusters || !runnerHistory)
      return;
    for (let i = 0; i < runnerStates.length; i++) {
      const [state, goal] = runnerStates[i];
      const [x, y] = clusters[state];
      const [goalX, goalY] = clusters[goal];
      const distList = clusters.map(dist([x, y]));
      const nearList = distList.map((d, i) => [d, i]).sort(([a], [b]) => a - b)
                               .filter(([_, j]) => !runnerHistory[i].has(j))
                               .slice(1, 10);

      const nextState = nearList.map(([_, i]) => i).sort((a, b) => dist([goalX, goalY])(clusters[a]) - dist([goalX, goalY])(clusters[b]))[0];
      runnerStates[i] = [nextState, goal];
      runnerHistory[i].add(state)
    
      

      const scale = Math.min(ctx.canvas.width, ctx.canvas.height)*.85;
      const aspectRatio = (bounds[0] - bounds[1]) / (bounds[2] - bounds[3]);
      const scaleX = scale * aspectRatio;
      const scaleY = scale;
      
      // Highlight current
      ctx.fillStyle = runnerColors[i];
      const adjustedX = Math.floor(((x - bounds[0]) / (bounds[1] - bounds[0])-.5) * scaleX + ctx.canvas.width/2);
      const adjustedY = Math.floor(((y - bounds[2])/(bounds[3] - bounds[2])-.5) * scaleY + ctx.canvas.height/2);
      ctx.fillRect(adjustedX, adjustedY, 10, 10);



      if (state == goal) {
        runnerStates[i] = [Math.floor(Math.random() *clusters.length), Math.floor(Math.random() *clusters.length)];
        runnerHistory[i] = new Set();
      }
    ctx.fillStyle = "#FFFFFF08";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  }

    requestAnimationFrame(runners);
  }

  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    if (!canvas.current || !ctx || !clusters)
      return;

    canvas.current.width = canvas.current.offsetWidth;
    canvas.current.height = canvas.current.offsetHeight;

    // ctx.fillStyle = "#FFFFF0";
    // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    const scale = Math.min(ctx.canvas.width, ctx.canvas.height)*.85;
    const aspectRatio = (bounds[0] - bounds[1]) / (bounds[2] - bounds[3]);
    const scaleX = scale * aspectRatio;
    const scaleY = scale;
    clusters.forEach(([x, y]) => {
      ctx.fillStyle = `rgb(${Math.floor(255 * (x - bounds[0]) / (bounds[1] - bounds[0]))}, ${Math.floor(255 * (y - bounds[2]) / (bounds[3] - bounds[2]))}, 255)`;
      const adjustedX = Math.floor(((x - bounds[0]) / (bounds[1] - bounds[0])-.5) * scaleX + ctx.canvas.width/2);
      const adjustedY = Math.floor(((y - bounds[2])/(bounds[3] - bounds[2])-.5) * scaleY + ctx.canvas.height/2);
      ctx.fillRect(adjustedX, adjustedY, 10, 10);
    })
    requestAnimationFrame(runners);
    // runners();
  }, [canvas, clusters]);

  return (
    <ParallaxProvider>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </head>
    <html lang="en" className={`${lato.className}`}>
      <body className="flex min-h-screen w-full flex-col">
        <div className="fixed w-full h-16 bg-gray-800 text-white align-middle z-[100]">
          <div className="h-full px-10 grid grid-cols-4 gap-4 content-center">
            <div className="font-medium self-center">Theo Urban</div>
            <div className="h-full col-start-4">
              <FormGroup>
                <FormControlLabel control={<Switch checked={showBg} onChange={()=>setShowBg(!showBg)}/>} label={showBg ? "Show me the profile" : "Show me the background"} />
              </FormGroup>
            </div>
          </div>
          
        </div>
        <canvas ref={canvas} className="fixed top-16 h-[96vh] w-screen z-[-100]" />
        {showBg ?  <BackgroundExplain /> : children}
        

      </body>
    </html>
    </ParallaxProvider>
  );
}
