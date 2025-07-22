import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  highlightedText?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const SectionTitle = ({
  title,
  highlightedText,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionTitleProps) => {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2
        className={cn(
          "text-foreground text-3xl font-bold md:text-4xl",
          titleClassName
        )}
      >
        {title}
        {highlightedText && (
          <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            {" "}
            {highlightedText}{" "}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground mt-4 text-lg",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
