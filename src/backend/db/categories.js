import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "action",
  },
  {
    _id: uuid(),
    categoryName: "romance",
  },
  {
    _id: uuid(),
    categoryName: "documentary",
  },
  {
    _id: uuid(),
    categoryName: "thriller",
  },
];
