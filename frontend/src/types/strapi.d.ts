// src/types/strapi.d.ts

export interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  url: string;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
}

export interface StrapiContentBlock {
  type: string;
  children: Array<{ type: string; text: string; bold?: boolean; italic?: boolean }>;
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: StrapiContentBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  coverImage?: StrapiMedia;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}