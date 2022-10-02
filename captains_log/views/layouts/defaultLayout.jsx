const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>
                    <nav id="top">
                        <a href={`/${this.props.group}`}>{this.props.group}</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;