import React, { Component } from 'react'
import {db} from './firebaseConfig'

export default class Home extends Component {
  state={
    details:[]
  }
  async componentDidMount(){
    const dataRef=db.collection("time").orderBy("date","asc");
    const snapShot=await dataRef.get();
    console.log(snapShot)
    /*this.setState({
      deatils:snapShot
    })*/
  }
  render() {
    return (
      <div>
        You are logged in Successfully
      </div>
    )
  }
}
