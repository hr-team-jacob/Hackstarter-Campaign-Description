import React, { Component } from "react";
import axios from 'axios';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      //main
      creator: null,
      title: null,
      summary: null,
      videoURL: null,
      genre: null,
      location: null,
      //paragraph
      paragraphs: null,
      //picture
      pictures: null
    }
    this.requestDB = this.requestDB.bind(this);
  }
  componentDidMount() {
    this.requestDB();
  }

  requestDB() {
    const path = window.location.pathname;
    axios.get(`http://ec2-52-91-5-216.compute-1.amazonaws.com/main${path}`)
      .then(({ data }) => {
        let main = data[0];
        this.setState({
          creator: main.creator,
          title: main.title,
          summary: main.summary,
          videoURL: main.videoURL,
          genre: main.genre,
          location: main.location
        })
      })
    axios.get(`http://ec2-52-91-5-216.compute-1.amazonaws.com/paragraphs${path}`)
      .then(({ data }) => {
        let paragraph = data[0];
        this.setState({
          paragraphs: paragraph.paragraph
        })
      })
    axios.get(`http://ec2-52-91-5-216.compute-1.amazonaws.com/pictures${path}`)
      .then(({ data }) => {
        let picture = data[0];
        this.setState({
          pictures: picture.pictureURL
        })
      })
  }

  render() {
    return (
      <div id='start'>
        <div className="header-container">
          <div className="container">
            <div className="flexHeader">
              <a className="headerItem">Explore</a>
              <a className="headerItem">Start a project</a>
            </div>
            <div className="hackstarter">HACKSTARTER</div>
            <div className="flexHeader">
              <a className="headerItem">Search 🔍</a>
              <a className="headerItem">Sign in</a>
            </div>
          </div>
        </div>
        <div className='main'>
          <div>
            <h1 id='title'>{this.state.title}</h1>
            <p id='description'>{this.state.summary}</p>
          </div>
          <div className='main-container'>
            <div className="left-main">
              <div className="video">
                <iframe src="http://www.youtube.com/embed/_OBlgSz8sSM" allow="encrypted-media" allowFullScreen></iframe>
              </div>
              <div className='click-container'>
                <a className='click-inner'>
                  <i className="far fa-compass fa-xs"></i>
                  <div className='click'>{this.state.genre}</div>
                </a>
                <a className='click-inner'>
                  <i className="fas fa-map-marker-alt fa-xs"></i>
                  <div className='click'>{this.state.location}</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className='navbar'>
          <div className='left-nav'>
            <a href="#cam" className='click-nav'>Campaign</a>
            <a href="#faq" className='click-nav'>FAQ</a>
            <a href="#com" className='click-nav'>Comments</a>
          </div>
          <div className='right-nav'>
            <a className='backThisProject'>Back this project</a>
            <a className='remindMe'> <i className="fas fa-heart fa-xs"> </i> Remind me </a>
          </div>
        </nav>
        <div className='info'>
          <div className='info-left'>
            <section id='cam'>
              <hr />
              <div className='campaign'>
                <div>Campaign</div>
                <hr />
                <div>{this.state.paragraphs}</div>
                <img src={this.state.pictures} />
              </div>
            </section>
            <section id='faq'>
              <hr />
              <div className='faq'>
                <div>FAQ</div>
                <hr />
                <div>{this.state.paragraphs}</div>
                <img src={this.state.pictures} />
              </div>
            </section>
            <section id='com'>
              <hr />
              <div className='comments'>
                <div>Comments Component</div>
                <hr />
              </div>
            </section>
            <section className='top'>
              <a href="#start" id='top'> <i class="far fa-caret-square-up fa-lg"></i> Top </a>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default Container;