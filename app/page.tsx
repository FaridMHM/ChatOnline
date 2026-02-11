"use client";

export default function Home() {
  return (
    <div className="w-full h-screen p-10  bg-white flex items-center justify-center">
      <main className=" w-full sm:w-[60%] xl:w-[60%]  md:w-[60%]  h-dvh flex flex-col items-center justify-evenly">
        <div className="w-full  flex flex-col gap-2 items-center justify-between [&>button]:cursor-pointer  [&>button]:hover:bg-white/40 [&>button]:active:bg-white/40 [&>button]:hover:text-black [&>button]:active:text-black">
          <button className="w-50 transition-all bg-black text-white h-12 rounded-xl">
            Sgin Up
          </button>
          <button className="w-50 transition-all bg-black text-white h-12 rounded-xl">
            Login
          </button>
        </div>
        <div className="w-full h-80 p-2 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          mollitia magnam tempore iure? Veniam delectus, autem maxime eos
          deleniti eligendi velit, ab ratione accusamus, iure reprehenderit
          quisquam veritatis quo? Nam.
        </div>
      </main>
    </div>
  );
}
