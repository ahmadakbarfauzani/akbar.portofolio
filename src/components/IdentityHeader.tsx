import { ChevronDown } from "lucide-react";

export default function IdentityHeader() {
  return (
    <div className="flex flex-col gap-1 mb-8">
      <h1 className="text-xl font-bold tracking-tight flex items-center gap-2 uppercase">
        Ahmad Akbar Fauzani
        <ChevronDown className="w-5 h-5 text-neutral-400 cursor-pointer hover:text-white transition-colors" />
      </h1>
      <div className="text-neutral-400 text-sm tracking-wide">
        <p>hello@ahmadfauzani.com</p>
        <p>+62 812 3456 7890</p>
      </div>
    </div>
  );
}
