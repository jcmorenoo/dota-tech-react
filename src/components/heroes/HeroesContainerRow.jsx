import React, { Component } from 'react';
import styles from '../../styles/styles.css';

class HeroesContainerRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroes: [],
            previewedHero: null
        };
    }

    componentDidMount() {
        this.setState({
            heroes: this.props.heroes
        });
    }

    previewHero(heroId) {
        console.log('Preview Hero' + heroId);
        this.setState({ previewedHero: heroId });
        console.log(this.state.previewedHero);
    }

    render() {
        const heroes = this.state.heroes;

        const smallImg = {
            display: 'block',
            //position: "absolute",
            //width: "100%"
            zIndex: '1'
        };

        const lgImg = {
            zIndex: '3',
            display: 'block',
            position: 'absolute'
        };

        return (
            <tr>
                {heroes.map((hero, index) => (
                    <td key={index}>
                        <a
                            className="heroPickerIconLink"
                            href="#"
                            onMouseOver={() => this.previewHero(hero.id)}
                            onMouseLeave={() => this.previewHero(null)}
                        >
                            <img
                                className="heroHoverSmall"
                                src={
                                    'http://cdn.dota2.com/apps/dota2/images/heroes/' +
                                    hero.uri +
                                    '_sb.png'
                                }
                                alt={hero.displayName}
                            />
                            {this.state.previewedHero === hero.id ? (
                                <img
                                    className="heroHoverLarge"
                                    src={
                                        'http://cdn.dota2.com/apps/dota2/images/heroes/' +
                                        hero.uri +
                                        '_lg.png'
                                    }
                                    alt={hero.displayName}
                                    height="6%"
                                />
                            ) : null}
                        </a>
                        {/* <img src={this.getHeroImages(hero.id)['url_small_portrait']} />     */}
                    </td>
                ))}
            </tr>
        );
    }
}

export default HeroesContainerRow;
