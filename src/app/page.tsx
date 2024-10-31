import { Scene } from "@/components/Scene";
import { NetworkName } from "@autonomys/auto-utils";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-8 bg-black text-blue-900">
      <h1 className="text-4xl font-bold mb-4 blinking-text">
        AUTONOMYS NETWORK DATA OVERVIEW{" "}
      </h1>
      <h2 className="text-4xl font-bold blinking-text mb-4">
        {NetworkName.TAURUS}
      </h2>
      <Scene />
    </div>
  );
}

// import { Scene } from "@/components/Scene";
// import { NetworkName } from "@autonomys/auto-utils";
// export default async function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center w-full h-screen p-8 bg-black text-white">
//       <h1 className="text-4xl font-bold mb-4">
//         AUTONOMYS NETWORK DATA OVERVIEW{" "}
//       </h1>
//       <h2 className="text-4xl font-bold mb-4">{NetworkName.TAURUS}</h2>
//       <Scene />
//     </div>
//   );
// }
