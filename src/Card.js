import './Card.css';
const Card = ()=>{
    return(
        <div class="imgholder">
            <div class="profile-sidebar">
                <img class="profile-image" src="https://images.unsplash.com/photo-1628336707625-bf8e9eb250dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=800" alt="" width="400" height="600" />
            </div>
            <div class="profile-main">
                <h2 class="profile-name">Rahul Thakuri</h2>
                <p class="profile-position">Photoghrapher</p>
                <p class="profile-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore cupiditate eveniet consequatur debitis distinctio nobis repellat odit dicta officia assumenda, illo hic eum doloremque voluptates quidem ea nemo voluptatibus explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nostrum accusamus iusto vel consequuntur, eaque quas sunt amet. Repellat harum alias numquam tenetur sed inventore voluptate itaque, ex porro obcaecati exercitationem a ab placeat corporis aut aperiam quam quae pariatur.</p>
            </div>
        </div>
    );
}
export default Card;