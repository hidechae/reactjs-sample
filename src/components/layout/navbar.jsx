var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Bootstrap = require('react-bootstrap'),
    Navbar = Bootstrap.Navbar,
    Nav = Bootstrap.Nav,
    NavItem = Bootstrap.NavItem,
    DropdownButton = Bootstrap.DropdownButton,
    MenuItem = Bootstrap.MenuItem
;

var NavbarInstance = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar brand="illuster" inverse toggleNavKey={0}>
          <Nav right eventKey={0}> {/* This is the eventKey referenced */}
            <li><Link to="index">Top</Link></li>
            <li><Link to="upload">アップロード</Link></li>
            <li><Link to="mypage" params={{ name:"myoji namae" }}>mypage</Link></li>
            <DropdownButton eventKey={3} title="">
              <MenuItem eventKey="1">タイムライン</MenuItem>
              <MenuItem eventKey="2">投稿一覧</MenuItem>
              <MenuItem eventKey="3">フォロー</MenuItem>
              <MenuItem eventKey="4">フォロワー</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="5">プロフィール編集</MenuItem>
              <MenuItem eventKey="6">ログアウト</MenuItem>
            </DropdownButton>
          </Nav>
        </Navbar>
      </div>
    );
  }
});

module.exports = NavbarInstance;
