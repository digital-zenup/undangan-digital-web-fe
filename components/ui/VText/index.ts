import type { HTMLAttributes } from "vue";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-normal font-libre", {
  variants: {
    variant: {
      h1: "text-[3.056rem] leading-[66px]",
      h2: "text-[2.444rem] leading-[52.8px]",
      h3: "text-[1.944rem] leading-[42px]",
      h4: "text-[1.556rem] leading-[33.6px]",
      h5: "text-[1.278rem] leading-[29.9px] font-lato",
      body: "text-[1rem] font-lato",
      subbody: "text-[0.778rem] font-lato",
    },
    bold: {
      true: "font-bold",
      false: null,
    },
    italic: {
      true: "italic",
      false: null,
    },
  },
});

export interface Props {
  as: keyof HTMLElementTagNameMap;
  variant: TextVariants["variant"];
  class?: HTMLAttributes["class"];
  bold?: boolean;
  italic?: boolean;
}

type TextVariants = VariantProps<typeof textVariants>;
