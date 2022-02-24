import { useRef } from "react";
import Nav from './Nav';

function Header() {
  const topRef = useRef(null);
  const popClose = () => {    
    topRef.current.classList.add('on');
  }
  return (
    <div className='Header'>
      <div className="top_banner" ref={topRef}>
        <div className="container">
          <h2>JEWELLERY COLLECTION EVENT</h2>
          <p>
            모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다.
            <a href="#">MORE</a>
          </p>
          <i className="xi-close" onClick={popClose}></i>
        </div>
      </div>
      <Nav />
    </div>
  )
}
export default Header;