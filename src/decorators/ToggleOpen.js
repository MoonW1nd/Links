import React from 'react';

export default OriginalComponent => class ToggleOpenDecorator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return <OriginalComponent
      {...this.props}
      {...this.state}
      toggleOpen = {this.toggleOpen}
      />;
  }

  toggleOpen = (event) => {
    if (event && event.preventDefault) event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
};
