export type PerformanceCategory = 'critical' | 'unsatisfactory' | 'below_expectations' | 'exceeds_expectations' | 'outstanding' | 'pioneering';

export interface IPerformanceTagProps {
  severity: PerformanceCategory;
}
