import './App.css';
import SearchBar from './components/mobile/SearchBar.jsx'
import NavigationIcon from './components/mobile/NavigationIcon.jsx'

import cabinsIcon from './resources/images/icons/cabin.jpg'

function App() {
  return (
    <>
      <SearchBar />
      <nav>
      <NavigationIcon icon={cabinsIcon} text="Cabins" />
      <NavigationIcon icon={cabinsIcon} text="Cabins" />
      <NavigationIcon icon={cabinsIcon} text="Cabins" />
      </nav>
    </>
  );
}

export default App;
