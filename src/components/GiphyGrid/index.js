import React from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { observer } from 'mobx-react';
import { context } from '../../stores/context';

@observer
class GiphyGrid extends React.PureComponent {
  state = {
    gifs: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    this.getGifs();
  }

  renderContent() {
    if (this.state.error) {
      return <Alert variant="danger">Something went wrong in fetching gifs <a onClick={() => this.getGifs()} href="#">Try again</a></Alert>
    }

    if (this.state.loading) {
      return <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>;
    }

    const gifs = this.state.gifs.map((gif) => {
      const url = gif?.images?.downsized_large?.url;
      return (<Col md="auto" className="gif-container">
        {url && <img src={url} />}
      </Col>);
    });

    return gifs;
  }

  render() {
    return <Container fluid className="gif-grid">
      <Row>
        { this.renderContent() }
      </Row>
    </Container>;
  }
}

export default GiphyGrid;
