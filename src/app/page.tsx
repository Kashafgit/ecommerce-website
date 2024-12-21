import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-gray-100 px-4 lg:px-20 mx-4 lg:mx-10 rounded-lg py-10">
        <div className="text-center lg:text-left">
          <p className="bg-white text-3xl sm:text-4xl lg:text-6xl font-sans font-black w-fit mx-auto lg:mx-0">
            LET'S
          </p>
          <p className="text-3xl sm:text-4xl lg:text-6xl font-sans font-black">EXPLORE</p>
          <p className="bg-[#ebc744] text-3xl sm:text-4xl lg:text-6xl font-sans font-black w-fit mx-auto lg:mx-0">
            UNIQUE
          </p>
          <p className="text-3xl sm:text-4xl lg:text-6xl font-sans font-black">CLOTHES.</p>
          <p className="text-sm sm:text-base lg:text-lg mt-4">
            Live for influential and innovative fashion!
          </p>
          <button className="bg-black text-white px-4 py-2 mt-4 rounded-sm text-sm lg:text-base">
            <Link href="/">SHOP NOW</Link>
          </button>
        </div>
        <div className="pt-6 lg:pt-0">
          <Image
            src="/fashion-girl.png"
            alt="fashion img"
            width={600}
            height={600}
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>
      </div>

      {/* Brands Section */}
      <div className="bg-[#ebc744] px-4 lg:px-20 py-6 lg:py-9 my-6">
        <Image src="/Brands.png" alt="icons" width={1200} height={50} className="w-full" />
      </div>

      {/* New Arrivals */}
      <h1 className="text-xl sm:text-2xl px-4 lg:px-20 font-black font-sans">NEW ARRIVALS</h1>
      <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-20 py-10">
        {[
          { src: "/orange-girl.png", title: "Hoodies & Sweatshirt", text: "Explore Now" },
          { src: "/purple-girl.png", title: "Coats & Parkas", text: "Explore Now" },
          { src: "/blue-girl.png", title: "Tees & T-Shirt", text: "Explore Now" },
        ].map((item, index) => (
          <div key={index} className="mb-6 lg:mb-0 flex-1 text-center">
            <Image src={item.src} alt={item.title} width={100} height={200} className="w-full max-w-xs lg:max-w-sm mx-auto" />
            <h2 className="font-bold text-sm sm:text-base lg:text-lg mt-4">{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Payday Sale */}
      <div className="bg-[#edce49] flex flex-col lg:flex-row justify-center gap-6 lg:gap-20 items-center my-6 lg:my-10 px-4 lg:px-20 py-10">
        <Image src="/yellow-girl.jpg" alt="fashion girl" width={500} height={500} className="w-full max-w-xs lg:max-w-md" />
        <div className="text-center lg:text-left">
          <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black bg-white w-fit mx-auto lg:mx-0">PAYDAY</h3>
          <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black">SALE NOW</h3>
          <p className="text-sm sm:text-base lg:text-lg mt-4">
            Spend a minimum of $300 and get 30% off
            <br />
            Voucher code for your next purchase
          </p>
          <p className="font-extrabold mt-4">1 June - 10 June 2021</p>
          <p className="text-sm">*Terms & conditions apply</p>
          <button className="bg-black text-white px-4 py-2 mt-4 rounded-sm text-sm lg:text-base">
            <Link href="/">SHOP NOW</Link>
          </button>
        </div>
      </div>

      {/* Young's Favorite */}
      <h2 className="my-6 lg:my-10 px-4 lg:px-20 font-black font-sans text-xl sm:text-2xl">YOUNG'S FAVOURITE</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-6 px-4 lg:px-20">
        {[
          { src: "/Rectangle 50 (2).png", text: "Trending on Instagram" },
          { src: "/Rectangle 49 (2).png", text: "Trending on Instagram" },
        ].map((item, index) => (
          <div key={index} className="flex-1 text-center">
            <Image src={item.src} alt={item.text} width={600} height={400} className="w-full" />
            <p className="font-bold mt-4">{item.text}</p>
            <p>Explore now</p>
          </div>
        ))}
      </div>

      {/* Download App */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-20 px-4 lg:px-20 my-10">
        <div className="text-center lg:text-left">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            DOWNLOAD APP & <br /> GET THE VOUCHER!
          </p>
          <p className="text-sm sm:text-base lg:text-lg mt-4">
            Get 30% off for your first transaction using <br />
            the Rondovision mobile app.
          </p>
          <div className="flex gap-4 mt-6 justify-center lg:justify-start">
            <Image src="/Rectangle 18.png" alt="apple icon" width={100} height={40} />
            <Image src="/Rectangle 55.png" alt="google icon" width={100} height={40} />
          </div>
        </div>
        <Image src="/Mobile app.png" alt="mobile-app" width={300} height={400} className="w-full max-w-xs lg:max-w-md" />
      </div>

      {/* Newsletter */}
      <div className="bg-[#dfbf30] px-4 lg:px-20 py-10 text-white text-center">
        <p className="font-bold text-xl sm:text-2xl lg:text-3xl">JOIN THE SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMOS</p>
        <p className="text-sm sm:text-base lg:text-lg mt-4">Type your email below and join the young wild generation!</p>
        <div className="mt-6 flex justify-center">
          <div className="bg-white p-1 flex rounded-md">
            <input type="email" placeholder="Add your email here" className="bg-white p-2 outline-none" />
            <button className="bg-black text-white px-4 py-2 rounded-md">Send</button>
          </div>
        </div>
      </div>
    </main>
  );
}
