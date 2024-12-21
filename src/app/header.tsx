import Image from "next/image"
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react";
  
export default function Header(){
    return(
        <>
        
        <div className="flex justify-between items-center px-5 py-3">
            <div className="flex items-center gap-2">
                <Image src={"/Vector.png"} width={30} height={30} alt = "logo"/>
                <h1 className="font-extrabold text-3xl font-sans">
                    FASHION
                </h1>

            </div>
            <div className="flex gap-5 items-center">
                <ul className="hidden md:block">
                    <li className="space-x-5">
                        <Link href={"/"}>CATALOGUE</Link>
                        <Link href={"/"}>FASHION</Link>
                        <Link href={"/"}>FAVOURITE</Link>
                        <Link href={"/"}>LIFESTYLE</Link>
                    </li>
                </ul>
                <button className="px-4 py-2 text-white font-bold rounded-lg bg-black">SIGN UP</button>
            </div>
            <Sheet>
  <SheetTrigger className="md:hidden"><Menu/></SheetTrigger>
  <SheetContent>
  <ul className="md:block">
                    <li className="flex flex-col space-y-5 font-bold">
                        <Link href={"/"}>CATALOGUE</Link>
                        <Link href={"/"}>FASHION</Link>
                        <Link href={"/"}>FAVOURITE</Link>
                        <Link href={"/"}>LIFESTYLE</Link>
                    </li>
                </ul>
                <button className="px-4 py-2 text-white font-bold rounded-lg bg-black">SIGN UP</button>
     
  </SheetContent>
</Sheet>

        </div>
        
        
        </>
    )
}