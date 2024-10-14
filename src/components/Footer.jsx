/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3 className={styles.title}>About Us</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>
        <div className={styles.column}>
          <div className={styles.quick}>
          <h3 className={styles.title}>Quick Links</h3></div>
          <nav className={styles.quickLinks}>
            <a href="#" className={styles.link}>
              Home
            </a>
            <a href="#" className={styles.link}>
              About
            </a>
            <a href="#" className={styles.link}>
              Services
            </a>
            <a href="#" className={styles.link}>
              Contact
            </a>
          </nav>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Social Media</h3>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa4ec353d640e227b227551f1a84455cca075e2a9c0cc75834b19aea474fd40?placeholderIfAbsent=true&apiKey=2ced3db22aac4ec9b3a268650a41a373"
                alt="Facebook"
                className={styles.socialIcon}
              />
            </a>
            <a href="#" className={styles.socialLink}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb8f2ccabd1c62cde0b551fc927d407eb984fe7ab3068e7db9f5a9b875c949ff?placeholderIfAbsent=true&apiKey=2ced3db22aac4ec9b3a268650a41a373"
                alt="Twitter"
                className={styles.socialIcon}
              />
            </a>
            <a href="#" className={styles.socialLink}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b137ac80f364e3368f603b4ba0e0abf482df9fa31ae41c7cfd19883a06250406?placeholderIfAbsent=true&apiKey=2ced3db22aac4ec9b3a268650a41a373"
                alt="Instagram"
                className={styles.socialIcon}
              />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Contact Us</h3>
          <address className={styles.contactInfo}>
            Email: info@gloriousfabric.lkExplore
            <br />
            Phone: 0776769398/ 0773315775
            <br />
            Address: GLORIOUS FABRIC PVT LTD,
        182/C, KANDEWATTE ROAD MALWANA
          </address>
        </div>
      </div>
      <div className={styles.divider}></div>
      <p className={styles.copyright}>
        2024 Your Website. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;