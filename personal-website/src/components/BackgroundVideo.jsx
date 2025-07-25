import "../BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="video-background-container">
      <video autoPlay muted loop playsInline className="video-background">
        <source src={`${import.meta.env.BASE_URL}video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
