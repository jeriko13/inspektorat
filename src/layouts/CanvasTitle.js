export default function CanvasTitle({judul = '', deskripsi = ''}) {
    return (
        
        <div className=" w-full h-full bg-gray-800 pt-40 bg-contain bg-blend-overlay bg-cover" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/langit.jpg'})`,

        }}>
            <div className="w-11/12 mx-auto p-4 mt-6">
                <h1 className="text-white font-medium text-2xl my-1">{judul}</h1>
                <p className="text-white font-light">{deskripsi}</p>
            </div>
        </div>
    )
};
