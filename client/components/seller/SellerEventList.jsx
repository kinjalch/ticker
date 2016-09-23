import React from 'react';
import { connect } from 'react-redux';
import SellerEventItem from './SellerEventItem.jsx';

class SellerEventList extends React.Component {
  renderEventList() {
    return this.props.events.map((event, idx) =>
      <SellerEventItem key={idx} event={event} />
    );
  }

  render() {
    if (!this.props.events) {
      return (
        <div>No events match this search.</div>
      );
    }

    return (
      <div>
        { this.renderEventList() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

export default connect(mapStateToProps)(SellerEventList);
