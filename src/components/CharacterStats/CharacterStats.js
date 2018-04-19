import React, { Component } from "react";

class CharacterStats extends Component {

    render(){
        return (
            <section className="stats-block">
                <h2 className="stats-label">Abilities</h2>
                <table className="stat-table">
                    <tbody>
                        <tr className="stat-row">
                            <td className="stat-label">Strength</td>
                            <td className="stat-value">
                                {this.props.playerAbilities.str}
                            </td>
                        </tr>
                        <tr className="stat-row">
                            <td className="stat-label">Dexterity</td>
                            <td className="stat-value">
                                {this.props.playerAbilities.dex}
                            </td>
                        </tr>
                        <tr className="stat-row">
                            <td className="stat-label">Intelligence</td>
                            <td className="stat-value">
                                {this.props.playerAbilities.int}
                            </td>
                        </tr>
                        <tr className="stat-row">
                            <td className="stat-label">Wisdom</td>
                            <td className="stat-value">
                                {this.props.playerAbilities.wis}
                            </td>
                        </tr>
                        <tr className="stat-row">
                            <td className="stat-label">Sex Appeal</td>
                            <td className="stat-value">
                                {this.props.playerAbilities.sex}
                            </td>
                        </tr>
                        <tr className="stat-row">
                            <td className="stat-label">Personal Brand</td>
                            <td className="stat-value">
                                {this.props.playerAbilities.brand}
                            </td>
                        </tr>
                        <tr className="stat-row">
                            <td className="stat-label">Luck</td>
                            <td className="stat-value">
                                {this.props.playerAbilities.luck}
                            </td>
                        </tr>
                        <tr className="stat-row">
                            <td className="stat-label">Credit Score</td>
                            <td className="stat-value">
                                {this.props.playerAbilities.credit}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}

export default CharacterStats;