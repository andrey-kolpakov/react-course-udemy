function Person({firstName, lastName, email, image}) {

    return (
        <div className="person-card">
            <h2 className="person-card__name">{firstName} {lastName}</h2>
            <div className="person-card__email">{email}</div>
            <img src={image} alt={firstName} />
        </div>
    )
}

export default Person
