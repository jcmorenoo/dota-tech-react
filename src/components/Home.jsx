import React, { Component } from 'react';
import NavBar from './NavBar';
import Heroes from './heroes/Heroes';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'heroes',
            heroes: {},
            heroes_images: []
        };
    }
    handleSelect = tab => {
        console.log('Active Tab: ' + tab);
        this.setState({ activeTab: tab });
    };

    fetchHeroes = () => {
        fetch('https://heroes-api-dota2.herokuapp.com/api/heroes/')
            .then(response => response.json())
            .then(payload => {
                this.setState({ heroes: payload });
            })
            .catch(response => console.log('Error: ' + response));

        fetch('https://heroes-api-dota2.herokuapp.com/api/heroes/heroes_images')
            .then(response => response.json())
            .then(payload => {
                this.setState({ heroes_images: payload.heroes_images });
            })
            .catch(response => console.log('Error: ' + response));
    };

    componentDidMount() {
        if (Object.keys(this.state.heroes).length <= 0 || this.state.heroes_images.length <= 0) {
            this.fetchHeroes();
        }
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
                        heroesImages={this.state.heroes_images}
                    />
                ) : null}
            </div>
        );
    }
}

export default Home;
