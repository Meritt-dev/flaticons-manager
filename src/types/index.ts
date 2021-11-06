import { Request } from 'express';

export interface IUser {
  readonly email: string;
  readonly fullName: string;
  readonly _id: string;
}
export interface AuthedUser extends Request {
  readonly user: IUser;
}
export interface CustomRequest<T> extends Request {
  readonly body: T;
}
export interface AuthUserWithBody<T> extends Request {
  readonly body: T;
  readonly user: IUser;
}

export interface Png {
  128: string;
  512: string;
}

export interface Images {
  png: Png;
}

export interface RawData {
  id: number;
  type: number;
  priority: string;
  selection: number;
  premium: number;
  state: number;
  description: string;
  colors: string;
  color: number;
  style: number;
  stroke: number;
  detail: number;
  style_id: number;
  style_name: string;
  style_slug: string;
  style_class: string;
  family_id: number;
  family_name: string;
  family_slug: string;
  priority_style: string;
  slug: string;
  license: string;
  added: number;
  pack_id: number;
  pack_name: string;
  pack_slug: string;
  pack_priority: string;
  pack_items: number;
  designer_id: number;
  designer_slug: string;
  designer_name: string;
  designer_website: string;
  downloads: string;
  views: string;
  tags: string;
  category: string;
  item_equivalent: string;
  equivalents: number;
  tags_id: string;
  category_id: string;
  images: Images;
  editor_choice: boolean;
}
export interface Icon {
  id: string;
  url: string;
  description: string;
}
export interface Metadata {
  page: number;
  count: number;
  total: number;
}
