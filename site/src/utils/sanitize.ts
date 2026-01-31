/**
 * Sanitiza el nombre del CV para exportar:
 * - Mantiene espacios, letras, números, guiones y guiones bajos
 * - Elimina caracteres especiales no permitidos en nombres de archivo
 * - Elimina espacios múltiples consecutivos
 */
export const sanitizeResumeName = (name: string): string => {
  return name
    .trim()
    .replace(/[^a-zA-Z0-9\s_\-áéíóúÁÉÍÓÚñÑüÜ]/g, "") // Solo caracteres permitidos (incluye espacios)
    .replace(/\s+/g, " ") // Múltiples espacios → uno solo
    .trim();
};
