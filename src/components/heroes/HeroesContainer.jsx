import React, { Component } from 'react';
import HeroesContainerRow from './HeroesContainerRow';

class HeroesContainer extends Component {
    isNewRow(index) {
        return index % 4 === 0;
    }
    populateRows(heroes) {
        var heroRows = [];
        var heroRow = [];
        heroes.map((hero, index) => {
            if (this.isNewRow(index)) {
                heroRows.push(heroRow);
                heroRow = [];
            }
            heroRow.push(hero);
        });
        if(heroRow.length > 0) {
            heroRows.push(heroRow);
        }
        return heroRows;
    }

    render() {
        console.log(this.props.heroes);
        const heroRows = this.populateRows(this.props.heroes);
        return (
            <table>
                <tbody>
                    {heroRows.map((heroRow, index) => (
                        <HeroesContainerRow key={index} heroes={heroRow} getHeroImages={this.props.getHeroImages}/>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default HeroesContainer;
