import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)

export default class Footer extends React.Component {

    render() {
        const youtubeChannel = 'https://www.youtube.com/channel/UCURjfSQb3sxmG08dhn3vh8A';
        const githubLink = 'https://www.github.com/vinlegend1';
        const hrStyle = {     
            border: "1px solid gray",
            borderRadius: "5%"
            
        }

        const webDesignerFooter = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "2rem"
        }

        const socialStyle = {
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            width: '100vw',
            backgroundColor: "#2980b9"
        };

        const socialIconStyle = {
            marginRight: "2rem"
        }
        return (
            <footer className="footer" style={{margin: "0", width: "100vw"}}>
                <div className="bg" style={socialStyle} >
                    <a href="#" target="_blank" className="text-dark"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg" style={socialIconStyle} /></a>
                    <a href={youtubeChannel} target="_blank" className="text-dark"><FontAwesomeIcon icon={['fab', 'youtube']} size="lg" style={socialIconStyle} /></a>
                    <a href="#" target="_blank" className="text-dark"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" style={socialIconStyle} /></a>
                    <a href={githubLink} target="_blank" className="text-dark"><FontAwesomeIcon icon={['fab', 'github']} size="lg" style={socialIconStyle} /></a>
                </div>
                <div className="bg bg-dark p-4" style={{width: "100vw", margin: "0"}}>
                    <div className="row d-flex flex-row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" >
                            <h4 className="text-secondary" >About Website Designer</h4>
                            <hr style={hrStyle} />
                            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique diam ac est tincidunt rutrum. Quisque ut lacus a turpis cursus varius ut nec tellus. Quisque iaculis rutrum odio, ut ornare mi fringilla sed. Morbi volutpat ante congue augue varius, in mollis est feugiat. Cras ex ante, vestibulum nec elit non, tempor iaculis mauris. Ut ac lacus a leo iaculis suscipit eget at ex. Sed pulvinar urna a est pulvinar, non posuere turpis mollis. Nunc venenatis, eros tempor viverra mollis, diam dolor pharetra ipsum, in elementum metus nibh ullamcorper metus. Sed sit amet sem eget neque lacinia commodo nec vel nibh. In placerat quam ut nulla sodales, quis pulvinar diam maximus. Sed sed quam odio. Phasellus elit dolor, mattis sit amet molestie sit amet, pellentesque tristique libero.</p>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 d-flex">
                            <div className="d-flex flex-column">
                            <h5 className="text-secondary" >Useful Links</h5>
                            <div className="d-flex">
                            <ul className="mr-2 text-secondary" style={{listStyleType: "none"}} >
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                            <ul className="mr-2 text-secondary" style={{listStyleType: "none"}}>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                            <ul className="mr-2 text-secondary" style={{listStyleType: "none"}}>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                            <ul className="mr-2 text-secondary" style={{listStyleType: "none"}}>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="bg bg-dark m-0">
                    <h5 className="text-light" style={{textAlign: "center", padding: "1rem"}}>&copy; 2020 YellowMathAndGames</h5>
                </div>
            </footer>
        );
    }
}