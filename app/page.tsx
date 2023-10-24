import IndexTitle from "./components/IndexTitle";
import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <div className="bg-offblack min-h-screen">
      <div className="flex items-center hero min-h-screen">
        {/* Left components */}
        <div className="flex flex-col items-start pl-80">
          <IndexTitle />
          <LoginButton />
        </div>
        {/* Future right component */}
      </div>
    </div>
  );
}
