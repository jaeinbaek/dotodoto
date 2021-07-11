import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-noto antialiased bg-cover bg-center h-screen bg-gray-100 dark:bg-gray-800" >
    {/* <div className="font-noto antialiased bg-cover bg-center h-screen bg-gray-900	" style={{backgroundImage: "url(background.jpg)"}}> */}
      <div className="flex flex-col h-full overflow-scroll overflow-x-hidden">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </div>
  );
}

export default App; 
