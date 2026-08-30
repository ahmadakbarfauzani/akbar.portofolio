import Image from "next/image";

export default function PrimaryProject() {
  return (
    <div className="mb-6 md:mb-10 group cursor-pointer relative overflow-hidden rounded-2xl">
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src="/mock3.jpg"
          alt="Valorant Themed Layout"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-4 flex justify-between items-center px-2">
        <p className="text-neutral-300 text-sm tracking-wide uppercase font-bold">Esport Valorant</p>
        <p className="text-neutral-500 text-xs tracking-widest uppercase">Editorial Design</p>
      </div>
    </div>
  );
}
