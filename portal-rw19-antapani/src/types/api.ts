// src/types/api.ts
export interface IResponseEntity<T> {
  code: number;
  status: boolean;
  message: string;
  data?: T;
  meta?: {
    totalPages: number;
    totalData: number;
    totalDataPerPage: number;
    page: number;
    limit: number;
  };
}
