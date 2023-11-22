import { Component } from 'react';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.query.trim() !== '' &&
      this.state.query.trim() !== this.previousQuery
    ) {
      this.props.onSubmit(this.state.query);
      this.previousQuery = this.state.query.trim();
      this.setState({ query: '' });
    }
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
