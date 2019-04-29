import React, { Component } from 'react';

const withEscapeAction = cb => Wrapped => {
  return class extends Component {
    onEscPress = e => {
      if (e.keyCode === 27) {
        cb();
      }
    };
    componentDidMount() {
      window.addEventListener('keydown', this.onEscPress);
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.onEscPress);
    }

    render() {
      return <Wrapped {...this.props} />;
    }
  };
};

export default withEscapeAction;
