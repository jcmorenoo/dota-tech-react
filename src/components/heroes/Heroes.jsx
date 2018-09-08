import React, { Component } from 'react';
import HeroesContainer from './HeroesContainer';

class Heroes extends Component {

    getHeroImages = heroId => {
        return this.props.heroesImages.filter(
            heroImage => heroImage.id === heroId
        )[0];
    };

    render() {
        const heroes = [];
        Object.keys(this.props.heroes).forEach(key => {
            heroes.push(this.props.heroes[key]);
        });
        const agiTeamOne = heroes.filter(
            hero => hero.primaryAttribute === 'agi' && hero.team === 0
        );
        const agiTeamTwo = heroes.filter(
            hero => hero.primaryAttribute === 'agi' && hero.team === 1
        );
        const strTeamOne = heroes.filter(
            hero => hero.primaryAttribute === 'str' && hero.team === 0
        );
        const strTeamTwo = heroes.filter(
            hero => hero.primaryAttribute === 'str' && hero.team === 1
        );
        const intTeamOne = heroes.filter(
            hero => hero.primaryAttribute === 'int' && hero.team === 0
        );
        const intTeamTwo = heroes.filter(
            hero => hero.primaryAttribute === 'int' && hero.team === 1
        );

        const firstRow = [strTeamOne, agiTeamOne, intTeamOne];
        const secondRow = [strTeamTwo, agiTeamTwo, intTeamTwo];

        return (
            <div
                className={[('ui', 'segment', 'tab')].join(' ')}
                id="heroesContainer"
            >
                <div>Heroes</div>
                <table id="heroesTable" align="center">
                    <thead>
                        <tr>
                            <th>Str</th>
                            <th>Agi</th>
                            <th>Int</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {firstRow.map((container, index) => {
                                return (
                                    <td valign="top" key={index}>
                                        <HeroesContainer
                                            heroes={container}
                                            getHeroImages={this.getHeroImages}
                                            
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            {secondRow.map((container, index) => {
                                return (
                                    <td valign="top" key={index}>
                                        <HeroesContainer
                                            heroes={container}
                                            getHeroImages={this.getHeroImages}
                                            
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Heroes;
