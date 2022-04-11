// write your CatList component here

import React, {Component} from "react";

export default class CatList extends Component {
    render() {
        // debugger
        const catPics = this.props.catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.id} />)
        return <div>{catPics}</div>
    }
}