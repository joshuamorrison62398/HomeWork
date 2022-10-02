const React = require('react');
const DefaultLayout = require('../views/layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New Entry" group="Logs">
            <h1>Create a new log entry</h1>
                <div className="label-color">
                <form action="/logs" method="POST">
                    <label htmlFor='title'>Title: </label>
                    <input type="text" id="title" name="title"/><br/><br/>

                    <label htmlFor='entry'>Entry: </label>
                    <textarea id="entry" name="entry"></textarea><br/><br/>

                    <label htmlFor='title'>Ship Is Broken?: </label>
                    <input type="checkbox" id="shipIsBroken" name="shipIsBroken"/><br/><br/>

                    <input type="submit" value="Create log" id="create-btn"/>
                </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;






