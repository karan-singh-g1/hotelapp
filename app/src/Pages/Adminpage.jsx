import React from 'react'
import "./Adminpage.css"

const Adminpage = () => {
  return (
    <div>
        <h1>AdminPage</h1>
        <div className='maincontainer'>
            <div>
            <label >Type of room:</label>

<select name="cars" id="cars">
  <option value="">none</option>
  <option value="family">Family</option>
  <option value="deluxe">deluxe</option>
  <option value="suite">suite</option>
</select>
{"     "}
<label>image url :  </label>
<input type="text" placeholer="image_url"/>
            </div>
            <div></div>
        </div>



    </div>
  )
}

export default Adminpage