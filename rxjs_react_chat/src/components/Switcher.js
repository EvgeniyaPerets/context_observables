import { NavLink } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';

const Switcher = () => {
  const location = window.location.href.split('/')[3];

  const [chatState] = useInitialState()

  const msgNotification = chatState.newDataCount > 0 && (<span className='notify'>{chatState.newDataCount}</span>)

  return (
    <div className='switcher-div'>
      <NavLink
        style={({isActive}) => ({
          border: isActive ? "2px solid #00ade7" : "",
          padding:0,
          borderRadius:30
        })}
        to={'/first-person'}
      >
        <button className='switcher'>
          Person 1
          {location !== 'first-person' && location.length > 1 && msgNotification}
        </button>
      </NavLink>
      <NavLink
        style={({isActive}) => ({
          border: isActive ? "2px solid #06c406" : "",
          padding:0,
          borderRadius:30
        })}
        to={'/second-person'}
      >
        <button className='switcher'>
          Person 2
          {location !== 'second-person' && msgNotification}
        </button>
      </NavLink>
    </div>
  )

}

export default Switcher