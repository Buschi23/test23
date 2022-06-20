import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
     <div id="price">
  <!--price tab-->
  <div class="plan">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>Basic Wash</h3>
        <div class="price">$25<span>/PER CAR</span>
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li><strong>1x</strong> option 1</li>
          <li><strong>2x</strong> option 2</li>
          <li><strong>3x</strong> option 3</li>
          <li><strong>Free</strong> option 4</li>
          <li><strong>Unlimited</strong> option 5</li>
        </ul>
      </div>
      <div class="btn">
        <a href="#">Order Now</a>
      </div>
    </div>
  </div>
  <!-- end of price tab-->
  <!--price tab-->
  <div class="plan basic">
    <div class="plan-inner">
      <div class="hot">hot</div>
      <div class="entry-title">
        <h3>Express Wash</h3>
        <div class="price">$50<span>/PER CAR</span>
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li><strong>1x</strong> option 1</li>
          <li><strong>2x</strong> option 2</li>
          <li><strong>3x</strong> option 3</li>
          <li><strong>Free</strong> option 4</li>
          <li><strong>Unlimited</strong> option 5</li>
        </ul>
      </div>
      <div class="btn">
        <a href="#">Order Now</a>
      </div>
    </div>
  </div>
  <!-- end of price tab-->
  <!--price tab-->
  <div class="plan standard">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>Super Wash</h3>
        <div class="price">$75<span>/PER CAR</span>
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li><strong>2x</strong> Free Entrance</li>
          <li><strong>Free</strong> Snacks</li>
          <li><strong>Custom</strong> Swags</li>
          <li><strong>2x</strong> Certificate</li>
          <li><strong>Free</strong> Wifi</li>
        </ul>
      </div>
      <div class="btn">
        <a href="#">Order Now</a>
      </div>
    </div>
  </div>
  <!-- end of price tab-->
  <!--price tab-->
  <div class="plan ultimite">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>Unlimited Wash</h3>
        <div class="price">$100<span>/PER CAR</span>
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li><strong>1x</strong> option 1</li>
          <li><strong>2x</strong> option 2</li>
          <li><strong>3x</strong> option 3</li>
          <li><strong>Free</strong> option 4</li>
          <li><strong>Unlimited</strong> option 5</li>
        </ul>
      </div>
      <div class="btn">
        <a href="#">Order Now</a>
      </div>
    </div>
  </div>
  <!-- end of price tab-->
</div>
    
    
    
    
      
      <style jsx>
        {`
           
          @import url(https://fonts.googleapis.com/css?family=Lato:400,700);

body {
  background: #F2F2F2;
  padding: 0;
  maring: 0;
}

#price {
  text-align: center;
}

.plan {
  display: inline-block;
  margin: 10px 1%;
  font-family: 'Lato', Arial, sans-serif;
}

.plan-inner {
  background: #fff;
  margin: 0 auto;
  min-width: 280px;
  max-width: 100%;
  position:relative;
}

.entry-title {
  background: #53CFE9;
  height: 140px;
  position: relative;
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
}

.entry-title>h3 {
  background: #20BADA;
  font-size: 20px;
  padding: 5px 0;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0;
}

.entry-title .price {
  position: absolute;
  bottom: -25px;
  background: #20BADA;
  height: 95px;
  width: 95px;
  margin: 0 auto;
  left: 0;
  right: 0;
  overflow: hidden;
  border-radius: 50px;
  border: 5px solid #fff;
  line-height: 80px;
  font-size: 28px;
  font-weight: 700;
}

.price span {
  position: absolute;
  font-size: 9px;
  bottom: -10px;
  left: 30px;
  font-weight: 400;
}

.entry-content {
  color: #323232;
}

.entry-content ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
}

.entry-content li {
  border-bottom: 1px solid #E5E5E5;
  padding: 10px 0;
}

.entry-content li:last-child {
  border: none;
}

.btn {
  padding: 3em 0;
  text-align: center;
}

.btn a {
  background: #323232;
  padding: 10px 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none
}
.hot {
    position: absolute;
    top: -7px;
    background: #F80;
    color: #fff;
    text-transform: uppercase;
    z-index: 2;
    padding: 2px 5px;
    font-size: 9px;
    border-radius: 2px;
    right: 10px;
    font-weight: 700;
}
.basic .entry-title {
  background: #75DDD9;
}

.basic .entry-title > h3 {
  background: #44CBC6;
}

.basic .price {
  background: #44CBC6;
}

.standard .entry-title {
  background: #4484c1;
}

.standard .entry-title > h3 {
  background: #3772aa;
}

.standard .price {
  background: #3772aa;
}

.ultimite .entry-title > h3 {
  background: #DD4B5E;
}

.ultimite .entry-title {
  background: #F75C70;
}

.ultimite .price {
  background: #DD4B5E;
}
          
          
          
          
        `}
      </style>
    </>
  )
}

export default Home
