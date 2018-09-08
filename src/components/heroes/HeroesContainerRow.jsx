import React, { Component } from 'react';

class HeroesContainerRow extends Component {

    getHeroImages = (heroId) => {
        return this.props.getHeroImages(heroId);
    }

    render() {
        const heroes = this.props.heroes;
        
        return (
            <tr>
                {heroes.map((hero, index) => (
                    <td key={index}>
                        <img src={this.getHeroImages(hero.id)['url_small_portrait']} />    
                    </td>
                ))}
            </tr>
        );
    }
}

export default HeroesContainerRow;
