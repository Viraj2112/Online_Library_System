function DisplayBook(props) {
    return (
        <>
            <div className="w-40 border shadow-lg shadow-black transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-blue-500 rounded-xl border-gray-300 bg-white flex flex-col overflow-hidden">
                <img src={props.img} alt={props.title ? props.title : props.category} className="w-full h-[210px] object-cover"/>
                <div className="p-2">
                    <p className="capitalize text-center font-semibold text-gray-800 truncate">{props.title ? props.title : props.category}</p>
                </div>
            </div>
        </>
    );
}

export default DisplayBook;