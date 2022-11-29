import { useEffect, useState } from "react";
import { AlbumI, PaginationI } from "./utils/interfaces";
import { sortAlbums } from "./utils/helperFunctions";
import axios from "axios";
import FilterForm from "./components/FilterForm/FilterForm";
import ImageList from "./components/ImageList/ImageList";
import styled from "./App.module.css";
import PageControl from "./components/Pagination/PageControl";

/**
 * @summary App component
 * @description App component is the parent component of the application. It is responsible for fetching the data from the API and passing it to the child components.
 * @returns JSX.Element
 */

const pageSize = 10;

const App = () => {
  const [album, setAlbum] = useState<AlbumI[]>([]);
  const [albumId, setAlbumId] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<boolean>(false);
  const [returnWholeAlbum, setReturnWholeAlbum] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<PaginationI>({
    count: 0,
    from: 0,
    to: pageSize,
  });

  const fetchAllAlbums = (): void => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => {
        if (res.data.length === 0) {
          setAlbum([]);
          setError("Unable to get albums. Please try again later.");
          setAlert(true);
          setLoading(false);
        } else {
          setAlert(false);
          setPagination({ ...pagination, count: res.data.length });
          const currentPageAlbums = sortAlbums(
            res.data,
            pagination.from,
            pagination.to
          );
          setAlbum(currentPageAlbums);
          setError("");
          setLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Fetch specific album by album id
  const fetchAlbum = (albumId: number): void => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((res) => {
        if (res.data.length === 0) {
          setAlbum([]);
          setError("No album found. Please try another album id.");
          setAlert(true);
          setLoading(false);
        } else {
          setAlert(false);
          setPagination({ ...pagination, count: res.data.length });
          const currentPageAlbums = sortAlbums(
            res.data,
            pagination.from,
            pagination.to
          );
          setAlbum(currentPageAlbums);
          setError("");
          setFiltered(true);
          setReturnWholeAlbum(false);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  // On initial page load, all albums are fetched.
  useEffect(() => {
    fetchAllAlbums();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (returnWholeAlbum) {
      fetchAllAlbums();
      setFiltered(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [returnWholeAlbum]);

  useEffect(() => {
    if (filtered) {
      fetchAlbum(parseInt(albumId));
    } else {
      fetchAllAlbums();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.to, pagination.from]);

  return (
    <div className={styled.App}>
      <div>
        <h1>Get Album Details</h1>
      </div>
      <FilterForm
        albumId={albumId}
        setAlbumId={setAlbumId}
        getAlbum={fetchAlbum}
        error={error}
        alert={alert}
        closeAlert={setAlert}
        returnWholeAlbum={returnWholeAlbum}
        setReturnWholeAlbum={setReturnWholeAlbum}
      />
      <ImageList images={album} filtered={filtered} loading={loading} />
      <PageControl
        count={Math.ceil(pagination.count / pageSize)}
        pageChange={handlePageChange}
        error={error}
      />
    </div>
  );
};

export default App;
