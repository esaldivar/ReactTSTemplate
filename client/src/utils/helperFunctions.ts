import { AlbumI } from "./interfaces";

export const sortAlbums = (albums: AlbumI[], from: number, to: number) => {
  const sortedAlbums = albums.slice(from, to);
  return sortedAlbums;
};
