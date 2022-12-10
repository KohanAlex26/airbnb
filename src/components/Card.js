import star from '../images/star.png'

function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {/* <img src={`./images/"${props.img}`} className='card--image'></img> */}
            <img src={"./images/"+ props.coverImg} className='card--image'></img>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className='card--stats'>
                <img src={star} className='card--star'></img>
                <span>{props.stats.rating}&nbsp;</span>
                <span className="gray">({props.stats.reviewCount}) • {props.location}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><span>From ${props.price} /</span>  person</p>
        </div>
    )
}

export default Card