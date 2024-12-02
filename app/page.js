import Main from "@/components/main";
import "./globals.css"

export default function Home() {
  return (
    <>
    <div className="md:hidden bg h-full ">
    <Main/>
    </div>
    <div className="max-md:hidden bg2 h-full ">
    <Main/>
    </div>
    </>

 
  );
}
