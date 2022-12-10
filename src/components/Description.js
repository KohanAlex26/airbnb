import photo from '../images/photo.png'
function Description(){
    return (
        <section className="description">
            <img src={photo} className="description--photo"></img>
            <h1 className="description--title">Online Experiences</h1>
            <p className="description--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Description