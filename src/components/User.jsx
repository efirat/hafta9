function User({ad,tel}){
    return (
        <div className="col-12 col-lg-3">
            <div className="alert alert-info">
                <h2>{ad}</h2>
                <p>{tel}</p>
            </div>
        </div>
    )
}

export default User