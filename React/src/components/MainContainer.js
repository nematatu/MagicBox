import React from 'react';
import axios from'axios';
import update from 'react-addons-update'
import Title from './title';
import TextboxAndButton from './textbox_and_button';

let excuted=false;
let ids;
class MainContainer extends React.Component{
   rails_endpoint='http://localhost:3100/products';
  constructor(props){
    super(props)
    this.state={
    products:[]
    }
  }

  componentDidCatch=()=>{
        console.log("test")
    axios.get(this.rails_endpoint)//アクセス
        .then((results) => {
    console.log(results.data)//取得したらconsole.log
    ids=results.data[0].id
    console.log(ids)
  })
  .catch((data) =>{//アクセスできなかったら実行
    console.log(data)
  })
  }

  createProduct=(product)=>{
    axios.post(this.rails_endpoint,{product:product})
    .catch((data)=>{
      console.log(data)
    })
  }

  delete=async()=>{
    // ids.forEach(function(id){
        await axios.delete(`http://localhost:3100/products/${ids}`)
    }
    //)
  

  render(){
    if(!excuted){
        this.componentDidCatch()
        //this.delete()
        excuted=true
    }
  
    return (
      <>
      <div className='center'>
        <Title/>
        <div className='side'>
        <TextboxAndButton componentDidcatch={this.componentDidCatch} createProduct={this.createProduct}/>
        </div>
      </div>
      </>
    )
  }
}
export default MainContainer;
