import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subheading?: string;
  backgroundImage?: string;
  className?: string;
}

const PageHeader = ({
  title,
  subheading,
  backgroundImage,
  className,
}: PageHeaderProps) => {
  return (
    <div
      className={cn(
        "relative w-full min-h-screen flex items-center justify-start text-white overflow-hidden",
        className
      )}
    >
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#133B5C]" />
        )}
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            {title}
          </h1>
          {subheading && (
            <p className="text-xl md:text-2xl text-white/90 font-light animate-rise-up">
              {subheading}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
