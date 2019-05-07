import React from 'react';

class MoviesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          poster: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        // console.log(constructor)
      }

      // componentDidMount() {
      //   console.log('didMount')
      // }

      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
       }

       submitForm(e) {
        e.preventDefault();
        const url = 'http://campus-bordeaux.ovh:3001/api/quests/movies/';
        const config = {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        };
        console.log(this.state)
        
        fetch(url, config)
        .then(res => res.json())
          .then(res => {
            if (res.error) {
              alert(res.error);
            } else {
              alert(`Added new film with the ID ${res}!`);
            }
          }).catch(e => {
            console.error(e);
            alert('hi');
          });
       }

      render () {
          return (
            <div className="FormEmployee">
              <h1>What's your favourite film?</h1>

              <form onSubmit={this.submitForm}>
                <fieldset>
                  <div className="form-data">
                    <label htmlFor="favouriteFilm">Favourite Film</label>
                    <input
                      type="text"
                      id="favouriteFilm"
                      name="name"
                      onChange={this.onChange}
                      value={this.state.name}
                    />
                  </div>

                  <div className="form-data">
                    <label htmlFor="filmPoster">Film Poster</label>
                    <input
                      type="url"
                      id="film"
                      name="poster"
                      onChange={this.onChange}
                      value={this.state.poster}
                    />
                  </div>
            
                  <div className="form-data">
                    <label htmlFor="comment">Comment</label>
                    <input
                      type="text"
                      id="comment"
                      name="comment"
                      onChange={this.onChange}
                      value={this.state.comment}
                    />
                  </div>
                  <div className="form-data">
                    <input type="submit" value="Send" />
                  </div>
                </fieldset>
              </form>
            </div>
          )
      }
};

export default MoviesForm;