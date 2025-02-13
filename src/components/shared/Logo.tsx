// Components
import Image from "@/components/ui/core/Image.tsx";

const Logo = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Image src="/icons/logo.svg" className="h-6" />
    </div>
  );
};

export default Logo;
