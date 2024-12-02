import Main from "@/components/main";
import "./globals.css"

export default function Home() {
  return (
    <>
    <div className="md:hidden bg h-full overflow-clip">
    <Main/>
    </div>
    <div className="max-md:hidden bg2 h-full overflow-clip">
    <Main/>
    </div>
    </>

 
  );
}
