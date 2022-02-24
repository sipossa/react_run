

function Section01() {
    const detail = [
        {
            imageUrl: './img/lesedilarona01.jpg',
            text: '스톤 그리고 색상들을 멋진 조합'
        },
        {
            imageUrl: './img/lesedilarona02.jpg',
            text: '스톤 그리고 색상들을 멋진 조합'
        },
        {
            imageUrl: './img/lesedilarona03.jpg',
            text: '스톤 그리고 색상들을 멋진 조합'
        }
    ];

  
    const numIdx = (i) => {
        console.log(i);
        const ALLFIGURE = document.querySelectorAll('#content01 figure');
        ALLFIGURE.forEach(el=>el.classList.remove('on'));
        ALLFIGURE[i].classList.add('on')

    }

    const detailBox = detail.map((el, idx) => (
        <figure key={idx}>
            <div className="case">
                <img src={el.imageUrl} alt="" />
            </div>
            <strong>{el.text}</strong>
            <a href="#!" onClick={()=>numIdx(idx)}>구매하기</a>
        </figure>
    )
    );
    return (
        <section id="content01">
            <h2>JEWELLERY COLLECTION</h2>
            <p>모던하면서도 클래식한 디자인들을 완벽하게 표현한 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷</p>
            <div className="container">
                {detailBox}
            </div>
        </section>
    );
}

export default Section01;