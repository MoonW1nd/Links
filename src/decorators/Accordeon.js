import React from 'react';

export default OriginalComponent => class AccordeonDecorator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openComponentId: null,
    };
  }

  render() {
    return <OriginalComponent
      {...this.props}
      {...this.state}
      toggleOpenComponent = {this.toggleOpenComponent}
      />;
  }

  toggleOpenComponent = componentId => () => {
    this.setState({
      openComponentId: componentId === this.state.openComponentId ? null : componentId,
    });
  }
};
