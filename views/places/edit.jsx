const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div className="row"> 
                    <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                        <input 
                            className="form-control"
                            id="name"
                            name="name"
                            value={data.place.name}
                            required />   
                    </div>
                    <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Picture</label>
                        <input 
                            className="form-control"
                            id="pic"
                            name="pic"
                            value={data.place.pic}
                             />   
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-sm-6">
                    <label htmlFor="name">Place City</label>
                        <input 
                            className="form-control"
                            id="city"
                            name="city"
                            value={data.place.city}
                             />   
                    </div>
                    <div className="form-group col-sm-6">
                    <label htmlFor="name">Place State</label>
                        <input 
                            className="form-control"
                            id="state"
                            name="state"
                            value={data.place.state}
                             />   
                    </div>
                </div>
                <div className="row"> 
                    <div className="form-group col-sm-6">
                    <label htmlFor="name">Cuisines</label>
                        <input 
                            className="form-control"
                            id="cuisines"
                            name="cuisines"
                            value={data.place.cuisines}
                            required />   
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="founded">Founded</label>
                        <input className="form-control"
                        id="founded"
                        name="founded"
                        valuel={data.place.founded}
                        />
                    </div>
                </div>
                <br />
                <button type="submit" className="btn btn-danger">
                        Submit Edits
                </button>
                <br />
                </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
