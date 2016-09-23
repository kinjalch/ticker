import React from 'react';
import { connect } from 'react-redux';
import { createAuction } from '../../actions/index.js';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class SellerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: localStorage.getItem('userId'),
      startPrice: '',
      minPrice: '',
      numTickets: '',
    };

    this.onStartPriceChange = this.onStartPriceChange.bind(this);
    this.onMinPriceChange = this.onMinPriceChange.bind(this);
    this.onNumTicketsChange = this.onNumTicketsChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log('this.state.userId', this.state.userId);
    this.props.createAuction(this.props.activeEvent, this.state.startPrice, this.state.minPrice,
      this.state.numTickets, this.state.userId);
    this.setState({
      startPrice: '',
      minPrice: '',
      numTickets: '',
    });
  }

  onStartPriceChange(event) {
    this.setState({ startPrice: event.target.value });
  }

  onMinPriceChange(event) {
    this.setState({ minPrice: event.target.value });
  }

  onNumTicketsChange(event) {
    this.setState({ numTickets: event.target.value });
  }

  onClick(event) {
    browserHistory.push(`/sell`);
  }


  render() {
    return (
      <div>
        <div>
          <h3>Event
              <button onClick={this.onClick}> Go back to search </button>
          </h3>

          <p> Name: { this.props.activeEvent.name } </p>
          <p> Date: { this.props.activeEvent.datetime_local }, &nbsp;
            Timezone: { this.props.activeEvent.timezone } </p>
          <p> Venue: { this.props.activeEvent.venue } </p>
          <p> Address: { this.props.activeEvent.address }, &nbsp;
            { this.props.activeEvent.city }, &nbsp;
            {this.props.activeEvent.state } &nbsp;
            {this.props.activeEvent.zip }
          </p>
        </div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="integer"
            required="required"
            onChange={this.onStartPriceChange}
            value={this.state.startPrice}
            placeholder="Start Price $"
          />
          <input
            type="integer"
            required="required"
            onChange={this.onMinPriceChange}
            value={this.state.minPrice}
            placeholder="Minimum Price $"
          />
          <input
            type="integer"
            required="required"
            onChange={this.onNumTicketsChange}
            value={this.state.numTickets}
            placeholder="Number of Tickets"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeEvent: state.activeEvent,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createAuction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SellerForm);
