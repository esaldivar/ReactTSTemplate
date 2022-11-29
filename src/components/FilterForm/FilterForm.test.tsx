import { render, screen } from "@testing-library/react";
import FilterForm from "./FilterForm";

//test count, page Change, error
//{ albumId, setAlbumId, getAlbum, error, alert, closeAlert, setReturnWholeAlbum

describe("FilterForm component", () => {
  test("renders label for filter textfield", () => {
    render(
      <FilterForm
        albumId={"1"}
        setAlbumId={() => {
          console.log("set");
        }}
        getAlbum={() => {
          console.log("set");
        }}
        closeAlert={() => {
          console.log("set");
        }}
        returnWholeAlbum={false}
        setReturnWholeAlbum={() => {
          console.log("set");
        }}
      />
    );
    const albumLabel = screen.getByLabelText(/Album ID/i);
    expect(albumLabel).toBeInTheDocument();
  });

  test("renders helper text for the filter textfield", () => {
    render(
      <FilterForm
        albumId={"1"}
        setAlbumId={() => {
          console.log("set");
        }}
        getAlbum={() => {
          console.log("set");
        }}
        closeAlert={() => {
          console.log("set");
        }}
        returnWholeAlbum={false}
        setReturnWholeAlbum={() => {
          console.log("set");
        }}
      />
    );
    const helperText = screen.getByText(/Enter the album ID/i);
    expect(helperText).toBeInTheDocument();
  });

  test("renders title text 'Showing results for Photo Album: 1' when albumId property is 1", () => {
    render(
      <FilterForm
        albumId={"1"}
        setAlbumId={() => {
          console.log("set");
        }}
        getAlbum={() => {
          console.log("set");
        }}
        closeAlert={() => {
          console.log("set");
        }}
        returnWholeAlbum={false}
        setReturnWholeAlbum={() => {
          console.log("set");
        }}
      />
    );
    const specificAlbumTitle = screen.getByText(
      /Showing results for Photo Album: 1/i
    );
    expect(specificAlbumTitle).toBeInTheDocument();
  });

  test("renders title text 'Showing All Albums' when all return whole album property is present", () => {
    render(
      <FilterForm
        albumId={"1"}
        setAlbumId={() => {
          console.log("set");
        }}
        getAlbum={() => {
          console.log("set");
        }}
        closeAlert={() => {
          console.log("set");
        }}
        returnWholeAlbum={true}
        setReturnWholeAlbum={() => {
          console.log("set");
        }}
      />
    );
    const allAlbumTitle = screen.getByText(/Showing All Albums/i);
    expect(allAlbumTitle).toBeInTheDocument();
  });

  test("renders return whole album button when return whole album property is false", () => {
    render(
      <FilterForm
        albumId={"1"}
        setAlbumId={() => {
          console.log("set");
        }}
        getAlbum={() => {
          console.log("set");
        }}
        closeAlert={() => {
          console.log("set");
        }}
        returnWholeAlbum={false}
        setReturnWholeAlbum={() => {
          console.log("set");
        }}
      />
    );
    const returnButton = screen.getByRole("button", {
      name: /Return Whole Album/i,
    });
    expect(returnButton).toBeInTheDocument();
  });
});
