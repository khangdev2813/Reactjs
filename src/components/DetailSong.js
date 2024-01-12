import { useContext } from "react";
import { Songs } from "../Context";

function DetailSong() {
  const { song } = useContext(Songs);

  return (
    <div className="col-span-1 text-start">
      <h2 className="text-cyan-500 font-bold">Now playing</h2>
      <h2 className="text-gray-400 text-2xl">Sing me to sleep</h2>
      <div className="w-[240px] m-auto mt-10">
        <img
          src={song.links.images[1].url}
          alt=""
          className="w-full rounded-full rotate-animation aspect-square"
        />
      </div>
      <div className="flex justify-center items-start mt-10 p-4">
        <img
          src={song.links.images[0].url}
          alt=""
          className="w-[70px] me-2 rounded-s aspect-square"
        />
        <div className="text-white">
          <p className="text-xl text-white font-bold">{song.name}</p>
          <p className="text-xs text-white">{song.author}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailSong;
