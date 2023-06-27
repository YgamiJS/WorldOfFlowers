export interface IRoute {
  path: string;
  element: React.ReactNode;
}

export interface IUser {
  id: string | null;
  name: string | null;
  email: string | null;
  password: string | null;
  token: string | null;
  surname: string | null;
  login: string | null;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  old?: string | null;
  img: string;
  rating: number | undefined;
  slider: string[];
  country: string;
  color: string;
  type: string;
  collection?: boolean | null;
}

export interface IFavoriteProduct extends IProduct {
  totalPrice: number;
  count: number;
}

export interface IBoughtProduct extends IFavoriteProduct {
  date: number;
}

export type Inputs = {
  email: string;
};

export type BasketFrom = {
  email: string;
  location: string;
  card: string;
};

export type Input = {
  input: string;
};

export interface IOption {
  value: keyof Pick<
    IProduct,
    "title" | "description" | "price" | "color" | "country"
  >;
  name: string;
}

export interface IServise {
  limit: number;
  page: number;
  url: string;
}
