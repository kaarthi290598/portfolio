import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const animateItems = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  py-10 gap-5 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          variants={animateItems}
          key={item?.title}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative group  block p-2 h-full w-full"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-400 to-violet-200  dark:bg-slate-800/[0.8] block  rounded-3xl "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardDescription> {item.icon}</CardDescription>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-zinc-50 border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 text-black shadow-xl ",
        className
      )}
    >
      <div className="relative z-50  ">
        <div className=" p-1 md:p-2 flex md:flex-col  items-center  justify-center gap-4 ">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn(" font-bold tracking-wide w-full ", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "  tracking-wide leading-relaxed text-sm w-full",
        className
      )}
    >
      {children}
    </p>
  );
};
