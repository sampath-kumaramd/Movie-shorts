export interface Billboard {
  id: String;
  label: String;
  imageUrl: String;
}

export interface Category {
  name: any;
  id: String;
  label: String;
  billboards: Billboard;
}

export interface Movie {
  id: String;
  title: String;
  description: String;
  imageUrl: String;
  bannerImageUrl: String;
  releaseDate: Date;
  director: String;
  genres: String;
  categoryId: string;
  isFeatured: Boolean;
  isArchived: Boolean;
}

