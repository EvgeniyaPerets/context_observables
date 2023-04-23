import { useLayoutEffect, useState } from 'react'
import chatStore from '../store/chat';

const FirstPerson = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  const onFormSubmit = e => {
    e.preventDefault()
    const msgObj = {
      person: 'first-person',
      text: e.target.elements.messageInput.value.trim(),
    }
    chatStore.sendMessage(msgObj)
    document.getElementById('messageForm').reset()
  }

  return (
    <div className='container'>
      <h2>Mycroft</h2>
      <div className='chat-box'>
        {chatState.data.map(msg => (
          <div>
            <p className={msg.person}>{msg.text}</p>
            <div className='clear' />
          </div>
        ))}
      </div>
      <form id='messageForm' onSubmit={onFormSubmit}>
        <input
          type='text'
          id='messageInput'
          name='messageInput'
          placeholder='type here...'
          required
        />
        <button type='submit'>Send</button>
      </form>
      <button className='clear-button' onClick={() => chatStore.cleatChat()}>Clear chat</button>
    </div>
  )
}

export default FirstPerson;