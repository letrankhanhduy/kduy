import React, { Component } from 'react'
import LtkdProductList from './components/LtkdProductList';
import LtkdProductAdd from './components/LtkdProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.stage = {
     products : [
        { title: 'Lê Trần Khánh Duy', id: 2210900020 , status:1},
        { title: 'Lê Hoàng Minh', id: 1 , status:1},
        { title: 'Ngô Hoàng Long', id: 2 , status:0}, 
        { title: 'Hà Quoắc Thành', id: 3 , status:0},
        { title: 'Tạ Văn Thua', id: 4 , status:1},
      ]
    }
  }    
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Lê Trần Khánh Duy - Render Data - Event Form</h1>
        <hr/>
        <LtkdProductList renderProducts={this.stage.products}/>
        <hr/>
        <LtkdProductAdd onSummit = {this.LtkdHandldSubmit}/>
      </div>
    );
  }
}
