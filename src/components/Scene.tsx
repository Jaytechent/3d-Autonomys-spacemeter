"use client";

import { CameraControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense, useEffect, useRef } from "react";
import RotatingRing from "../components/RotatingRing";

export const Scene: FC = () => {
  const cameraRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      if (cameraRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Update camera properties based on screen size
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();

        if (width < 768) {
          cameraRef.current.position.set(50, 50, 30); // Closer for mobile
          cameraRef.current.fov = 40; // Wider field of view for mobile
        } else {
          cameraRef.current.position.set(100, 100, 60); // Original position for desktop
          cameraRef.current.fov = 5; // Narrower field of view for desktop
        }
        cameraRef.current.updateProjectionMatrix();
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas
        camera={{
          position: [100, 100, 60],
          fov: 5,
          ref: cameraRef,
        }}
      >
        <Stars count={50000} />
        <ambientLight intensity={Math.PI / 1.5} />

        {/* Key Lights */}
        {[...Array(4)].map((_, index) => (
          <spotLight
            key={index}
            position={[index % 2 === 0 ? 50 : -50, 50, index < 2 ? 50 : -50]}
            angle={0.15}
            penumbra={1}
            color={index % 2 === 0 ? "#566EB1" : "#7E91C6"}
            intensity={Math.PI * 10}
          />
        ))}

        {/* Side Outside Ring Lights */}
        {[15, -15].map((x) => (
          <pointLight
            key={x}
            position={[x, 1, 15]}
            color="#7E91C6"
            decay={0.5}
            intensity={Math.PI * 8}
          />
        ))}
        {[15, -15].map((x) => (
          <pointLight
            key={-x}
            position={[x, 1, -15]}
            color="#7E91C6"
            decay={0.5}
            intensity={Math.PI * 8}
          />
        ))}

        {/* Rotating Ring Component */}
        <RotatingRing />

        <CameraControls />
      </Canvas>
    </Suspense>
  );
};

// // Scene.tsx
// "use client";

// import { CameraControls, Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { FC, Suspense } from "react";
// import RotatingRing from "../components/RotatingRing";

// export const Scene: FC = () => {
//   return (
//     <Suspense fallback={<span>loading...</span>}>
//       <Canvas
//         camera={{
//           position: [100, 100, 60],
//           fov: 5,
//         }}
//       >
//         <Stars count={50000} />
//         <ambientLight intensity={Math.PI / 1.5} />

//         {/* Key Lights */}
//         <spotLight
//           position={[50, 50, 50]}
//           angle={0.15}
//           penumbra={1}
//           color="#566EB1"
//           intensity={Math.PI * 10}
//         />
//         <spotLight
//           position={[-50, 50, 50]}
//           angle={0.15}
//           penumbra={1}
//           color="#7E91C6"
//           intensity={Math.PI * 10}
//         />
//         <spotLight
//           position={[50, 50, -50]}
//           angle={0.15}
//           penumbra={1}
//           color="#566EB1"
//           intensity={Math.PI * 10}
//         />
//         <spotLight
//           position={[-50, 50, -50]}
//           angle={0.15}
//           penumbra={1}
//           color="#7E91C6"
//           intensity={Math.PI * 10}
//         />

//         {/* Side Outside Ring Lights */}
//         <pointLight
//           position={[-15, 1, 15]}
//           color="#7E91C6"
//           decay={0.5}
//           intensity={Math.PI * 8}
//         />
//         <pointLight
//           position={[15, 1, 15]}
//           color="#7E91C6"
//           decay={0.5}
//           intensity={Math.PI * 8}
//         />
//         <pointLight
//           position={[-15, 1, -15]}
//           color="#7E91C6"
//           decay={0.5}
//           intensity={Math.PI * 8}
//         />
//         <pointLight
//           position={[15, 1, -15]}
//           color="#7E91C6"
//           decay={0.5}
//           intensity={Math.PI * 8}
//         />

//         {/* Rotating Ring Component */}
//         <RotatingRing />

//         <CameraControls />
//       </Canvas>
//     </Suspense>
//   );
// };
