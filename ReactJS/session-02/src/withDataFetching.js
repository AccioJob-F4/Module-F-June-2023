import { Component } from "react";

export const withDataFetching = (WrappedComponent, url) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        isLoading: false,
        error: null,
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ data, isLoading: false }))
        .catch((error) => this.setState({ error, isLoading: false }));
    }

    render() {
      const { data, isLoading, error } = this.state;

      return (
        <WrappedComponent
          data={data}
          isLoading={isLoading}
          error={error}
          {...this.props}
        />
      );
    }
  };
};
