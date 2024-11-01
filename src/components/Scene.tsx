"use client";
import { CameraControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense, useEffect, useState } from "react";
import RotatingRing from "../components/RotatingRing";

export const Scene: FC = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if running on client
    if (typeof window !== "undefined") {
      const handleResize = () => setIsDesktop(window.innerWidth >= 768);

      handleResize(); // Initial check
      window.addEventListener("resize", handleResize); // Listen for resize

      return () => window.removeEventListener("resize", handleResize); // Cleanup
    }
  }, []);

  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas
        camera={{
          position: [isDesktop ? 100 : 50, 100, isDesktop ? 60 : 30],
          fov: isDesktop ? 5 : 40,
        }}
      >
        <Stars count={isDesktop ? 50000 : 10000} />{" "}
        {/* Adjust star count for mobile */}
        <ambientLight intensity={Math.PI / 2} />
        {/* Only render spotlights on desktop */}
        {isDesktop && (
          <>
            <spotLight
              position={[50, 50, 50]}
              angle={0.15}
              penumbra={1}
              color="#566EB1"
              intensity={Math.PI * 10}
            />
            <spotLight
              position={[-50, 50, 50]}
              angle={0.15}
              penumbra={1}
              color="#7E91C6"
              intensity={Math.PI * 10}
            />
            <spotLight
              position={[50, 50, -50]}
              angle={0.15}
              penumbra={1}
              color="#566EB1"
              intensity={Math.PI * 10}
            />
            <spotLight
              position={[-50, 50, -50]}
              angle={0.15}
              penumbra={1}
              color="#7E91C6"
              intensity={Math.PI * 10}
            />
          </>
        )}
        {/* Point Lights */}
        {isDesktop && (
          <>
            <pointLight
              position={[-15, 1, 15]}
              color="#7E91C6"
              decay={0.5}
              intensity={Math.PI * 8}
            />
            <pointLight
              position={[15, 1, 15]}
              color="#7E91C6"
              decay={0.5}
              intensity={Math.PI * 8}
            />
            <pointLight
              position={[-15, 1, -15]}
              color="#7E91C6"
              decay={0.5}
              intensity={Math.PI * 8}
            />
            <pointLight
              position={[15, 1, -15]}
              color="#7E91C6"
              decay={0.5}
              intensity={Math.PI * 8}
            />
          </>
        )}
        <RotatingRing />
        <CameraControls />
      </Canvas>
    </Suspense>
  );
};

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
