import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black p-10 flex flex-col md:flex-row md:justify-around gap-8 md:gap-0">
      <div className="w-full md:w-[500px] text-center md:text-left">
        <h1 className="text-white text-[20px] font-bold">FASHION</h1>
        <br />
        <p className="text-gray-500">
          Complete your style with awesome <br /> clothes with me
        </p>
        <br />
        <div className="flex justify-center md:justify-start space-x-5">
          <div className="bg-yellow-500 w-[40px] h-[40px] rounded-lg flex justify-center items-center">
            <Link href="https://www.facebook.com/profile.php?id=61553826722345" target="blank">
              <Facebook />
            </Link>
          </div>
          <div className="bg-yellow-500 w-[40px] h-[40px] rounded-lg flex justify-center items-center">
            <Link href="https://www.instagram.com/kashafakram9?igsh=YzljYTk1ODg3Zg==" target="_blank">
              <Instagram />
            </Link>
          </div>
          <div className="bg-yellow-500 w-[40px] h-[40px] rounded-lg flex justify-center items-center">
            <Link href="https://github.com/Kashafgit" target="_blank">
              <Github />
            </Link>
          </div>
          <div className="bg-yellow-500 w-[40px] h-[40px] rounded-lg flex justify-center items-center">
            <Link
              href="https://www.linkedin.com/in/kashaf-akram-b26b61277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-white">Company</h2>
        <br />
        <p className="text-gray-500">About</p>
        <br />
        <p className="text-gray-500">Contact us</p>
        <br />
        <p className="text-gray-500">Support</p>
        <br />
        <p className="text-gray-500">Career</p>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-white">Quick link</h2>
        <br />
        <p className="text-gray-500">Share Location</p>
        <br />
        <p className="text-gray-500">Orders Tracking</p>
        <br />
        <p className="text-gray-500">Size Guide</p>
        <br />
        <p className="text-gray-500">FAQs</p>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-white">Legal</h2>
        <br />
        <p className="text-gray-500">Terms & Conditions</p>
        <br />
        <p className="text-gray-500">Privacy policy</p>
      </div>
    </footer>
  );
}
