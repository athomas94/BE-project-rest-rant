const React = require('react')
const Def = require('./default')

function home () {
    return ( 
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/chad-montano-MqT0asuoIcU-unsplash.jpg" alt="pizza on board" />
                  <div>
                    Photo by <a href="https://unsplash.com/@briewilly" alt="Chad Montano">Chad Montano</a> on <a href="https://unsplash.com/photos/pizza-on-chopping-board-MqT0asuoIcU" alt="Unsplash.com">UNSPLASH.com</a>
                  </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home