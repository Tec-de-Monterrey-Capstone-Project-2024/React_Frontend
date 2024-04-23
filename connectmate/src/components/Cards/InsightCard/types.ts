export interface IInsightCard {
    /**
     * The title of the card
     */
    title:string;
    /**
     * Content description of the card
     */
    description:string;
    /**
     * Background color of the  card
     */
    color:string,
    /**
     * Border color of the  card
     */
    borderColor: string;
    /**
     * Decide wether to show the border or not
     */
    showBoxBorder: boolean;
}