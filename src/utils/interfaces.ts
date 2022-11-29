export interface AlbumI {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// export interface PaginationI {
//   count: number;
//   from: number;
//   to: number;
// }

// export interface FilterFormPropsI {
//   albumId: string;
//   setAlbumId: (albumId: string) => void;
//   getAlbum: (albumId: number) => void;
//   error?: string;
//   alert?: boolean;
//   closeAlert: (set: boolean) => void;
//   returnWholeAlbum: boolean;
//   setReturnWholeAlbum: (set: boolean) => void;
// }

// export interface ImageListPropsI {
//   images: AlbumI[];
//   filtered: boolean;
//   loading: boolean;
// }

// export interface PageControlPropsI {
//   count: number;
//   pageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
//   error: string;
// }
