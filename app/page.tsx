import Image from "next/image";

import IndexTitle  from "./components/IndexTitle";
import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <div className="flex flex-col justify-center hero min-h-screen bg-offblack">
      <IndexTitle />
      <LoginButton />
    </div>
  );
}
