import { notFound } from "next/navigation";

/**
 * Helper function to check if a resource exists and trigger a 404 if not
 * @param exists Boolean indicating if the resource exists
 * @param message Optional message for debugging
 */
export function checkResourceExists(exists: boolean, message?: string) {
  if (!exists) {
    console.log(`Resource not found: ${message || "Unknown resource"}`);
    notFound();
  }
}
