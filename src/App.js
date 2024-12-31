import RoutesConfig from './RoutesConfig';
import { BrowserRouter } from 'react-router-dom';
import WebsiteHeader from './components/WebsiteHeader';
import BackgroundCanvas from './components/BackgroundCanvas';

function App() {
  return (
    <BrowserRouter>
      <BackgroundCanvas/>
      <WebsiteHeader/>
      <RoutesConfig/>
    </BrowserRouter>
  );
}

export default App;
