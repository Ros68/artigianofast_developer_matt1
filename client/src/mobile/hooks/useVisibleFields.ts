import { usePlanFeatures } from "./usePlanFeatures";

/**
 * Hook to check if a field is visible for a given entity based on plan configuration.
 *
 * Usage:
 *   const { isFieldVisible } = useVisibleFields("clients");
 *   if (isFieldVisible("email")) { ... }
 */
export function useVisibleFields(entity: string) {
  const { planConfig, loadingPlan } = usePlanFeatures();

  const visibleFields: string[] | undefined =
    planConfig?.features?.visible_fields?.[entity];

  /**
   * Returns true if the field should be rendered.
   * If no visible_fields config exists for this entity, all fields are visible.
   */
  const isFieldVisible = (fieldId: string): boolean => {
    if (!visibleFields || visibleFields.length === 0) return true;
    return visibleFields.includes(fieldId);
  };

  return { isFieldVisible, loadingFields: loadingPlan };
}
