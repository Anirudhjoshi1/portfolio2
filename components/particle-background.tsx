"use client";

import { useRef, useEffect, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const mouse = useRef({ x: -1000, y: -1000 });
    const animationId = useRef<number>(0);

    const initParticles = useCallback((width: number, height: number) => {
        const count = Math.min(80, Math.floor((width * height) / 15000));
        particles.current = [];
        for (let i = 0; i < count; i++) {
            particles.current.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 1.5 + 0.5,
            });
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (particles.current.length === 0) {
                initParticles(canvas.width, canvas.height);
            }
        };

        const onMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const onMouseLeave = () => {
            mouse.current.x = -1000;
            mouse.current.y = -1000;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);

        const maxDist = 150;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const pts = particles.current;

            // Detect dark mode
            const isDark = document.documentElement.classList.contains("dark");

            // Update positions
            for (const p of pts) {
                const dx = mouse.current.x - p.x;
                const dy = mouse.current.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200 && dist > 0) {
                    const force = (200 - dist) / 200;
                    p.vx += (dx / dist) * force * 0.02;
                    p.vy += (dy / dist) * force * 0.02;
                }

                p.vx *= 0.99;
                p.vy *= 0.99;
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                p.x = Math.max(0, Math.min(canvas.width, p.x));
                p.y = Math.max(0, Math.min(canvas.height, p.y));
            }

            // Draw connections — use darker colors in light mode
            for (let i = 0; i < pts.length; i++) {
                for (let j = i + 1; j < pts.length; j++) {
                    const dx = pts[i].x - pts[j].x;
                    const dy = pts[i].y - pts[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < maxDist) {
                        const baseAlpha = (1 - d / maxDist);
                        const alpha = isDark ? baseAlpha * 0.3 : baseAlpha * 0.5;
                        const gradient = ctx.createLinearGradient(
                            pts[i].x, pts[i].y,
                            pts[j].x, pts[j].y
                        );
                        if (isDark) {
                            gradient.addColorStop(0, `rgba(0, 212, 255, ${alpha})`);
                            gradient.addColorStop(1, `rgba(168, 85, 247, ${alpha})`);
                        } else {
                            // Deeper, more saturated colors for light mode
                            gradient.addColorStop(0, `rgba(0, 140, 210, ${alpha})`);
                            gradient.addColorStop(1, `rgba(130, 50, 220, ${alpha})`);
                        }
                        ctx.beginPath();
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = isDark ? 0.6 : 0.8;
                        ctx.moveTo(pts[i].x, pts[i].y);
                        ctx.lineTo(pts[j].x, pts[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            for (const p of pts) {
                // Glow
                const glowColor = isDark ? "0, 212, 255" : "0, 120, 200";
                const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
                glow.addColorStop(0, `rgba(${glowColor}, ${isDark ? 0.3 : 0.4})`);
                glow.addColorStop(1, `rgba(${glowColor}, 0)`);
                ctx.beginPath();
                ctx.fillStyle = glow;
                ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.fillStyle = isDark
                    ? "rgba(0, 212, 255, 0.8)"
                    : "rgba(0, 120, 200, 0.9)";
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            animationId.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationId.current);
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
        };
    }, [initParticles]);

    return (
        <canvas
            ref={canvasRef}
            className="particle-canvas"
            style={{ opacity: 0.7 }}
        />
    );
}
