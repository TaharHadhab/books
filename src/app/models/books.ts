
export interface Books {

  page : number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Array<Book>;
}

export interface Book {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}
