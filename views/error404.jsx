const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <img src="/images/nong-O_Xy25Dj7Mo-unsplash.jpg" alt="404 not found" />
                <div>Photo by <a href="https://unsplash.com/@californong?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nong</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-computer-screen-with-a-sign-on-it-O_Xy25Dj7Mo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></div>
                  <p>Oops, sorry! We can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404