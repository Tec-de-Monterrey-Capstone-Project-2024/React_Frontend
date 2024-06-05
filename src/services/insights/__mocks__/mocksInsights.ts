import { IInsight } from "../../insights/types";

export const mockInsight: IInsight = {
  id: 1,
  metricCode: "null",
  connectItemId: "739",
  connectItemType: "INSTANCE",
  value: 672,
  occurredAt: "2024-05-29T20:22:04",
  status: "TO_DO",
  insightName: "Contact Center Average Handle Time Breach.",
  insightSummary: "Based on the provided KPI data, the insight summary is as follows:The Average Handle Time (AVG) metric for your contact center has breached the threshold of 100.73336453424493 seconds. This means that the average time taken to handle a customer request has exceeded the desired target value of 104.01997605360023 seconds.",
  insightDescription: "Based on the provided KPI data, the insight description is as follows:The average handle time for contacts in your contact center has breached the threshold of 100.73336453424493 seconds. This means that the average time it takes to handle a contact has exceeded the desired target value of 104.01997605360023 seconds.This could lead to longer wait times for customers and reduced customer satisfaction. It's important to investigate the root cause of this breach and take steps to improve the handle time",
  insightActions: "Based on the provided KPI data, the threshold breach for the AVG_HANDLE_TIME metric with ID 1 has occurred. Here are the recommended actions to address this threshold breach:1. Analyze the root cause of the increase in handle time to identify areas for improvement.2. Implement process optimizations or training programs to enhance agent productivity and reduce handle time.3. Consider implementing queue management strategies to reduce wait times and improve customer satisfaction.4. Monitor the KPI regularly to track progress and make necessary adjustments to the contact center operations.Would you like me to assist you with any",
  insightCategory: "BELOW_EXPECTATIONS",
  insightSeverity: "MEDIUM",
  insightRootCause: "The root cause of the threshold breach for the KPI Average Handle Time is the contact center's low staffing levels, which resulted in longer wait times for customers and increased handle time. This caused the KPI to fall below its target value of 104.01997605360023 seconds.Here are the details of the analysis:- KPI: Average Handle Time- Metric Description: Randomly generated metric description.- Has Positive Upside: Yes- Belongs to User: True- Belongs to Queue: True- Unit: Sec",
  insightImpact: "The threshold breach for the Average Handle Time (AVERAGE_HANDLE_TIME) KPI has occurred, indicating that the current value of 87.24740708337637 is below the minimum threshold value of 76.29452976968112. This breach has a significant impact on overall performance, as it means that the contact center is taking longer to handle customer inquiries than expected.Here are the insights generated based on the threshold breach:Impact on Customer Experience: Longer handle times can lead to frustrated customers",
  insightPrevention: "Based on the analysis of the KPI data, the contact center has breached the threshold for the average handle time metric. This indicates that the center is taking longer to handle customer inquiries than the desired target value of 104 seconds. To prevent future threshold breaches, here are some recommendations:1. Increase Agent Training: Providing comprehensive training to agents can help them improve their skills and efficiency in handling customer inquiries, reducing the average handle time.2. Implement Self-Service Options: Offering self-service options such as online FAQs, chatbots, or knowledge base articles can allow customers to find answers to common inquiries independently,"
};
