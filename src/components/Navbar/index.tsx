import React, { useState } from 'react';
// 需要先安装 react-router-dom 依赖
// npm install react-router-dom @types/react-router-dom
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import './index.scss';

interface NavbarProps {
  userName?: string;
  avatar?: string;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  userName,
  avatar,
  onLogout,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/my-trips', label: '我的游记' },
    { path: '/publish', label: '发布游记' },
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="td-navbar">
      <div className="td-navbar__container">
        <Link to="/" className="td-navbar__logo">
          Travel Diary
        </Link>

        <div className="td-navbar__menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={classNames('td-navbar__menu-item', {
                'td-navbar__menu-item--active': location.pathname === item.path,
              })}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="td-navbar__user">
          {userName ? (
            <div className="td-navbar__user-info" onClick={toggleDropdown}>
              <img
                src={avatar || 'https://via.placeholder.com/32'}
                alt={userName}
                className="td-navbar__avatar"
              />
              <span className="td-navbar__username">{userName}</span>
              {dropdownVisible && (
                <div className="td-navbar__dropdown">
                  <Link to="/profile" className="td-navbar__dropdown-item">
                    个人中心
                  </Link>
                  <Link to="/settings" className="td-navbar__dropdown-item">
                    设置
                  </Link>
                  <button
                    className="td-navbar__dropdown-item td-navbar__logout"
                    onClick={onLogout}
                  >
                    退出登录
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="td-navbar__login">
              登录
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;