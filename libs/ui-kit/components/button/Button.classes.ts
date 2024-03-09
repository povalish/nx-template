import { cva } from 'class-variance-authority';

export const textClasses = cva('text-center font-bold');

export const buttonClasses = cva(
  `
  py-2 px-3 min-w-[100px]
  border-[3px] rounded-lg border-accent bg-accent text-white
  transition-all
  active:scale-[0.97]
  hover:scale-[1,02]
`,
);
