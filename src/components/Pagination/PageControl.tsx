import { PageControlPropsI } from "../../utils/interfaces";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

/**
 * @summary PageControl component
 * @description PageControl component is used to display the pagination control.  If error is not empty, the pagination control will not be displayed.  If error is empty, the pagination control will be displayed and will set the count to the number of pages.  Page change will call the pageChange function and pass the new page number and render new results.
 * @param count - number of pages
 * @param pageChange - function to handle page change
 * @param error - if error is empty, pagination will be rendered
 * @returns JSX.Element
 */

const PageControl = ({ count, pageChange, error }: PageControlPropsI) => {
  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
      {error.length === 0 && <Pagination count={count} onChange={pageChange} />}
    </Box>
  );
};

export default PageControl;
