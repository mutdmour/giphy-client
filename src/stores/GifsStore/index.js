import { observable, action } from 'mobx';

class GifsStore {
  @observable gifs = [];

  @action getGifs() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=&limit=25&rating=G')
    .then((res) => res.json())
    .then((res) => {
      this.gifs = res.data || [];
        // loading: false,
        // error: false
    })
    .catch(() => {
        //  error: true,
        //  loading: false
      this.gifs = [];
    });
  };
}

export default GifsStore;
