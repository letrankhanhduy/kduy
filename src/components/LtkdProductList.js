import React, { Component } from 'react'

export default class LtkdProductList extends Component {
  render() {
    let {renderProducts} = this.props;
    console.log("Products:",renderProducts);
    let fnStatus = (param)=>{
      if(param===1){
        return 'Active';
      }
      return 'NonActive';
    }
    let elementProduct = renderProducts.map((item,index)=>{
        return(
            <>
                           <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {/* <td>{item.status===1?'Active':'NonAtive'}</td> */}
                    <td>
                       {fnStatus(item.Status)}
                  </td>
                </tr>
            </>
        )
    })
    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table talbe-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
               {elementProduct}
            </tbody>
        </table>
      </div>
    )
  }
}
