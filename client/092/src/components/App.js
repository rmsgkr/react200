import React, { Component } from 'react';
import { Route } from "react-router-dom";

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';
// footer
import Footer from './Footer/Footer';
// login
import LoginForm from './LoginForm';
// debounce
import debounce from './R094_reactDebounce';
// throttle
import throttle from './R095_reactThrottle';
// 서울시 유동인구 21년 02월
import floatingPopulationList from './Floating_population/floatingPopulationList'
// 서울시 유동인구 21년 02월 차트
import rechartsSimpleLineChart from './Floating_population/rechartsSimpleLineChart'
// 서울시 유동인구 21년 02월 차트2
import floatingPopulationListChart from './Floating_population/floatingPopulationListChart'
// 서울시 유동인구 21년 02월 차트3
import floatingPopulationAreaChart from './Floating_population/floatingPopulationAreaChart'
// 서울시 유동인구 21년 02월 차트4
import floatingPopulationBarChart from './Floating_population/floatingPopulationBarChart'
// 서울시 유동인구 21년 02월 차트5
import floatingPopulationComposedChart from './Floating_population/floatingPopulationComposedChart'

class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/debounce' component={debounce} />
        <Route exact path='/throttle' component={throttle} />
        <Route path='/floatingPopulationList' component={floatingPopulationList} />
        <Route path='/rechartsSimpleLineChart' component={rechartsSimpleLineChart} />
        <Route path='/floatingPopulationListChart' component={floatingPopulationListChart} />
        <Route path='/floatingPopulationAreaChart' component={floatingPopulationAreaChart} />
        <Route path='/floatingPopulationBarChart' component={floatingPopulationBarChart} />
        <Route path='/floatingPopulationComposedChart' component={floatingPopulationComposedChart} />
        <Footer/>
      </div>
    );
  }
}

export default App;