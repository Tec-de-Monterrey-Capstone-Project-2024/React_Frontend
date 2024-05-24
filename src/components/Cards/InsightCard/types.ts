export interface IInsightCard {
    /**
     * The title of the card
     */
    title:string;
    /**
     * First line of the content description of the card.
     */
    description1:string;
    /**
     * Second line of the content description of the card.
     */
    description2?:string;
    /**
     * Background color of the  card
     */
    color:string;
    /**
     * Border color of the  card
     */
    borderColor: string;
    /**
     * Decide wether to show the border or not
     */
    showBoxBorder: boolean;
    /**
     * Function to use with the button
     */
    func: () => void;
}