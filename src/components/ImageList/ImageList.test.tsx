import { render, screen } from "@testing-library/react";
import ImageList from "./ImageList";
import { mockAlbums } from "../../utils/mockData";

describe("ImageList component", () => {
  test(`renders title text of [1] picture 1 title when filtered property is true`, () => {
    render(<ImageList images={mockAlbums} filtered={true} loading={false} />);
    const pictureOneTitle = screen.getByText(`[1] picture 1`);
    expect(pictureOneTitle).toBeInTheDocument();
  });

  test(`renders title text of photo-album 1 [1] picture 1 title when filtered property is false`, () => {
    render(<ImageList images={mockAlbums} filtered={false} loading={false} />);
    const pictureOneTitle = screen.getByText(`photo-album 1 [1] picture 1`);
    expect(pictureOneTitle).toBeInTheDocument();
  });

  test(`renders no album text when loading property is true`, () => {
    render(<ImageList images={mockAlbums} filtered={true} loading={true} />);
    const loadingSkeleton = screen.getByTestId("loading-skeleton");
    expect(loadingSkeleton).toBeInTheDocument();
  });
});
