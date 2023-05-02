import { useLayoutEffect, useState } from 'react';
import chatStore from '../store/chat';

const useInitialState = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  return [chatState];
}

export default useInitialState