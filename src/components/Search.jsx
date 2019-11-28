import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import '../styles/components/Search.scss';
import 'react-datepicker/dist/react-datepicker.css';

const airports = [
  {
    city: 'Buenos Aires',
    country: 'Argentina',
    code: 'EZE',
  },
  {
    city: 'La Paz',
    country: 'Bolivia',
    code: 'LPB',
  },
  {
    city: 'Río de Janeiro',
    country: 'Brasil',
    code: 'GIG',
  },
  {
    city: 'São Paulo',
    country: 'Brasil',
    code: 'GRU',
  },
  {
    city: 'Santiago de Chile',
    country: 'Chile',
    code: 'SCL',
  },
  {
    city: 'Bogotá',
    country: 'Colombia',
    code: 'BOG',
  },
  {
    city: 'Medellín',
    country: 'Colombia',
    code: 'MDE',
  },
  {
    city: 'Quito',
    country: 'Ecuador,',
    code: 'UIO',
  },
  {
    city: 'Asunción',
    country: 'Paraguay',
    code: 'ASU',
  },
  {
    city: 'Lima',
    country: 'Peru',
    code: 'LIM',
  },
  {
    city: 'Montevideo',
    country: 'Uruguay',
    code: 'MVD',
  },
  {
    city: 'Toronto',
    country: 'Canada',
    code: 'YYZ',
  },
  {
    city: 'Los Angeles',
    country: 'Estados Unidos',
    code: 'LAX',
  },
  {
    city: 'Miami',
    country: 'Estados Unidos',
    code: 'MIA',
  },
  {
    city: 'Ciudad de México',
    country: 'México',
    code: 'MEX',
  },
  {
    city: 'Madrid',
    country: 'España',
    code: 'MAD',
  },
  {
    city: 'Berlín',
    country: 'Alemania',
    code: 'TXL',
  },
  {
    city: 'Roma',
    country: 'Italia',
    code: 'FCO',
  },
  {
    city: 'París',
    country: 'Francia',
    code: 'CDG',
  },
  {
    city: 'Sídney',
    country: 'Australia',
    code: 'SYD',
  },
  {
    city: 'Seoul',
    country: 'Corea del sur',
    code: 'ICN',
  },
  {
    city: 'Tokio',
    country: 'Japón',
    code: 'HND',
  },
];

const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());
  if (escapedValue === '') {
    return [];
  }
  const regex = new RegExp(`^${escapedValue}`, 'i');
  return airports.filter(airport => regex.test(airport.city));
};
const getSuggestionValue = suggestion => suggestion.city;
const renderSuggestion = suggestion => (
  <span>
    {suggestion.city}
,
    {suggestion.country}
    {' '}
(
    {suggestion.code}
)
  </span>
);

class Search extends Component {
  constructor() {
    super();
    this.state = {
      valueOrigin: '',
      suggestionsOrigin: [],
      valueDestiny: '',
      suggestionsDestiny: [],
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  onChangeOrigin = (event, { newValue }) => {
    this.setState({
      valueOrigin: newValue,
    });
  };

  onChangeDestiny = (event, { newValue }) => {
    this.setState({
      valueDestiny: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequestedOrigin = ({ value }) => {
    this.setState({
      suggestionsOrigin: getSuggestions(value),
    });
  };

  onSuggestionsFetchRequestedDestiny = ({ value }) => {
    this.setState({
      suggestionsDestiny: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequestedOrigin = () => {
    this.setState({
      suggestionsOrigin: [],
    });
  };

  onSuggestionsClearRequestedDestiny = () => {
    this.setState({
      suggestionsDestiny: [],
    });
  };

  // DatePicker
  handleChangeStart = date => {
    this.setState({
      startDate: date,
    });
  };

  handleChangeEnd = date => {
    this.setState({
      endDate: date,
    });
  };

  render() {
    const {
      valueOrigin,
      suggestionsOrigin,
      valueDestiny,
      suggestionsDestiny,
    } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputPropsOrigin = {
      placeholder: 'Ciudad de origen',
      value: valueOrigin,
      onChange: this.onChangeOrigin,
    };

    const inputPropsDestiny = {
      placeholder: 'Ciudad de destino',
      value: valueDestiny,
      onChange: this.onChangeDestiny,
    };

    return (
      <div className="container-search">
        <div className="group-fields">
          <div className="group-field">
            <label>Viajas desde...</label>
            <Autosuggest
              suggestions={suggestionsOrigin}
              onSuggestionsFetchRequested={
                this.onSuggestionsFetchRequestedOrigin
              }
              onSuggestionsClearRequested={
                this.onSuggestionsClearRequestedOrigin
              }
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputPropsOrigin}
            />
          </div>
          <div className="group-field">
            <label>Viajas a...</label>
            <Autosuggest
              suggestions={suggestionsDestiny}
              onSuggestionsFetchRequested={
                this.onSuggestionsFetchRequestedDestiny
              }
              onSuggestionsClearRequested={
                this.onSuggestionsClearRequestedDestiny
              }
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputPropsDestiny}
            />
          </div>
          <div className="group-field">
            <label>Cuando vas...</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeStart}
              placeholderText="Fecha de ida"
            />
          </div>
          <div className="group-field">
            <label>Cuando regresas...</label>
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleChangeEnd}
              placeholderText="Fecha de vuelta"
            />
          </div>
        </div>
        <div className="group-button">
          <Link to="/resultado" className="button">
            Buscar
          </Link>
        </div>
      </div>
    );
  }
}

export default Search;
