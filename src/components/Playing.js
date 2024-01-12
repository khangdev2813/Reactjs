import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";
function Playing() {
  const { song, handleSetSong } = useContext(Songs);

  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };

  const handleClickPrev = () => {
    handleSetSong(song.id === 0 ? song.id : song.id - 1);
  };

  return (
    <div className="bg-gray-900">
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
      />
    </div>
  );
}

export default Playing;
