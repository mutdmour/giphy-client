import React, { useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { observer } from 'mobx-react';
import { useStores } from '../../hooks/use-stores'


const GiphyGrid = observer(() => {
  const { gifsStore } = useStores();

  useEffect(() => {
    gifsStore.getGifs();
  }, [gifsStore, gifsStore.getGifs]);

  const renderContent = () => {
    // if (this.state.error) {
    //   return <Alert variant="danger">Something went wrong in fetching gifs <a onClick={() => this.getGifs()} href="#">Try again</a></Alert>
    // }

    // if (this.state.loading) {
    //   return <Spinner animation="border" role="status">
    //     <span className="sr-only">Loading...</span>
    //   </Spinner>;
    // }

    const gifs = gifsStore.gifs.map((gif) => {
      const url = gif?.images?.downsized_large?.url;
      return (<Col md="auto" className="gif-container">
        {url && <img src={url} alt="" />}
      </Col>);
    });

    return gifs;
  }

  return <Container fluid className="gif-grid">
    <Row>
      { renderContent() }
    </Row>
  </Container>;
});

export default GiphyGrid;
