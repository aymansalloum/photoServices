import './Card.css';
const Card = ()=>{
    return(
        <Card className= "container">
            <div className="img-control">
                <img className="img-panel" src="https://images.unsplash.com/photo-1628336707625-bf8e9eb250dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=800" alt="" width="500" height="700"/>
            </div>
            <div className= "text-control">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vitae dignissimos eligendi fuga quisquam harum ut? Laborum praesentium sint deserunt harum obcaecati ea a excepturi totam dolor dignissimos nulla, labore quibusdam nam vel quidem ut quisquam rem delectus ipsa? Nisi eius iste et eaque, beatae vero necessitatibus rem error repellat?
            </p>
            </div>
            <div className="btn">
                <button href="#">Read More</button>
            </div>
        </Card>
    );
}
export default Card;