import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import reducer from './redux/combine-reducer.ts';
import Portfolio from './containers/portfolio';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer,
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
});


const container: any = document.getElementById('component');
const root = createRoot(container);
const element =   <Provider store={store}>
  <Portfolio />
</Provider>

root.render(element);
