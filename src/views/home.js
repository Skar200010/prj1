import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <main className="home-container">
      <Helmet>
        <title>Nonstop Perfumed Toad</title>
        <meta property="og:title" content="Nonstop Perfumed Toad" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar-interactive">
        <img
          alt="image"
          src="/external/artboard%201full%20logo-200h.png"
          className="home-image"
        />
        <button type="button" className="home-button button">
          BOOK A MEETING
        </button>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <span>Solutions</span>
            <span className="home-text01">Industries</span>
            <span className="home-text02">Resources</span>
            <span className="home-text03">Company</span>
            <span className="home-text04">Pricing</span>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <Link to="" className="home-login button">
            Login
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container1">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image1"
              />
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <span className="home-text05">About</span>
              <span className="home-text06">Features</span>
              <span className="home-text07">Pricing</span>
              <span className="home-text08">Team</span>
              <span className="home-text09">Blog</span>
            </nav>
            <div className="home-container2">
              <button className="home-login1 button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-div">
        <Script
          html={`<!DOCTYPE html>
<html>
<head>
  <style>
    .carousel {
      position: relative;
      width: 100%;
      overflow: hidden;
      cursor: grab;
    }
  
    .carousel-container {
      display: flex;
      transition: transform 0.3s ease-in-out;
    }
  
    .logo {
      flex: 0 0 100%;
      text-align: center;
    }
  
    .logo img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <div class="carousel">
    <div class="carousel-container">
      <div class="logo"><img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8069142d-4f16-4d49-95a8-fb9e25f867f8/91117e10-3af2-4b63-be48-506a7336c126?org_if_sml=1"></div>
      <div class="logo"><img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8069142d-4f16-4d49-95a8-fb9e25f867f8/82c94721-47ef-48fc-a7fb-ea2c9d5ad64b?org_if_sml=1"></div>
      <div class="logo"><img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8069142d-4f16-4d49-95a8-fb9e25f867f8/4bd69cf0-161c-4a6f-a032-5ab827de5a19?org_if_sml=1"></div>
      <div class="logo"><img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8069142d-4f16-4d49-95a8-fb9e25f867f8/52a0ac80-e864-4463-9ab5-c833f4fde55a?org_if_sml=1"></div>
      <div class="logo"><img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8069142d-4f16-4d49-95a8-fb9e25f867f8/0e6af521-8eb3-4cf4-bbf2-2811b3158470?org_if_sml=1"></div>
      <div class="logo"><img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8069142d-4f16-4d49-95a8-fb9e25f867f8/b9e11a58-af9a-47e1-8f38-b2a86e53c632?org_if_sml=1"></div>
    </div>
  </div>

  <script>
    const carousel = document.querySelector(".carousel");
    const carouselContainer = document.querySelector(".carousel-container");

    let isGrabbed = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener("mousedown", (e) => {
      isGrabbed = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => {
      isGrabbed = false;
    });

    carousel.addEventListener("mouseup", () => {
      isGrabbed = false;
    });

    carousel.addEventListener("mousemove", (e) => {
      if (!isGrabbed) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the scrolling speed here
      carousel.scrollLeft = scrollLeft - walk;
    });
  </script>
</body>
</html>
`}
        ></Script>
      </div>
      <img
        alt="image"
        src="/salescompensation_highperformer_highperformer%20copy-200w.png"
        className="home-image2"
      />
      <img
        alt="image"
        src="/gartner%20rating%20home%20page-1500h.png"
        className="home-image3"
      />
      <img
        alt="image"
        src="/salescompensation_easiesttodobusinesswith_enterprise_easeofdoingbusinesswith%20copy-200w.png"
        className="home-image4"
      />
      <img
        alt="image"
        src="/g2%20rating%20home%20page-200h.png"
        className="home-image5"
      />
      <button className="home-login2 button">Let&apos;s KENNECT</button>
      <img alt="image" src="/hero%20image-400w.png" className="home-image6" />
      <img
        alt="image"
        src="/external/cruise%20mode!%20mobile1-1500h.png"
        className="home-image7"
      />
      <span className="home-text10">
        <span>Runs your sales Compensation</span>
        <br></br>
        <span>programs in</span>
        <br></br>
      </span>
      <span className="home-text15">
        <span>Build , run and automate your incentive</span>
        <br></br>
        <span>compenstion plans to create tranparency</span>
        <br></br>
        <span>and achieve opertional efficiency</span>
        <br></br>
      </span>
      <span className="home-text22">Trusted BY</span>
    </main>
  )
}

export default Home
