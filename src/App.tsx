import { Suspense } from 'react';
import { RouterProvider } from "react-router-dom";
import rootRouter from "./container/route/router.config";
import store from "./redux/store/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Suspense>
          <RouterProvider router={rootRouter} />
        </Suspense>
      </Provider>   
    </div>
  );
}

export default App;
