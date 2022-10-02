const React = require('react');
const DefaultLayout = require('../views/layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        const { log } = this.props;

        return (
            <DefaultLayout title="Edit Entry" group="Logs">
            
                <h1>Edit an entry</h1>
                <div className="label-color">
                <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                    <label htmlFor='title'>Title: </label>
                    <input type="text" id="title" name="title" defaultValue={log.title}/><br/><br/>

                    <label htmlFor='entry'>Entry: </label>
                    <textarea id="entry" name="entry" defaultValue={log.entry}></textarea><br/><br/>

                    <label htmlFor='title'>Ship Is Broken?:</label>
                    <input type="checkbox" id="shipIsBroken" name="shipIsBroken" defaultChecked={log.shipIsBroken}/><br/><br/>
                    
                    <input type="submit" value="Edit entry" id="edit-entry-btn"/>
                </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;