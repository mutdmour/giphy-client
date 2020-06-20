import { createContext } from 'react';
import GifsStore from '../stores/GifsStore';

const contexts = createContext({
  gifsStore: new GifsStore()
});

export default contexts;