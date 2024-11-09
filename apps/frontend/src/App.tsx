import {ReactElement} from "react";
import { RouterProvider } from 'react-router';
import {router} from "./routes";

function App(): ReactElement {
  return  <RouterProvider router={router} />;
}

export default App
