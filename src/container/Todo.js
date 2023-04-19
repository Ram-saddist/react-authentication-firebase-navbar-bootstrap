import {useState} from 'react'
import {db} from './firebaseConfig'
import firebase from 'firebase/compat/app'

function Todo(){
	const [newValue,setNewValue]=useState("")
	async function store(){
		//console.log("backend code")
		let newDate=firebase.firestore.Timestamp.now()
		//console.log("time",firebase.firestore.Timestamp.now())
		const response=await db.collection("time").add({
			date:newDate,
			todoMsg:newValue
		})
		console.log(response)
		setNewValue("")
	}
	return(
		<div>
			<input 
				placeholder="Ad new TODO"
				value={newValue}
				onChange={(e)=>setNewValue(e.target.value)}/>
			<button onClick={store}>Submit</button>
		</div>
	)
}
export default Todo
