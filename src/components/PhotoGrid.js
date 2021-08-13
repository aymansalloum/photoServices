import './PhotoGrid.css';
export const PhotoGrid = () => {
    return(
    <div className="grid-container">
        <h1 className="title-head">Collections</h1>
        <div className="card-wrapper">
            <div className="cards-item">
                <div className="card-section">
                        <div className="card-image">
                            <img alt=""src="https://images.unsplash.com/photo-1628723513209-fb37f55b4cfb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8SnBnNktpZGwtSGt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="600" height="300"/>
                        </div>
                        <div className="card-content">
                          <h2 className="card-title">Wildlife Photography</h2>
                          <button className="card-btn">View More</button>
                    </div>
                </div>
            </div>
            <div className="cards-item">
                <div className="card-section">
                    <div className="card-image">
                        <img  alt="" src="https://images.unsplash.com/photo-1624177300186-156327808ccf?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eEh4WVRNSExnT2N8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="600" height="300"/>
                    </div>
                    <div className="card-content">
                        <h2 className="card-title">Action Photography</h2>
                        <button className="card-btn">View More</button>
                    </div>
                </div>
            </div>
            <div className="cards-item">
                <div className="card-section">
                    <div className="card-image">
                        <img  alt="" src="https://images.unsplash.com/photo-1484562794569-bb5754cf5a3b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="600" height="300"/>
                    </div>
                    <div className="card-content">
                        <h2 className="card-title"> Architectural Photography </h2>
                        <button className="card-btn">View More</button>
                    </div>
                </div>
            </div>
            <div className="cards-item">
                <div className="card-section">
                    <div className="card-image">
                        <img  alt="" src="https://images.unsplash.com/photo-1627359212200-7e700728d107?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600" width="600" height="300"/>
                    </div>
                    <div className="card-content">
                        <h2 className="card-title">Fashion Photography</h2>
                        <button className="card-btn">View More</button>
                    </div>
                </div>
            </div>
            <div className="cards-item">
                <div className="card-section">
                    <div className="card-image">
                        <img  alt="" src="https://images.unsplash.com/photo-1571328532572-cb7899a8be7e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600" width="600" height="300"/>
                    </div>
                    <div className="card-content">
                        <h2 className="card-title">Lanscape Photography</h2>
                        <button className="card-btn">View More</button>
                    </div>
                </div>
            </div>
            <div className="cards-item">
                <div className="card-section">
                    <div className="card-image">
                        <img  alt=""src="https://images.unsplash.com/photo-1628710911728-50807f4faca8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" width="600" height="300"/>
                    </div>
                    <div className="card-content">
                        <h2 className="card-title">Portrait Photography</h2>
                        <button className="card-btn">View More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}