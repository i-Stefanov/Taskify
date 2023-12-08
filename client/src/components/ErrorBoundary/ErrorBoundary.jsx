// ErrorBoundary.js
import { Component } from "react";
import styles from "./ErrorBoundary.module.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    });
  }

  resetApplication = () => {
    // Reload the entire application
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <div className={styles.errorBoundary}>
            <h2>Something went wrong.</h2>
            <p>We're sorry, but an error occurred in the application.</p>
            {this.state.error && <p>Error: {this.state.error.toString()}</p>}
            <button onClick={this.resetApplication}>Try Again</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
