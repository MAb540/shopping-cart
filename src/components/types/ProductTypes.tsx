export type product = {
  "Product ID": number;
  Name: string;
  "Product URL": string;
  Price: number;
  "Retail Price": number;
  "Thumbnail URL": string;
  Description: string;
  Color: string;
  "Rating Avg": number;
  "Rating Count": number;
  "Inventory Count": number;
};

export type productForCart = {
  "Product ID": number;
  Name: string;
  "Product URL": string;
  Price: number;
  Description: string;
  Color: string;
  Quantity: number;
};
