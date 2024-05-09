import React, { Component } from 'react'

class LtkdProductAdd extends Component {
   constructor(props){
       super(props);
       this.state={
           id:0,
           title:'',
           status:0
       }
   }
   LtkdHandleChange = (event)=>{
       let name = event.target.name;
       let value = event.target.value;
       this.setState({
           [name]:value
       })
   }
   LtkdHangdleSumit = (ev)=>{
       ev.preventDefault();

       this.props.onSummit(this.state)
   }
 render() {
   return (
     <div>
       <h2> Them moi san pham</h2>
       <form className='col-md-6'>
           <div className="input-group mb-3">
               <span className="input-group-text" id="basic-addon1">
                   ID
               </span>
               <input
               type="text"
               className="form-control"
               name='id'
               valus={this.state.id}
               onChange={this.LtkdHandleChange}
               />
           </div>
           <div className="input-group mb-3">
               <span className="input-group-text" id="basic-addon2">
                   Title
               </span>
               <input
               type="text"
               className="form-control"
               name='Title'
               valus={this.state.title}
               onChange={this.LtkdHandleChange}
               />
           </div>
           <div className="input-group mb-3">
               <span className="input-group-text" id="basic-addon3">
                   Status
               </span>
               <input
               type="text"
               className="form-control"
               name='Status'
               valus={this.state.Status}
               onChange={this.LtkdHandleChange}
               />
           </div>
           <button className='btn btn-success' onClick={this.LtkdHangdleSumit}>Ghi lai</button>
       </form>
     </div>
   )
 }
}
export default LtkdProductAdd