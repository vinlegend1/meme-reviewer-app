import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            ratings: [],
            ids: [],
            inputRating: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e, id) {
        e.preventDefault();
        // const bodyFormData = new FormData();
        // bodyFormData.append('id', id);
        // bodyFormData.append('rating', this.state.inputRating);
        axios({
            method: 'put',
            url: '/memes/rate',
            data: {
                id: id,
                rating: this.state.inputRating
            },
            headers: {'Content-Type': 'application/json' }
            })
            .then((response) => {
                //handle success
                console.log(response);
            })
            .catch((err) => {
                //handle error
                console.log(err);
            });

            window.location.reload();
    }

    handleChange(e) {
        this.setState({
            inputRating: e.target.value
        });
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
            });
            
    }

    render() {

        return (
            <div className="container">
                <div className="row jumbotron">
                { this.state.images.map((image, index) => {
                    return (
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-4 mb-4 lead" id={this.state.ids[index]}>
                        <h3>caption of meme</h3>
                        <img src={`http://localhost:5000/${image}`} style={{width: "90%"}} alt='this is a meme'></img>
                        <h4 className="mt-4">{this.state.ratings[index]} / 10</h4>
                        <form onSubmit={(e) => this.handleSubmit(e, this.state.ids[index])}>
                        <input type="number" id={`rating${index}`} name="rating" min="1" max="10" onChange={this.handleChange} />
                        <button className="btn btn-success m-3">Rate!</button>
                        </form>
                        <Link to="/view-memes">View More Memes</Link>
                    </div>
                    )
                }) }
                </div>
                {/* <button onClick={() => {console.log(this.state)}}>Mmmm</button> */}
            </div>
        );
    }
}