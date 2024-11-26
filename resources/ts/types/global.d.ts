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
  fields: FormField[];
  url: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  starts_at: Date | null;
  ends_at: Date | null;
  password_protected: boolean;
  password: string | null;
};

export type FormField = {
  id: number;
  form_id: number;
  label: string;
  type: string;
  options: string[];
  required: boolean;
  order: number;
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
