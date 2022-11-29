import { useEffect, useState } from "react";
import { FilterFormPropsI } from "../../utils/interfaces";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import styled from "./FilterForm.module.css";

/**
 * @summary FilterForm component
 * @description FilterForm component is used to filter albums by albumId.  It also displays an error message if the albumId is not found, then an alert is displayed. If returnWholeAlbum is true, the whole album is returned and the heading text is changed to "Showing All Albums"
 * @param albumId - albumId to filter images by
 * @param setAlbumId - function to set albumId
 * @param error - error message to display
 * @param alert - boolean to determine if alert should be displayed
 * @param closeAlert - function to close alert
 * @param returnWholeAlbum - boolean to determine if all image details should be returned
 * @param setReturnWholeAlbum - function to set returnWholeAlbum
 * @returns JSX.Element
 */

const FilterForm = ({
  albumId,
  setAlbumId,
  getAlbum,
  error,
  alert,
  closeAlert,
  returnWholeAlbum,
  setReturnWholeAlbum,
}: FilterFormPropsI) => {
  const [allHeading, setAllHeading] = useState<string>("Showing All Albums");

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    closeAlert(false);
  };

  useEffect(() => {
    if (error) {
      setAllHeading("");
    } else {
      setAllHeading("Showing All Albums");
    }
  }, [error]);

  return (
    <div className={styled.FilterForm}>
      <TextField
        id="standard-number"
        label="Album ID"
        type="number"
        helperText="Enter the album ID"
        onChange={(e) => {
          setAlbumId(e.target.value);
          getAlbum(parseInt(e.target.value));
        }}
        variant="outlined"
        value={albumId}
        InputLabelProps={{ shrink: true }}
      />
      {parseInt(albumId) > 0 && !error && !returnWholeAlbum ? (
        <>
          <h1>Showing results for Photo Album: {albumId}</h1>
          <Button
            variant="contained"
            onClick={() => {
              setReturnWholeAlbum(true);
              setAlbumId("");
            }}
          >
            Return Whole Album
          </Button>
        </>
      ) : (
        <h1>{allHeading}</h1>
      )}
      {error && (
        <Snackbar
          open={alert}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
            variant="filled"
          >
            {error}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default FilterForm;
