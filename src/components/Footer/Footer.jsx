import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import { categories, quickLinks, socialLinks } from "../Data/FooterData";
import { FaAngleUp } from "react-icons/fa";

const Footer = ({ aboutTitle, text }) => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>{aboutTitle}</h6>
              <p class="text-justify">{text}</p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links text-capitalize">
                {categories.map((data) => (
                  <li key={data.id}>
                    <NavLink to={data.link}>{data.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                {quickLinks.map((data) => (
                  <li key={data.id}>
                    <NavLink to={data.link}>{data.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          {/* top arrow */}
          <a href="#navbar" className="topArrow">
            <FaAngleUp />
          </a>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12 align-self-center">
              <p class="copyright-text mb-0">
                Copyright &copy; {year} All Rights Reserved by
                <NavLink to="/" className="text-light mx-1">
                  SliverSpoon
                </NavLink>
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12 align-self-center">
              <ul class="social-icons">
                {socialLinks.map((data) => (
                  <li key={data.id}>
                    <NavLink class="facebook" to={data.link}>
                      <span>{data.icon}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
