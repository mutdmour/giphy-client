import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

class GiphyGrid extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getGifs();
  }

  getGifs() {
    const that = this;
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=API_KEY&limit=25&rating=G')
      .then((res) => res.json())
      .then((res) => {
        that.setState({
          gifs: res.data,
          loading: false
        });
      });
  };

  render() {
    if (this.state.loading) {
      return <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>;
    }

    const gifs = this.state.gifs.map((gif) => {
      const url = gif?.images?.downsized_large?.url;
      return (<Col md="auto">
        {url && <img src={url} />}
      </Col>);
    });

    return <Container fluid>
      <Row>
        { gifs }
      </Row>
    </Container>;
  }
}

export default GiphyGrid;
