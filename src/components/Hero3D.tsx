"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { clsx } from "clsx";

function ParticleGalaxy(props: any) {
    const ref = useRef<THREE.Points>(null!);

    const [positions, colors] = useMemo(() => {
        const count = 5000;
        const radius = 5; // Larger radius for full screen immersion
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();

        for (let i = 0; i < count; i++) {
            // Galaxy-like spiral distribution
            const r = Math.random() * radius;
            const spinAngle = r * 2.5;
            const branchAngle = (Math.floor(Math.random() * 3) * 2 * Math.PI) / 3;

            const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;
            const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;
            const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5;

            positions[i * 3] = Math.cos(branchAngle + spinAngle) * r + randomX;
            positions[i * 3 + 1] = randomY * 2; // Flatten slightly
            positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ;

            // Color mixed between Blue and Cyan
            const mixedColor = color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.5 + Math.random() * 0.3);
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }
        return [positions, colors];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Slow perpetual rotation
            ref.current.rotation.y += delta / 25;

            // Gentle mouse interaction (parallax)
            const { mouse } = state;
            ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, mouse.y * 0.05, 0.1);
            ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, mouse.x * 0.05, 0.1);
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6} // Reduced opacity for text readability
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export default function Hero3D(props: { className?: string }) {
    // Access store strictly for the className toggling - handled in page wrapper instead for better performance?
    // Actually, plan says "Update Hero3D". Let's simply accept className props if needed, 
    // OR better: connect to store inside here to toggle a post-processing effect OR CSS class.
    // Let's use CSS class for performance (Canvas backdrop-filter blur).

    return (
        <div
            className={clsx(
                "fixed inset-0 z-[-1] pointer-events-none bg-slate-950 transition-all duration-700",
                props.className
            )}
            id="neural-galaxy"
        >
            <Canvas camera={{ position: [0, 2, 5], fov: 60 }} gl={{ alpha: false, antialias: false }}>
                {/* Dark background is handled by CSS, but we can fog it for depth */}
                <fog attach="fog" args={['#020617', 3, 10]} />
                <ParticleGalaxy />
            </Canvas>
        </div>
    );
}
