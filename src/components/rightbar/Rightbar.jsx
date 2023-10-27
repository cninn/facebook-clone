import './rightbar.css';



export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="..." />
          
          <span className='birthdayText'> <b> Bugün Ahmet Kumul </b> ve  <b> 4 kişinin </b> daha doğum günü</span>

        </div>
        <img className='rightbarAd' src="/assets/party.jpeg" alt="..." />
        <h4 className='rightbarTitle'>
          Çevrimiçi Olan Kişiler
        </h4>
        <ul className="rightbarFriendList">

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarPorıfileImg' src="/assets/person/person1.jpeg" alt="..." />
              <span className="onlineBadge"></span>
            </div>
            <div className="userBox">
            <span className="rightbarUsername">Jamie Boys</span>
              <img className='messenger' src="/assets/messenger.webp" alt="..." />
            </div>
           
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarPorıfileImg' src="/assets/person/person2.jpeg" alt="..." />
              <span className="onlineBadge"></span>
            </div>
            <div className="userBox">
            <span className="rightbarUsername">Helen Garcha</span>
              <img className='messenger' src="/assets/messenger.webp" alt="..." />
            </div>
           
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarPorıfileImg' src="/assets/person/person3.jpeg" alt="..." />
              <span className="onlineBadge"></span>
            </div>
            <div className="userBox">
            <span className="rightbarUsername">Niccky Mount</span>
              <img className='messenger' src="/assets/messenger.webp" alt="..." />
            </div>
           
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarPorıfileImg' src="/assets/person/person4.jpeg" alt="..." />
              <span className="onlineBadge"></span>
            </div>
            <div className="userBox">
            <span className="rightbarUsername">Asya Duru</span>
              <img className='messenger' src="/assets/messenger.webp" alt="..." />
            </div>
           
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarPorıfileImg' src="/assets/person/person5.jpeg" alt="..." />
              <span className="onlineBadge"></span>
            </div>
            <div className="userBox">
            <span className="rightbarUsername">Merve Güner</span>
              <img className='messenger' src="/assets/messenger.webp" alt="..." />
            </div>
           
          </li>



        </ul>
      </div>
    </div>
  )
}
