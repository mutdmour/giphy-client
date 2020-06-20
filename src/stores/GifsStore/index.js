import { observable, action } from 'mobx';

class GifsStore {
  @observable gifs = [];

  @action getGifs() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=API_KEY&limit=25&rating=G')
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        gifs: res.data,
        loading: false,
        error: false
      });
    })
    .catch(() => {
      this.setState({
         error: true,
         loading: false
      });
    });
  };
}

export default GifsStore;
