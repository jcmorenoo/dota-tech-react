import React, { Component } from 'react';
import NavBar from './NavBar';
import Heroes from './heroes/Heroes';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'heroes',
            heroes: {}
        };
    }
    handleSelect = tab => {
        console.log('Active Tab: ' + tab);
        this.setState({ activeTab: tab });
    };

    fetchHeroes = () => {
        // fetch('https://heroes-api-dota2.herokuapp.com/api/heroes/')
        fetch('https://api.stratz.com/api/v1/Hero')
            .then(response => response.json())
            .then(payload => {
                this.setState({ heroes: payload });
            })
            .catch(response => console.log('Error: ' + response));
    };

    componentDidMount() {
        if (Object.keys(this.state.heroes).length <= 0) {
            this.fetchHeroes();
        }
        document.title = 'dota-tech';
    }

    render() {
        return (
            <div className="homeContainer">
                <NavBar
                    onClick={this.handleSelect}
                    activeTab={this.state.activeTab}
                />
                {this.state.activeTab === 'heroes' ? (
                    <Heroes
                        heroes={this.state.heroes}
                        // heroesImages={this.state.heroes_images}
                    />
                ) : null}
            </div>
        );
    }
}

export default Home;
