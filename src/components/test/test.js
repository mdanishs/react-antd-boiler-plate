import React, { Component } from 'react';

export default class extends Component {

    componentDidMount() {
        this.props.login();
    }

    render() {
        return (
            <div>
                I am working
            </div>
        )
    }
}