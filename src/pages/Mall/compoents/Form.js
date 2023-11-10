import { useForm } from "react-hook-form";
import {API_GET_FEEDBACK} from "../../../components/constants";
import { v4 } from "uuid";
import { useEffect, useState } from "react";

async function fetchSetData(data){
  console.log('fetchSetData', data)
  fetch(API_GET_FEEDBACK,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
}

async function fetchFeedback(setFeedback){
  fetch(API_GET_FEEDBACK).then((res)=>{
    return res.json();
  }).then(({data})=>{
    setFeedback(data);
  });
}

// async function deleteFeedback(id){
//   fetch(`${API_GET_FEEDBACK}/data/${id}`,{
//     method: "DELETE",
//     headers: {
//       'Content-Type':'application/json'
//   }
//   }).then(()=>{
//     console.log(`delete id ${id}`)
//   })
// }

const From = ()=>{
  const [feedback, setFeedback] = useState(null);
  useEffect(()=>{
    fetchFeedback(setFeedback)
  },[])
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    fetchSetData({
      id: v4(),
      ...data
    })
  };
  
  return (
    <div>
      From
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="firstName" {...register("firstName", { required: true, maxLength: 20 })} />
        {errors.firstName && <span>maxLength 20</span>}
        <input placeholder="lastName" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        {errors.lastName && <span>英文字母</span>}
        <input placeholder="age" type="number" {...register("age", { min: 18, max: 99 })} />
        {errors.age && <span>age 18~99</span>}
        <input placeholder="說明文字" {...register("intro", { required: true })} />
        {errors.intro && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <div>
        {
          JSON.stringify(feedback) !== '{}'? (<div>
            蒐集feedback
            <div>{feedback?.lastName} 先生/小姐</div>
            <div>{feedback?.intro}</div>
            {/* <button onClick={()=>deleteFeedback(feedback?.id)}>delete</button> */}
          </div>):''
        }
      </div>
    </div>
  )
}

export default From;