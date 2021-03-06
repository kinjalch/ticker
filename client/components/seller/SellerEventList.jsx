import React from 'react';
import { connect } from 'react-redux';
import SellerEventListItem from './SellerEventListItem.jsx';

class SellerEventList extends React.Component {
  renderEventList() {

    return this.props.events.map((event, idx) =>
      <SellerEventListItem key={idx} event={event} />
    );
  }

  render() {
    if (!this.props.events) {
      return (
        <div className="notFound">
          <img src="../../assets/images/notFound.png" />
          No events match this search
        </div>
      );
    }

    return (
      <div className="list">
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
