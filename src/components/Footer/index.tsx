import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="td-footer">
      <div className="td-footer__container">
        <div className="td-footer__content">
          <div className="td-footer__section">
            <h3 className="td-footer__title">Travel Diary</h3>
            <p className="td-footer__description">
              记录你的旅行故事，分享精彩瞬间
            </p>
          </div>

          <div className="td-footer__section">
            <h4 className="td-footer__subtitle">快速链接</h4>
            <div className="td-footer__links">
              <Link to="/" className="td-footer__link">首页</Link>
              <Link to="/my-trips" className="td-footer__link">我的游记</Link>
              <Link to="/publish" className="td-footer__link">发布游记</Link>
            </div>
          </div>

          <div className="td-footer__section">
            <h4 className="td-footer__subtitle">帮助与支持</h4>
            <div className="td-footer__links">
              <Link to="/about" className="td-footer__link">关于我们</Link>
              <Link to="/privacy" className="td-footer__link">隐私政策</Link>
              <Link to="/terms" className="td-footer__link">使用条款</Link>
              <Link to="/contact" className="td-footer__link">联系我们</Link>
            </div>
          </div>
        </div>

        <div className="td-footer__bottom">
          <p className="td-footer__copyright">
            © {currentYear} Travel Diary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;