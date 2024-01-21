const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                <div className="container">
                    {html.children}
                </div>
            </body>
        </html>
    )
}

module.exports = Def