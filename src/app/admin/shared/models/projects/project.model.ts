export interface Project {
  _id: string;
  name: string;
  description: string;
  image?: string;
  repository?: string;
  link?: string;
  index?: number;
  modifiedAt: Date;
  createdAt: Date;
}
