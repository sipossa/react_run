function Nav() {
  return (
    <header>
      <div className="container">
        <h1>
          <a href="index.html"><img src="./img/grafflogo.png" alt="" /></a>
        </h1>
        <nav>
          <ul>
            <li><a href="#">하이주얼리</a></li>
            <li><a href="#">주얼리 컬렉션</a></li>
            <li><a href="#">컬렉션 & 브라이덜</a></li>
            <li><a href="#">웨딩주얼리</a></li>
            <li><a href="#">특별한 솔리테어</a></li>
          </ul>
        </nav>
        <div className="search">
          <form id="search" name="search_form" action="">
            <input type="search" />
            <button>
              <i className="xi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
export default Nav;