import logo from './logo.svg';
import './App.css';
import { BasicTable } from './components/BasicTable';
import {FilteringTable} from './components/FilteringTable';
import {PaginationTable} from './components/PaginationTable'
import {SortingTable} from './components/SortingTable'
import { RowSelection } from './components/RowSelection';
import { ColumnFilter } from './components/ColumnFilter';

function App() {
  return (
    <div>
      <RowSelection/>
    </div>
  );
}

export default App;
