import { createContext } from 'react';
import GifsStore from './GifsStore';

const context = createContext({
  gifsStore: new GifsStore()
});

export default context;