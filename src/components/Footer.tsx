import AlertList from "./AlertList";

function Footer() {
  return (
        // <div className="fixed bottom-0 flex-none w-full h-20 bg-gradient-to-t from-gray-800 to-transparent"/>
        <div className="fixed bottom-0 flex justify-center overflow-visible w-full h-32">
          <AlertList/>
        </div>
  );
}

export default Footer; 
