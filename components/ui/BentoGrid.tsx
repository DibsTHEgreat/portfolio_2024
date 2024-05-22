import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number,
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        minHeight: id === 1 ? '300px' : id === 2 ? '370px' : 'auto',
      }}
    >
        <div className="h-full flex flex-col">
            <div className={`w-full ${id === 2 ? 'absolute bottom-0' : 'h-full absolute'}`}>
                {img && (
                    <img
                        src={img}
                        alt={img}
                        className={cn(imgClassName, "object-cover object-center", {
                            "w-full h-auto": id === 2
                        })}
                    />
                )}
            </div>
        <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full flex flex-col px-5 p-5 lg:p-10")}>
          
        <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold py-2`}>
            {title}
          </div>

          <div className="font-sans font-extralight lg:text-base text-sm text-white">
            {description}
          </div>
        
        </div>
      </div>
    </div>
  );
};
