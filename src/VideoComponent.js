import './Video.css';
const VideoComponent = () => {
    return(
        <div className="wrapper">
            <video autoplay= "true" loop muted class="wrapper__video">
            <source src="//vimeo-hp-videos.global.ssl.fastly.net/3/3.mp4" type="video/mp4"/>
            </video>
            <div className="textinput">
                <h1>Tell me your story</h1>
            </div>
        </div>
    );
}
export default VideoComponent;