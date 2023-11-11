import { useForm } from "react-hook-form";
import {API_GET_FEEDBACK} from "../../../components/constants";
import { v4 } from "uuid";
// import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { InputStyle, ExtendInputStyle } from "../../InputStyle";
import useFetch from "../../../hook/useFetch";

async function fetchSetData(data){
  console.log('fetchSetData', data)
  fetch(API_GET_FEEDBACK,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({data})
  })
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
  const { data: feedback } = useFetch(API_GET_FEEDBACK);
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
        <Input secondary={errors.firstName} placeholder="firstName" {...register("firstName", { required: true, maxLength: 20 })} />
        {errors.firstName && <span>maxLength 20</span>}
        <InputStyle placeholder="lastName" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        {errors.lastName && <span>英文字母</span>}
        <Input secondary={errors.age} placeholder="age" type="number" {...register("age", { min: 18, max: 99 })} />
        {errors.age && <span>age 18~99</span>}
        <ExtendInput placeholder="說明文字" {...register("intro", { required: true })} />
        {errors.intro && <span>This field is required</span>}
        <Button type="submit">submit</Button>
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

const Input = styled.input`
  margin: 5px auto;
  ${(props) => 
    (props.primary &&
      css`
        border: 2px solid green;
      `
    ) ||
    (props.secondary &&
      css`
        border: 2px solid red;
      `
    )
  }
`;
const ExtendInput = styled(Input)`
  color: gray;
  font-weight: bold;
`; 
const Button = styled.button.attrs({className:"button-style"})`
  width: 100%;
  background-color: green;
  color: white;
  &:hover{
    background-color: aquamarine;
    color: green;
  }
`

export default From;