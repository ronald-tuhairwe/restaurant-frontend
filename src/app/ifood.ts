export interface Ifood {
  _id: string;
  name: string;
  category: string;
  price: number;
  information: string;
}

export interface Ifood2 {
 
  name: string;
  category: string;
  price: number;
  information: string;
}

export interface Iuser {
  // _id: string;
  last_name: string;
  first_name: string;
  email: string;
  password: string;
  // orders: Ifood[];
  // role: string;
}

export interface IuserLog {
  // _id: string;
  // last_name: string;
  // first_name: string;
  email: string;
  password: string;
  // orders: Ifood[];
  // role: string;
}


export interface Iuser2 {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  orders: Ifood[];
  role: string;
}


export const INITIAL_STATE = [
  // {
  //   _id: "63a8f64c8d465b4d5d136ed8",
  //   name: "lobster-bisque",
  //   category: "drinks",
  //   price: 6.95,
  //   information: "Lorem, deren, trataro, filede, nerada"
  // },

  // {
  //   _id: "63a8f64c8d465b4d5d136ed8",
  //   name: "bread-barrel",
  //   category: "drinks",
  //   price: 6.95,
  //   information: "Lorem, deren, trataro, filede, nerada",
  // },
  // {
  //   _id: "63a9fb2b961e9da0b7a50a03",
  //   name: "cake",
  //   category: "drinks",
  //   price: 7.95,
  //   information:"A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
  // },
  // {
  //   _id: "63a9fb60961e9da0b7a50a05",
  //   name: "caesar",
  //   category: "food",
  //   price: 8.95,
  //   information: "Lorem, deren, trataro, filede, neradar"
  // },
  // {
  //   _id: "63a9fb70961e9da0b7a50a07",
  //   name: "tuscan-grilled",
  //   category: "food",
  //   price: 9.95,
  //   information:
  //     "Grilled chicken with provolone, artichoke hearts, and roasted red pesto"
  // },

  // {
  //   _id: "63a9fb70961e9da0b7a50a07",
  //   name: "mozzarella",
  //   category: "food",
  //   price: 4.95,
  //   information: " Lorem, deren, trataro, filede, nerada"
  // },
  // {
  //   _id: "63a9fb70961e9da0b7a50a07",
  //   name: "greek-salad",
  //   category: "food",
  //   price: 9.95,
  //   information: "  Fresh spinach, crisp romaine, tomatoes, and Greek olives"
  // },

  // {
  //   _id: "63a9fb70961e9da0b7a50a07",
  //   name: "spinach-salad",
  //   category: "food",
  //   price: 9.95,
  //   information:
  //     "Fresh spinach with mushrooms, hard boiled egg, and warm bacon"
  // },

  // {
  //   _id: "63a9fb70961e9da0b7a50a07",
  //   name: "lobster-roll",
  //   category: "food",
  //   price: 12.95,
  //   information:
  //     "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll"
  // },
];
