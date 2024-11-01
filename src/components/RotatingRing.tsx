// import { useFrame } from "@react-three/fiber";
// import { FC, Suspense, useRef } from "react";
// import { Group } from "three";
// import { Cube } from "./Cube";
// import { Ring } from "./Ring";
// import { RingCompressed } from "./RingCompressed";

// const RotatingRing: FC = () => {
//   const ringRef = useRef<Group>(null);

//   // Apply rotation to the ring group on each frame
//   useFrame(() => {
//     if (ringRef.current) {
//       ringRef.current.rotation.y += 0.0000000001; // Adjust rotation speed as needed
//     }
//   });

//   return (
//     <group ref={ringRef} rotation={[0, 1, 0]}>
//       {/* Main Ring Model */}
//       <Suspense fallback={<RingCompressed />}>
//         <Ring />
//       </Suspense>

//       {/* Four instances of RingCompressed around the ring */}
//       <Suspense fallback={null}>
//         {/* <group position={[5, 0, 0]}>
//           <RingCompressed />
//         </group> */}
//         {/* <group position={[10, 0, 0]}>
//           <RingCompressed />
//         </group>
//         <group position={[20, 0, 0]}>
//           <RingCompressed />
//         </group> */}
//         <group position={[0, 0, -5]}>
//           <RingCompressed />
//         </group>
//       </Suspense>

//       {/* Lighting for the ring */}
//       <spotLight
//         position={[0, 15, 0]}
//         angle={25}
//         color="#566EB1"
//         intensity={Math.PI * 100}
//       />
//       <spotLight
//         position={[0, -15, 0]}
//         angle={1}
//         color="#566EB1"
//         intensity={Math.PI * 100}
//       />
//       {/* Additional lighting as needed */}
//       {/* ... other lights here ... */}

//       {/* The Cube */}
//       <Cube />
//     </group>
//   );
// };

// export default RotatingRing;

// RotatingRing.tsx
import { useFrame } from "@react-three/fiber";
import { FC, Suspense, useRef } from "react";
import { Group } from "three";
import { Cube } from "./Cube";
import { Ring } from "./Ring";
import { RingCompressed } from "./RingCompressed";

const RotatingRing: FC = () => {
  const ringRef = useRef<Group>(null);

  // Apply rotation to the ring group on each frame
  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.y += 0.01; // Adjust rotation speed as needed
    }
  });

  return (
    <>
      <group ref={ringRef} rotation={[3, 3, 3]}>
        {/* Main Ring Model */}
        <Suspense fallback={<RingCompressed />}>
          <Ring />
        </Suspense>

        {/* Lighting for the ring */}
        <spotLight
          position={[0, 15, 0]}
          angle={25}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[0, -15, 0]}
          angle={1}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[0, -10, 2.5]}
          angle={1}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[0, -7.5, 2.5]}
          angle={1}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[0, -5, 5]}
          angle={1}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[0, -2.5, 7.5]}
          angle={1}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[0, 2.5, 7.5]}
          angle={1}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[0, 5, 5]}
          angle={1}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[0, 7.5, 2.5]}
          angle={1}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[0, 10, 2.5]}
          angle={1}
          color="#566EB1"
          intensity={Math.PI * 100}
        />

        {/* Lights inside the ring */}
        <spotLight
          position={[0, 0, 7.5]}
          angle={0.5}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[0, 0, -7.5]}
          angle={2}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[-7.5, 0, 0]}
          angle={2}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
        <spotLight
          position={[7.5, 0, 0]}
          angle={2}
          color="#566EB1"
          intensity={Math.PI * 100}
        />
      </group>
      <Cube />
    </>
  );
};

export default RotatingRing;
