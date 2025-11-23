import clsx, { ClassValue } from "clsx";

/**
 * Utility function for merging class names
 * Uses clsx for conditional class name handling
 *
 * @param inputs - Class names to merge
 * @returns Merged class name string
 *
 * @example
 * cn("base-class", condition && "conditional-class", "another-class")
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
