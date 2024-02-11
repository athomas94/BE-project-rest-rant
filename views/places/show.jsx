const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating =(
        <h3 className="inactive">
            Not rated yet
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length 
        rating = (
            <h3>
                {Math.round(averageRating)} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
        return (
            <div className="border">
                <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
                <h4>{c.content}</h4>
                <h3>
                    <stong>- {c.author}</stong>
                </h3>
                <h4>Rating: {c.stars}</h4>
            </div>
        )
        })
    }    
    return (
        <Def>
          <main>
            <div className="row">
                <div className="col-sm-6">
                    <h1>{data.place.name}</h1>
                    <br />
                    <img src={data.place.pic} alt={data.place.state} />
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
            <div className="col-sm-6">
            <div>
                <h1>Description</h1>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
            </div>
            <div>
            <h2>Rating</h2>
                {rating}
                <br />
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <br />
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </div>
            <div>
                <h2>Comments</h2>
                {comments}
            </div>
            </div>
            <hr />
            <h2>Want to add your own comment?</h2>
            <form method="POST" action={`/places/${data.place.id}/comment`}>
                <div className="row"> 
                    <div className="form-group col-sm-6">
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input className="form-control" id="author" name="author" required />
                        </div>
                    </div>
                    <div className="form-group col-sm-6">
                        <div className="form-group">
                            <label htmlFor="content">Comments</label>
                            <textarea className="form-control" id="content" name="content"/>
                        </div>
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-sm-6">
                        <div className="form-group">
                            <label for="stars">Rating</label>
                            <input type="number" step="0.5" min="1" max="5" className="form-control" id="stars" name="stars" />
                        </div>
                    </div>
                    <div className="form-group col-sm-6">
                        <div className="form-group">
                            <label htmlFor="rant">Rant?</label>
                            <input 
                            type="checkbox"  
                            name="rant" 
                            defaultChecked
                            />
                        </div>
                    </div>
                </div>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Create Comment" />
                </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show

