const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <div>
                <h2>Description</h2>
                {data.place.city}, {data.place.state}
                {data.place.cuisine}
            </div>
            <div>
            <h2>Rating</h2>
                Not Rated
                <br />
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
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
          </main>
        </Def>
    )
}

module.exports = show

