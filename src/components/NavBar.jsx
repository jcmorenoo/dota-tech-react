import React, { Component } from 'react';

export default class NavBar extends Component {
    handleClick = tab => {
        this.props.onClick(tab);
    };

    render() {
        return (
            <div className="ui attached tabular menu">
                <a
                    className={[
                        this.props.activeTab === 'heroes' ? 'active' : '',
                        'item'
                    ].join(' ')}
                    onClick={() => this.handleClick('heroes')}
                >
                    Heroes
                </a>
                <a
                    className={[
                        this.props.activeTab === 'items' ? 'active' : '',
                        'item'
                    ].join(' ')}
                    onClick={() => this.handleClick('items')}
                >
                    Items
                </a>
                <a
                    className={[
                        this.props.activeTab === 'resources' ? 'active' : '',
                        'item'
                    ].join(' ')}
                    onClick={() => this.handleClick('resources')}
                >
                    Resources
                </a>
                <a
                    className={[
                        this.props.activeTab === 'steam' ? 'active' : '',
                        'item'
                    ].join(' ')}
                    onClick={() => this.handleClick('steam')}
                >
                    Steam
                </a>
            </div>
        );
    }
}
