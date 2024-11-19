export type Auth = {
  user: User;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export type Form = {
  id: number;
  name: string;
  slug: string;
  description: string;
};

export type Paginated<T> = {
  data: T[];
  current_page: number;
  first_page_url: string;
  from: number | null;
  lasT_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
  links: PaginationLinks[];
};

export type PaginationLinks = {
  active: boolean;
  label: string;
  url: string | null;
};
