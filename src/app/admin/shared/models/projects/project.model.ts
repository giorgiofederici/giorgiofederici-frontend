export interface Project {
  _id: string;
  name: string;
  description: string;
  image?: string;
  repository?: string;
  modifiedAt: Date;
  createdAt: Date;
}
