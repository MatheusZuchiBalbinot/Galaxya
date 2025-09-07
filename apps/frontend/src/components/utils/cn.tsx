import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind classes.
 * - clsx: allows conditional classes and array/object syntax.
 * - twMerge: resolves Tailwind conflicts (e.g. "p-2 p-4" → "p-4").
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
