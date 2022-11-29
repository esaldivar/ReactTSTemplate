import styled from "./App.module.scss";

/**
 * @summary App component
 * @description App component is the parent component of the application. It is responsible for fetching the data from the API and passing it to the child components.
 * @returns JSX.Element
 */

const App = () => {
  return (
    <div className={styled.App}>
      <h1>React Template</h1>
      <h2>Other Title</h2>
    </div>
  );
};

export default App;
