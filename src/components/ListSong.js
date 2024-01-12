import { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";
function ListSong() {
  // const [DataSongs, handleSetSong] = useContext(Songs);
  const { DataSongs, song, handleSetSong } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (id) => {
    setIdSong(id);
    handleSetSong(id);
  };

  useEffect(() => {
    setIdSong(song.id);
  }, [song]);

  return (
    <div className="col-span-2 overflow-auto">
      <table className="table-auto w-full overflow-scroll">
        <thead className="text-white">
          <tr className="h-12">
            <td className="w-[10%]">#</td>
            <td className="text-left">Title</td>
            <td className="w-[10%]">Author</td>
            <td className="w-[10%]">
              <i className="fa fa-download"></i>
            </td>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`text-gray-500  bg-slate-800 h-12 hover:bg-slate-600 hover:text-cyan-300 cursor-pointer 
              ${song.id === idSong && "bg-slate-600 text-cyan-300"}`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td>{index + 1}</td>
              <td className="text-left ">{song.name}</td>
              <td>{song.author}</td>
              <td>
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSong;
