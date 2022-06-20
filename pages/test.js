import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
    
    
    
<div id="price">
 
  <div class="plan">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>PC-Reparatur</h3>
        <div class="price">70€<span>/pro Stunde</span>
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li>Hardware überprüfung</li>
          <li>Fehlersuche</li>
          <li>PC Zurücksetzen</li>
          <li>Vorort Dienst</li>
          <li>Softwareprobleme</li>
        </ul>
      </div>
      <div class="btn">
        <a href="#kontakt">Order Now</a>
      </div>
    </div>
  </div>

  <div class="plan basic">
    <div class="plan-inner">
      <div class="hot">hot</div>
      <div class="entry-title">
        <h3>Handy Reparatur</h3>
        <div class="price">70<span>/pro Stunde</span>
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li>Samsung Bildschirm Reparatur</li>
          <li>IPhone Bildschirm Reparatur</li>
          <br></br>
          <li></li>      
          <br></br>
          <li></li>      
          <br></br>
          <li></li>
         </ul>
      </div>
      <div class="btn">
        <a href="#kontakt">Order Now</a>
      </div>
    </div>
  </div>

  <div class="plan standard">
    <div class="plan-inner">
      <div class="entry-title">
        <h3>IT Beratung</h3>
        <div class="price">60<span>/Pro Stunde</span>
        </div>
      </div>
      <div class="entry-content">
        <ul>
          <li>Software Beratung</li>
          <li>Hardware Beratung</li>
          <li>Zusammenstellung Gaming PC</li>
          <li>Zusammenstellung Arbeits PC</li>
          <li>Zusammenbau PC</li>
        </ul>
      </div>
      <div class="btn">
        <a href="#kontakt">Order Now</a>
      </div>
    </div>
  </div>
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
