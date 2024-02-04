const React = require('react')
const Def = require('../default')

function show (data) {
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
                No comments yet.
            </div>
            </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show

