const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
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
                Not Rated
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
            <form method="POST" action={`/places/${data.id}/comment`}>
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
                            <input type="textArea" className="form-control" name="content"/>
                        </div>
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-sm-6">
                        <div className="form-group">
                            <label for="rating">Rating</label>
                            <input type="number" step="0.5" className="form-control" id="rating" name="rating" />
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

