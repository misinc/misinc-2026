import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/components/ui/utils";

const sectionVariants = cva("w-full", {
  variants: {
    variant: {
      hero: "pt-16 pb-20 md:pt-24 md:pb-32",
      standard: "py-20 md:py-32",
      cta: "py-24 md:py-36",
      flush: "py-0",
    },
    tone: {
      default: "",
      muted: "bg-muted/30",
      warm: "bg-secondary/10",
    },
  },
  defaultVariants: {
    variant: "standard",
    tone: "default",
  },
});

type SectionProps = React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants>;

function Section({ className, variant, tone, ...props }: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ variant, tone, className }))}
      {...props}
    />
  );
}

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      narrow: "max-w-2xl px-6",
      medium: "max-w-5xl px-6",
      standard: "max-w-6xl px-5 md:px-8 lg:px-12",
      wide: "max-w-7xl px-6",
      full: "max-w-full px-6",
    },
  },
  defaultVariants: {
    size: "standard",
  },
});

type ContainerProps = React.ComponentProps<"div"> &
  VariantProps<typeof containerVariants>;

function Container({ className, size, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ size, className }))} {...props} />
  );
}

export { Section, Container };
