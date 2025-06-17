import store from './data/Store';
import { Provider } from 'react-redux';
import { Login } from "./Login";
import Sign from "./Sign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from '../home/Welcome';
import { Cars } from '../home/Cars';
import { Search } from '../home/Search';
import { AddType } from '../home/AddType';
import { TableQ } from '../home/TableQ';

export function Main() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Add" element={<AddType />} />
          <Route path="/TableQ" element={<TableQ />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/home" element={<Welcome />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/carSearch/:city" element={<Search />} />
        </Routes>
      </Router>
    </Provider>
  );
}
