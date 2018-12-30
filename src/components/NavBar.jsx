import React, { Component } from 'react';
import styles from '../styles/styles.css';

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
                        'item', 'navItem'
                    ].join(' ').trim()}
                    onClick={() => this.handleClick('heroes')}
                >
                    Heroes
                </a>
                <a
                    className={[
                        this.props.activeTab === 'items' ? 'active' : '',
                        'item', 'navItem'
                    ].join(' ').trim()}
                    onClick={() => this.handleClick('items')}
                >
                    Items
                </a>
                <a
                    className={[
                        this.props.activeTab === 'resources' ? 'active' : '',
                        'item', 'navItem'
                    ].join(' ').trim()}
                    onClick={() => this.handleClick('resources')}
                >
                    Resources
                </a>
                <a
                    className={[
                        this.props.activeTab === 'steam' ? 'active' : '',
                        'item', 'navItem'
                    ].join(' ').trim()}
                    onClick={() => this.handleClick('steam')}
                >
                    Steam
                </a>
            </div>
        );
    }
}
