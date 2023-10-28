
import './online.css'


export default function Online({user}) {
  return (
    <li className="rightbarFriend">
    <div className="rightbarProfileImgContainer">
      <img className='rightbarPorıfileImg' src={user.profilePicture} alt="..." />
      <span className="onlineBadge"></span>
    </div>
    <div className="userBox">
    <span className="rightbarUsername">{user.username}</span>
      <img className='messenger' src="/assets/messenger.webp" alt="..." />
    </div>
   
  </li>
  )
}
