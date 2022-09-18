import {Link} from 'react-router-dom'
import {useState} from 'react'

const Form = ()=>{

 const [name, setName] = useState()
 const [age, setAge] = useState()
 const [gender, setGender] = useState()
 const [region, setRegion] = useState()
 const [food, setFood] = useState()

    return(
        <div className="profile">
        
            <div>
                <p>Tell me about yourself</p>
              <form>
                <input
                type="text"
                name={"name"}
                placeholder={"Name..."}
                onChange = {(e) => setName(e.target.value)}
                />
                 <input
                type="text"
                name={"age"}
                placeholder={"Age..."}
                onChange = {(e) => setAge(e.target.value)}
                />
                 <input
                type="text"
                name={"Gender"}
                placeholder={"Gender..."}
                onChange = {(e) => setGender(e.target.value)}
                />
                 <input
                type="text"
                name={"Origins"}
                placeholder={"Place of Origins..."}
                onChange = {(e) => setRegion(e.target.value)}
                />
                 <input
                type="text"
                name={"food"}
                placeholder={"Favorite Sustenance..."}
                onChange = {(e) => setFood(e.target.value)}
                />
                
              </form>
              <Link to="/game">
              <button type="submit">Play</button></Link>
         
            </div>
        </div>
    )
}

export default Form