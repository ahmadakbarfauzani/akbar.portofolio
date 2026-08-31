export default function SocialContainer() {
  return (
    <div className="pt-16">
      <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-5 font-bold">
        Where you can find me
      </h3>
      <div className="flex gap-4">
        {/* Social media links */}
        <a href="https://www.instagram.com/akbarfzann" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-red-950 border border-neutral-800 hover:border-red-500">
          <span className="text-base font-bold">IG</span>
        </a>
        <a href="https://www.linkedin.com/in/ahmad-akbar-fauzani-a79359394/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-red-950 border border-neutral-800 hover:border-red-500">
          <span className="text-base font-bold">IN</span>
        </a>
        <a href="https://www.behance.net/ahmadfauzani1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-red-950 border border-neutral-800 hover:border-red-500">
          <span className="text-base font-bold">BE</span>
        </a>
      </div>
    </div>
  );
}
