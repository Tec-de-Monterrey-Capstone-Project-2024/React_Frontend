export interface IInsightDescription {
    /**
   * The initial title of the card: Reconfigure Virtual floor
   */
  title: string;

  /**
   * The space where the description of the subtitles will be displayed
   */
  message: string;

   /**
   * Subtitle: Situation
   */
  situationTitle: string;

   /**
   * Subtitle: Action
   */
  actionTitle: string;
  insightRootCause: string;
  insightImpact: string;
  insightPrevention: string;
  insightSeverity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" | "UNKNOWN";
  insightCategory: "CRITICAL" | "UNSATISFACTORY" | "BELOW_EXPECTATIONS" | "EXCEEDS_EXPECTATIONS" | "OUTSTANDING" | "PIONEERING" | "UNKNOWN";
}
