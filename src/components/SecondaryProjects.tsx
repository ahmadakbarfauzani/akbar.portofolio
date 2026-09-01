import Image from "next/image";
import Link from "next/link";

export default function SecondaryProjects() {
  const projects = [
    { id: 1, src: "/ge.jpeg", alt: "Brand Identity", category: "Branding", href: "/brand-identity" },
    { id: 2, src: "/packa.png", alt: "Product Design", category: "Product Design", href: "/product-design" },
    { id: 3, src: "/wo.jpg", alt: "UI/UX Layout", category: "UI/UX", href: "/ui-ux-design" },
  ];

  return (
    <div className="mb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0">
        {projects.map((project) => (
          <Link href={project.href} key={project.id} className="w-full group cursor-pointer block">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl mb-4">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-200 group-hover:text-white transition-colors">{project.alt}</h4>
              <span className="text-xs uppercase tracking-widest text-neutral-500">{project.category}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
