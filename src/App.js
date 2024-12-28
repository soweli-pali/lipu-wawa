import RoutesConfig from './RoutesConfig';
import { BrowserRouter } from 'react-router-dom';
import WebsiteHeader from './components/WebsiteHeader';

function App() {
  return (
    <BrowserRouter>
      <WebsiteHeader/>
      <RoutesConfig/>
    </BrowserRouter>
  );
}

export default App;
