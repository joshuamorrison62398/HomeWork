const React = require('react');
const DefaultLayout = require('../views/layouts/DefaultLayout')

class Show extends React.Component {
    render() {
        // object destructuring
        const { log } = this.props;

        return (
            <DefaultLayout title={`${log.title}`} group="Logs">
            <div>
                <h1>Show Entry</h1>

                <p className="log-area">
                    <p className="show-entry">
                        <span className="label-color">Title: </span> 
                        <span className="title-style">{log.title}</span>
                    </p>
                    <p className="show-entry">
                        <span className="label-color">Entry: </span>
                        <span className="entry-style">{log.entry}</span>
                    </p>
                    <p className="show-entry">
                        <span className="entry-style">
                        {log.shipIsBroken ? "The ship is not operational" : "The ship is operational"}.
                        </span>
                        
                    </p>
                </p>
                
                <nav>
                    <a href="/logs" className="back-link">Back</a>
                </nav>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;