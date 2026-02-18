import React from "react";
import { useVisibleFields } from "../hooks/useVisibleFields";

type Props = {
  entity: string;
  field: string;
  children: React.ReactNode;
};

/**
 * Conditionally renders a form field based on plan visible_fields configuration.
 *
 * Usage:
 *   <FieldGate entity="clients" field="email">
 *     <Input ... />
 *   </FieldGate>
 */
export default function FieldGate({ entity, field, children }: Props) {
  const { isFieldVisible, loadingFields } = useVisibleFields(entity);
  if (loadingFields) return null;
  return isFieldVisible(field) ? <>{children}</> : null;
}
