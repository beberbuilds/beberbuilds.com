import Image from "next/image";

export default function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="beberbuilds logo"
      width={40}
      height={40}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
