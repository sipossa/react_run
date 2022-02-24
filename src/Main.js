import Slider from "react-slick";
import "./slick.css";

function Main() {
  const settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    pauseOnHover:false,
    onReInit:()=>{
      const FITEM = document.querySelector('.slick-active figure');
      FITEM.classList.add('on');
    },
    afterChange:index =>{
      const ITEM = document.querySelectorAll('.main_slider figure');
      ITEM.forEach(itm=>itm.classList.remove('on'));
      ITEM[index+1].classList.add('on');
    } 
  };
  return (


    <Slider className="main_slider" {...settings}>
      <figure className="item01">
        <div className="txt">
          <h3>01.JEWELLERY COLLECTION</h3>
          <p>
            모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다.

          </p>
          <a href="#">MORE</a>
        </div>
      </figure>
      <figure className="item02">
        <div className="txt">
          <h3>02.JEWELLERY COLLECTION</h3>
          <p>
            모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다.

          </p>
          <a href="#">MORE</a>
        </div>
      </figure>
      <figure className="item03">
        <div className="txt">
          <h3>03.JEWELLERY COLLECTION</h3>
          <p>
            모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다.

          </p>
          <a href="#">MORE</a>
        </div>
      </figure>
    </Slider>

  )
}

export default Main;