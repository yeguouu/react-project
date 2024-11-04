'use client'
import { useState } from "react";
import TopImg from './assets/img/TopImg.png'
import './style.css';

type user = 
  {
    name:'xx',
    age:1,
    score:1,
  }

function NameButton({onClick}) {
  return (
    <div>
      <div className="button" onClick={onClick}>信息</div>
    </div>
  );
}
function AddButton({onClick}) {
  return (
    <div>
      <div className="button" onClick={onClick}>+1</div>
    </div>
  );
}
function ReduceButton({onClick}) {
  return (
    <div>
      <div className="button" onClick={onClick}>-1</div>
    </div>
  );
}

export default function Home(){
  const [userList,setUserList]=useState([] as Array<user>);

  async function handleClick (){
    let res = await fetch('http://localhost:3000/users/user',{
      method:"GET",
    })
    res = await res.json();
     let userList = res.map(i=>{
      console.log('i',i);
      return {
        name:i.name,
        age:i.age,
        score:i.score,
      }
    })

    setUserList(
      userList
    )
  }
  async function handleClickAdd (){
    let res = await fetch('http://localhost:3000/users/user/add',{
      method:"GET",
    })
    res = await res.json();
     let userList = res.map(i=>{
      console.log('i',i);
      return {
        name:i.name,
        age:i.age,
        score:i.score,
      }
    })

    setUserList(
      userList
    )
  }
  async function handleClickReduce (){
    let res = await fetch('http://localhost:3000/users/user/reduce',{
      method:"GET",
    })
    res = await res.json();
     let userList = res.map(i=>{
      console.log('i',i);
      return {
        name:i.name,
        age:i.age,
        score:i.score,
      }
    })

    setUserList(
      userList
    )
  }
  
  return(
    <div>
      {
        userList.map(i=>{
          return (
            <div>
              <div>姓名：{i.name}</div>
              <div>年龄：{i.age}</div>
              <div>分数：{i.score}</div>
            </div>
          )
        })
      } 
      <NameButton onClick={handleClick}></NameButton>
      <AddButton onClick={handleClickAdd}></AddButton>
      <ReduceButton onClick={handleClickReduce}></ReduceButton>
    </div>
  )
}







function AdButton({onClick}) {
  return (
    <div>
      <div onClick={onClick} className="button">count+</div>
    </div>
  )
}
function SmallButton({onClick}) {
  return (
    <div>
      <div onClick={onClick} className="button">count-</div>
    </div>
  )
}
// export default function New(){
//   const [count1,setCount1]=useState(100)
//   function handleClick1(){
//     setCount1(count1+1)
//   }
//   function handleClick2(){
//     setCount1(count1-1)
//   }
//   return(
//     <div>
//       <div>{count1}</div>
//       <AdButton onClick={handleClick1}></AdButton>
//       <SmallButton onClick={handleClick2}></SmallButton>
//     </div>
//   )
// }