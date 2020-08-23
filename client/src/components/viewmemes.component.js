import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            ratings: [],
            ids: []
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/memes/')
            .then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    let sumOfRatings = 0;
                    for (let j = 0; j < response.data[i].ratings.length; j++) {
                        sumOfRatings += parseInt(response.data[i].ratings[j]);
                    }
                    let avgRating = sumOfRatings / response.data[i].ratings.length || 0;
                    this.setState({
                        images: this.state.images.concat(response.data[i].image),
                        ratings: this.state.ratings.concat(avgRating),
                        ids: this.state.ids.concat(response.data[i]._id)
                    });
                }
                console.log(response.data)
            })
            .catch(err => {
                console.log(err);
            }) 
    }

    render() {
        // const formStyle = {
        //     margin: "1rem",
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center",
        //     justifyContent: "center"
        // };


        return (
            <div className="container">
                <div className="row jumbotron mt-4 mb-4">
                { this.state.images.map((image, index) => {
                    return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-4 mb-4 lead">
                        <h3>caption of meme</h3>
                        <img src={`http://localhost:5000/${image}`} style={{width: "90%"}} alt='this is a meme'></img>
                        <h4 className="mt-4">{this.state.ratings[index]} / 10</h4>
                        <Link to="/rate-memes"><a href={`#${this.state.ids[index]}`}>Rate Meme</a></Link>
                    </div>)
                }) }
                </div>
            </div>
        );
    }
}