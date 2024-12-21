import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-5 py-3 bg-white shadow-md">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image src={"/Vector.png"} width={30} height={30} alt="logo" />
          <h1 className="font-extrabold text-2xl sm:text-3xl font-sans">FASHION</h1>
        </div>

        {/* Navigation Links for Large Screens */}
        <nav className="hidden md:flex gap-5 items-center">
          <ul className="flex space-x-5 font-medium">
            <li>
              <Link href={"/"}>CATALOGUE</Link>
            </li>
            <li>
              <Link href={"/"}>FASHION</Link>
            </li>
            <li>
              <Link href={"/"}>FAVOURITE</Link>
            </li>
            <li>
              <Link href={"/"}>LIFESTYLE</Link>
            </li>
          </ul>
          <button className="px-4 py-2 text-white font-bold rounded-lg bg-black">
            SIGN UP
          </button>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu size={28} />
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-100 p-6">
            <ul className="flex flex-col space-y-5 font-bold">
              <li>
                <Link href={"/"}>CATALOGUE</Link>
              </li>
              <li>
                <Link href={"/"}>FASHION</Link>
              </li>
              <li>
                <Link href={"/"}>FAVOURITE</Link>
              </li>
              <li>
                <Link href={"/"}>LIFESTYLE</Link>
              </li>
            </ul>
            <button className="mt-6 px-4 py-2 text-white font-bold rounded-lg bg-black">
              SIGN UP
            </button>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
