import React, { useEffect, useState } from 'react'
import './List.css'
// import { url, currency } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
  
  const new_url = "https://bon-appetit-backend-i7li.onrender.com";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${new_url}/api/food/list`);
    if(response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }

  const removeFood = async(foodId) => {
    const response = await axios.post(`${new_url}/api/food/remove`, {id:foodId})
    await fetchList();
    if(response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
        </div>
        {list.map((item, index)=>{
            return (
              <div key={index} className='list-table-format'>
                <img src={`${new_url}/images/` + item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default List

/**
 * TODO: 5:48:51 upload all the 32 food items one by one from the frontend assets
 */
