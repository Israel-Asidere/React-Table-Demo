import logo from './logo.svg';
import './App.css';
import { BasicTable } from './components/BasicTable';
import {FilteringTable} from './components/FilteringTable';
import {PaginationTable} from './components/PaginationTable'
import {SortingTable} from './components/SortingTable'
import { RowSelection } from './components/RowSelection';

function App() {
  return (
    <div>
      <SortingTable/>
    </div>
  );
}

export default App;
