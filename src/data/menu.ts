export type MenuItem = {
    name: string;
    description: string;
    price: string;
    tag?: "Chef’s pick" | "Popular" | "Seasonal";
  };
  
  export const MENU: MenuItem[] = [
    {
      name: "Truffle Tagliatelle",
      description: "Handmade pasta, parmesan cream, black truffle aroma.",
      price: "$18",
      tag: "Chef’s pick",
    },
    {
      name: "Margherita Classica",
      description: "San Marzano tomato, fior di latte, basil, EVOO.",
      price: "$14",
      tag: "Popular",
    },
    {
      name: "Osso Buco",
      description: "Slow-braised veal shank, saffron risotto, gremolata.",
      price: "$28",
    },
    {
      name: "Burrata & Heirloom Tomato",
      description: "Seasonal tomatoes, burrata, pesto drizzle, sea salt.",
      price: "$16",
      tag: "Seasonal",
    },
    {
      name: "Tiramisu",
      description: "Espresso-soaked ladyfingers, mascarpone, cocoa dust.",
      price: "$9",
      tag: "Popular",
    },
    {
      name: "Affogato",
      description: "Vanilla gelato with a shot of hot espresso.",
      price: "$7",
    },
  ];