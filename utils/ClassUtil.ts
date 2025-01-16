import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using `clsx` and merges them with Tailwind's `twMerge`.
 *
 * @param inputs - An array of class values to be combined and merged.
 * @returns A string of combined class names.
 */

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};
