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
  function AddButton({onClick}) {
    return (
      <div>
        <div className="button" onClick={onClick}>+</div>
      </div>
    );
  }
  function DeleteButton({onClick}) {
    return (
      <div>
        <div className="button" onClick={onClick}>-</div>
      </div>
    );
  }
  function EditButton({onClick}) {
    return (
      <div>
        <div className="button" onClick={onClick}>修改</div>
      </div>
    );
  }
function QueryButton({onClick}) {
  return (
    <div>
      <div className="button" onClick={onClick}>信息</div>
    </div>
  );
}


export default function Home(){
  const [userinfo,setUserInfo]=useState({});

  async function Add (){
    let res = await fetch('http://localhost:3000/users/user/add',{
      method:"GET",
    })
    res = await res.json();
    console.log("添加成功",res);
  }
  async function Delete (){
    let res = await fetch('http://localhost:3000/users/user/delete',{
      method:"GET",
    })
    console.log("删除成功",res);
  }
  async function Edit (){
    let res = await fetch('http://localhost:3000/users/user/edit',{
      method:"GET",
    })
    console.log("修改成功",res); 
  }
  async function Query (){
    let res = await fetch('http://localhost:3000/users/user/query',{
      method:"GET",
    })
    res = await res.json();
     let userinfo = res

     setUserInfo(
      userinfo
    )
  }
  
  return(
    <div>

       

            <div>
              <div>姓名：{userinfo.name}</div>
              <div>年龄：{userinfo.age}</div>
              <div>分数：{userinfo.score}</div>
            </div>



      <QueryButton onClick={Query}></QueryButton>
      <AddButton onClick={Add}></AddButton>
      <DeleteButton onClick={Delete}></DeleteButton>
      <EditButton onClick={Edit}></EditButton>
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