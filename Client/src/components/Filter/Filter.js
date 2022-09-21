import React from 'react'
import '../../css/Filter/Filter.css'

 function Filter() {
  return (
    <div className="Filter-Wrapper">
      <h2 className='Filter-Title'>Filter</h2>
      <div className='Num-Of-Products'>Numbers of Product : 4</div>
      <div className='Filter-By-Siza'>
        <span>Filter : </span>
        <select className='Filter-Select'>
          <option value="ALL">ALL</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
        </select>
      </div>

      <div className='Filter-By-Siza'>
        <span>Order : </span>
        <select className='Filter-Select'>
          <option value="Lastest">Lastest</option>
          <option value="Lowest">Lowest</option>
          <option value="Highest">Highest</option>
        </select>
      </div>

    </div>
  )
}


export default Filter;