import { Suspense } from 'react';
import { RouterProvider } from "react-router-dom";
import rootRouter from "./components/route/router.config";

function App() {
  return (
    <div className="App">
      <Suspense>
        <RouterProvider router={rootRouter} />
      </Suspense>
    </div>
  );
}

export default App;
