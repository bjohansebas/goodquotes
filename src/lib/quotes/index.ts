import { quotes } from "./data";

export const randomQuote = () =>
  quotes[Math.floor(Math.random() * quotes.length)];
