import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Copy of Landing Page1</title>
          <meta property="og:title" content="Copy of Landing Page1" />
        </Head>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <div className="home-left-side">
              <img
                alt="image"
                src="/playground_assets/22978-200h.png"
                className="home-image"
              />
              <div data-type="BurgerMenu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
              <div className="home-links-container">
                <span className="home-link anchor">Resources</span>
                <span className="home-link1 anchor">Inspiration</span>
                <span className="home-link2 anchor">Process</span>
                <span className="home-link3 anchor">Our story</span>
              </div>
            </div>
            <div className="home-right-side">
              <button className="home-cta-btn anchor button">
                Kontakt aufnehmen
              </button>
            </div>
            <div data-type="MobileMenu" className="home-mobile-menu">
              <div className="home-container1">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image1"
                />
                <div data-type="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-links-container1">
                <span className="home-link4 anchor">Resources</span>
                <span className="home-link5 anchor">Inspiration</span>
                <span className="home-link6 anchor">Process</span>
                <span className="home-link7 anchor">Our story</span>
              </div>
            </div>
          </div>
        </div>
        <div id="inspiration" className="home-features">
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
          <div class="elfsight-app-1972139e-b9eb-4fd9-be53-8d9a210d3625"></div>
            
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #b9b9b9;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: space-between;
          }
          .home-left-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon {
            width: 36px;
            height: 36px;
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link1 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link2 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link3 {
            text-decoration: none;
          }
          .home-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-cta-btn {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image1 {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon2 {
            width: 24px;
            height: 24px;
          }
          .home-links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link4 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link5 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link6 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link7 {
            text-decoration: none;
          }
          .home-features {
            width: 100%;
            height: 1046px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-image: linear-gradient(
              to bottom,
              #ffffff 0%,
              #c8e9f9 70%
            );
          }
          .home-text {
            height: 0px;
          }
          @media (max-width: 767px) {
            .home-burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .home-icon {
              fill: var(--dl-color-gray-white);
            }
            .home-links-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-cta-btn {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-features {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
