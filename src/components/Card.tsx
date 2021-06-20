export type CardProps = {
    title: string;
    content: string;
    user: string;
    createdAt?: string;
}

function Card({ title, content, user }: CardProps) {
  return (
        <div className="h-12 flex flex-row bg-white mb-2 rounded shadow-lg transform hover:bg-gray-100">
          {/* CheckBox Area */}
          <div className="w-1/12 flex justify-center items-center">
            <input type="checkbox" className="checked:bg-red-600 checked:border-transparent"/>
          </div>
          {/* Data Area */}
          <div className="w-10/12 flex flex-col py-1">
            <div className="text-xs text-gray-500">
              {user}
            </div>
            <div className="font-bold">
              {title}
            </div>
          </div>
          {/* Detail Button */}
          <div className="w-1/12 flex justify-center items-center">
            <img className="h-2" src="detail.png"/>
          </div>
        </div>      
  );
}

export default Card; 
