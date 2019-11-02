import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Comments extends Component {

    state = {
        comments: '',
    }

    inputHandle = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    clickHandle = () => {
        this.props.dispatch({ type: "COMMENTS", payload: this.state })
    }

    render() {
        return (

            <div>
                <h3>Any comments you would like to leave?</h3>
                <input
                    type="text"
                    onChange={(event) => this.inputHandle(event)}
                    value={this.state.comments}>
                </input>
                <Link to="/Review"><button onClick={() => this.clickHandle()}>Next</button></Link>
                <pre>{JSON.stringify(this.state.comments, null, 2)}</pre>
            </div>

        );
    }
}

export default connect()(Comments);
