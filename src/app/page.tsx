import ThemeToggle from "@/components/ui/shared/theme-toggle";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return(
  <div className="p-5">
  <div className="w-368 flex justify-end">
    <ThemeToggle/>
 </div>
    <h1 className="text-blue-500 font-barlow">Welcome to my new ecommerce website</h1>
    <Button variant={"outline"}>Click Me</Button>

  </div>
  );
}
