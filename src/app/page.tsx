import { Scene } from "@/components/Scene";
import { NetworkName } from "@autonomys/auto-utils";
import Marquee from "react-fast-marquee";
import Footer from "./Footer";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-8 bg-black text-blue-900">
      <h1 className="text-4xl font-bold mb-4 ">
        AUTONOMYS NETWORK DATA OVERVIEW{" "}
      </h1>
      <Marquee>
        <p className="text-transparent  text-4xl font-bold bg-gradient-to-tr from-red-900 to-blue-900 bg-clip-text">
          {NetworkName.TAURUS}
        </p>
      </Marquee>
      <Scene />
      <Footer />
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
