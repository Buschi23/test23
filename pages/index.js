import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Landing Page1</title>
          <meta property="og:title" content="Landing Page1" />
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
                <a href="#resources" className="home-link anchor">
                  Resources
                </a>
                <span className="home-link1 anchor">Inspiration</span>
                <span className="home-link2 anchor">Process</span>
                <span className="home-link3 anchor">Our story</span>
              </div>
            </div>
            <div className="home-right-side">
              <a href="#kontakt" className="home-cta-btn anchor button">
                Kontakt aufnehmen
              </a>
            </div>
            <div data-type="MobileMenu" className="home-mobile-menu">
              <div className="home-container1">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image1"
                />
                <div data-type="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-links-container1">
                <a href="#resources" className="home-link4 anchor">
                  Resources
                </a>
                <span className="home-link5 anchor">Inspiration</span>
                <span className="home-link6 anchor">Process</span>
                <span className="home-link7 anchor">Our story</span>
              </div>
            </div>
          </div>
        </div>
        <div id="inspiration" className="home-features">
          <div id="resources" className="home-hero">
            <div id="resources" className="home-hero1">
              <div className="home-hero-text">
                <div className="home-content-container"></div>
                <h1 className="home-heading">
                  IT-Reparatur Kormann
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h1>
                <h3 className="home-heading1">
                  Du suchst ein kompetenten und Ausgebildenden Fachmann in Thema
                  Hard und Software?
                </h3>
                <h3 className="home-heading2">
                  <span>Dann bist du hier genau richtig!</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div id="inspiration" className="home-features1">
          <div id="inspiration" className="home-features2">
            <div className="home-heading-container">
              <h2 className="home-text01 section-Heading">
                Was wird angeboten?
              </h2>
            </div>
            <div className="home-cards-container">
              <div className="home-features-card">
                <div className="home-icon-container">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                    <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                  </svg>
                </div>
                <div className="home-text-container">
                  <span className="home-heading3 card-Heading">
                    PC-Reperatur
                  </span>
                  <span className="home-text02">
                    <span className="home-text03">
                      Beheben von Hard- und Softwareproblemen.
                    </span>
                  </span>
                </div>
              </div>
              <div className="home-features-card1">
                <div className="home-icon-container1">
                  <svg viewBox="0 0 1024 1024" className="home-icon07">
                    <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                    <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                  </svg>
                </div>
                <div className="home-text-container1">
                  <span className="home-heading4 card-Heading">
                    Handy Reperatur
                  </span>
                  <span className="home-text04">
                    Reparatur von kaputten Samsung und Apple Handy Bildschirmen
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="home-features-card2">
                <div className="home-icon-container2">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M533.333 234.667c-11.776 0-21.333 9.557-21.333 21.333s9.557 21.333 21.333 21.333c46.208 0 83.797 37.589 83.797 83.797 0 11.776 9.557 21.333 21.333 21.333s21.333-9.557 21.333-21.333c0-69.717-56.747-126.464-126.464-126.464z"></path>
                    <path d="M533.333 42.667c-176.469 0-320 143.531-320 320 0 63.403 18.773 124.672 54.357 177.707 0.981 2.005 2.091 3.925 3.413 5.76 77.867 111.189 91.563 146.347 91.563 179.2v128c0 23.552 19.115 42.667 42.667 42.667h85.333c0 11.093 4.693 22.187 12.373 30.293 8.107 7.68 19.2 12.373 30.293 12.373 11.093 0 22.187-4.693 30.293-12.373 7.68-8.107 12.373-19.2 12.373-30.293h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-33.365 13.611-68.693 90.965-179.157 38.187-54.4 58.368-117.845 58.368-183.509 0-176.469-143.531-320-320-320zM618.667 810.667h-170.667v-42.667h170.667v42.667zM725.12 497.195c-62.549 89.301-91.435 140.331-101.76 185.472h-47.36v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-47.488c-10.24-43.947-38.315-93.867-98.389-180.053-0.939-1.877-2.048-3.712-3.285-5.504-28.032-39.851-42.837-86.357-42.837-134.443 0-129.408 105.259-234.667 234.667-234.667s234.667 105.259 234.667 234.667c0 48.043-14.805 94.549-42.88 134.528z"></path>
                  </svg>
                </div>
                <div className="home-text-container2">
                  <span className="home-heading5 card-Heading">Beratung</span>
                  <span className="home-text05">
                    Kompetente Beratung zum Thema Hardware und Software, sowie
                    die perfekte Zusammenstellung eines Gaming- oder auch
                    Arbeits- PC&apos;s.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="inspiration" className="home-features3">
          <div className="home-team">
            <div className="home-heading-container1">
              <h1 className="home-text06 section-Heading">Über mich</h1>
              <span>
                Ausgebildender Fachinformatiker mit viel Erfahrungen in Thema
                Computer und Handy&apos;s
              </span>
              <span className="home-text08 section-Text">
                <span className="home-text09">&amp;#8203;</span>
              </span>
            </div>
            <div className="home-cards-container1">
              <div className="home-team-card">
                <div className="home-avatar-container">
                  <svg viewBox="0 0 1024 1024" className="home-icon13">
                    <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                  </svg>
                </div>
                <span className="home-name card-Heading">
                  <span>Christoph</span>
                </span>
                <span className="home-position card-Text">
                  CEO/ INHABER/ FACHINFORMATIKER
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="kontakt" className="home-get-in-touch">
          <h2 className="home-text11 section-Heading">Kontaktier mich</h2>
          <div className="home-content-container1">
            <div className="home-form-container">
              <span className="home-heading6 bigCard-Heading">
                Send us a message
              </span>
              

              <form action="https://formsubmit.co/christophkormann@web.de" method="POST">
              <input
                type="text"
                required="true"
                name="name"
                id="name"
                value="Ihr Name"
                className="home-name1 input"
              />
              <input 
                type="hidden"
                name="_next"
                value="https://reparaturservice-kormann.de/danke.js"
              />
              <input
                type="email"
                required="true"
                name="email"
                value="Ihre E-Mail"
                id="mail"
                className="home-email input"
              />
              <textarea
                placeholder="Ihre Nachricht"
                id="message"
                name="message"
                className="home-message textarea"
              ></textarea>            
              <button type="submit">Send</button>
              </form>



            </div>
            <div className="home-locations-container">
              <div className="home-location-1">
                <span className="home-heading7">London, UK</span>
                <div className="home-adress">
                  <svg viewBox="0 0 1024 1024" className="home-icon15">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="section-Text">Address</span>
                </div>
                <div className="home-email1">
                  <svg viewBox="0 0 1024 1024" className="home-icon17">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="section-Text">E-mail Address</span>
                </div>
                <div className="home-phone">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon19"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <span className="section-Text">Phone Number</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator"></div>
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
            background-color: #a9bee6;
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
          .home-icon02 {
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
            background-image: linear-gradient(
              to bottom,
              #ffffff 0%,
              #c8e9f9 70%
            );
          }
          .home-hero {
            width: 100%;
            height: 727px;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: 1px;
            padding-left: 1px;
            flex-direction: column;
            padding-bottom: 1px;
            justify-content: flex-end;
          }
          .home-hero1 {
            width: 484px;
            height: 357px;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tenunits);
            background-size: cover;
            justify-content: center;
            background-image: url('https://cdn-icons-png.flaticon.com/512/22/22978.png?w=826&t=st=1655281145~exp=1655281745~hmac=012217fe7cafd3148f0ca915886833f0b9733a29b202e1b0664f80ac25041f45');
            background-repeat: no-repeat;
            background-position: center;
            background-blend-mode: inherit;
          }
          .home-hero-text {
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-content-container {
            top: -391px;
            left: -34px;
            width: 671px;
            height: 1046px;
            display: flex;
            opacity: 0.95;
            position: absolute;
            max-width: auto;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            justify-content: center;
            background-image: linear-gradient(
              to bottom,
              #ffffff 0%,
              #c8e9f9 70%
            );
          }
          .home-heading {
            top: -147px;
            left: 52px;
            color: var(--dl-color-gray-black);
            height: 61px;
            position: absolute;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-heading1 {
            left: -394px;
            color: var(--dl-color-gray-black);
            width: 326px;
            bottom: -51px;
            height: 304px;
            position: absolute;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-heading2 {
            color: var(--dl-color-gray-black);
            right: -294px;
            width: 259px;
            bottom: -29px;
            height: 304px;
            position: absolute;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-features1 {
            width: 100%;
            height: 744px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-image: linear-gradient(to top, #89d4ef 0%, #c8e9f9 70%);
          }
          .home-features2 {
            width: 100%;
            height: 585px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container {
            width: 719px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text01 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-features-card {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
          }
          .home-icon04 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text02 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            text-align: left;
            font-family: Raleway;
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home-text03 {
            color: #000000;
          }
          .home-features-card1 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
          }
          .home-icon07 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home-text-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading4 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text04 {
            color: #000000;
            font-size: 20px;
            font-style: normal;
            text-align: left;
            font-family: Raleway;
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home-features-card2 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
          }
          .home-icon10 {
            width: 36px;
            height: 36px;
            min-width: 36px;
            min-height: 36px;
          }
          .home-text-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading5 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text05 {
            color: #000000;
            font-size: 20px;
            font-style: normal;
            text-align: left;
            font-family: Raleway;
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home-features3 {
            width: 100%;
            height: 770px;
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: 104px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-image: linear-gradient(
              to bottom,
              #89d4ef 0%,
              #a9bee6 70%
            );
          }
          .home-team {
            width: 100%;
            height: 648px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: 44px;
          }
          .home-heading-container1 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text06 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text08 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .home-text09 {
            color: #464545;
          }
          .home-cards-container1 {
            width: 100%;
            height: 100px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-team-card {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
            padding-bottom: 32px;
          }
          .home-avatar-container {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-icon13 {
            width: 48px;
            height: 48px;
          }
          .home-name {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-position {
            color: var(--dl-color-gray-700);
          }
          .home-get-in-touch {
            width: 100%;
            height: 962px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: 91px;
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .home-text11 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-content-container1 {
            width: 100%;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-form-container {
            width: 703px;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
          }
          .home-heading6 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-name1 {
            width: 100%;
            border: none;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-email {
            width: 100%;
            border: none;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-message {
            width: 100%;
            border: none;
            height: 140px;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-cta-btn1 {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-locations-container {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-location-1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-heading7 {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon15 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-email1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon17 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon19 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column-reverse;
            }
            .home-hero1 {
              flex-direction: column-reverse;
            }
            .home-hero-text {
              width: 80%;
            }
            .home-content-container {
              flex-direction: column-reverse;
            }
            .home-cards-container1 {
              justify-content: center;
            }
            .home-form-container {
              width: 60%;
            }
            .home-locations-container {
              flex-wrap: wrap;
            }
            .home-location-1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
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
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-features-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading-container1 {
              width: 100%;
            }
            .home-content-container1 {
              width: 100%;
              flex-direction: column;
            }
            .home-form-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-locations-container {
              flex-direction: row;
              justify-content: center;
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
            .home-hero {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-hero1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-hero-text {
              width: 100%;
            }
            .home-content-container {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-features1 {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-features2 {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-features-card {
              width: 100%;
            }
            .home-features-card1 {
              width: 100%;
            }
            .home-features-card2 {
              width: 100%;
            }
            .home-features3 {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-team {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-text06 {
              text-align: center;
            }
            .home-content-container1 {
              padding-left: 0px;
            }
            .home-form-container {
              padding: var(--dl-space-space-tripleunit);
              margin-right: 0px;
            }
            .home-heading6 {
              text-align: center;
            }
            .home-location-1 {
              margin-right: 0px;
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
