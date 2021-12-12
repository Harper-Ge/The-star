import '../css/login.css'
import { Link } from 'react-router-dom';
import React,{Component, useState} from 'react';
import axios from 'axios';

export  default function  Zhuce (){
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const [studentid,setStudentid]=useState('');
 const [vcode,setVcode]=useState('');
 const [vcodebutton,setVcodebutton]=useState({
    btnText: '发送验证码',
    btnBool: false,
 });
 let maxTime  = 60;
 const service=axios.create({
  baseURL:'http://120.76.142.160:9999',
  timeout:5000,
});

function SendVcode(){
  return  (
    console.log("发送成功"),
    console.log(1), setInterval(() => {
 
  if (maxTime > 0) {
    --maxTime
    setVcodebutton({
      btnText: '重新获取' + '('+maxTime+')',
      btnBool: true
    })
  }
  else {
    setVcodebutton({
      btnText: '发送验证码',
      btnBool: false
    })
  }
 } , 1000) ,
 
 service.post('/sendverifycode',{
  "email":email,
   }).then(res => {
        if(res.status===200){
       console.log("发送成功",res);
}
}
)
.catch(error=>{alert("发送失败，请检查邮箱是否有误")
  console.log("发送失败",error);
}
)
)
}
function Senduser(){
  service.post('/register',{
  "email":email,
  "studentid":studentid,
  "password":password,
  "vcode":vcode,
}).then(res=>{
    if(res.status===200){
      console.log("注册成功",res);
      window.history.pushState({}, undefined, "/login");
      window.location.reload();
}
  }
  )
.catch(error=>{
  console.log("发送失败",error);
  alert("注册失败")
}
)
}
    return (
 <>
        <div className= 'backGround-denglu'>
           
          <div >
               <Link className="huiTui" to="/">返回</Link> 
          </div>
             <div className="buju-denglu">
  
            
                <form  className="form-denglu" id="form-denglu">
                <h3>你好，欢迎使用星社</h3>
                <div className="gekai"></div>
                <p className="p1">您的邮箱：</p>
                <input name="email" type="email"   className="input" value={email} onChange={e=>{setEmail(e.target.value)}}></input>
                <div className="gekai"></div>
                <p className="p1">您的密码：</p>
                <input name="password"  type="password"  className="input" value={password} onChange={e=>{setPassword(e.target.value)}} ></input>
                <div className="gekai"></div>
                <p className="p1">您的学号：</p>
                <input name="xuehao"  type="text"  className="input" value={studentid} onChange={e=>{setStudentid(e.target.value)}}></input>
                <div className="gekai"></div>
                <p className="p1">获取验证码：</p>
                <input name="vcode"  type="text"  className="input" value={vcode} onChange={e=>{setVcode(e.target.value)}}></input>
                <button className='btn1' type='primary' onClick={(e)=>{e.preventDefault();
                  SendVcode()}} disabled={vcodebutton.btnBool}>{vcodebutton.btnText}</button>
                  <p className='shu'>|</p>
                <button className="btn" onClick={(e)=>{e.preventDefault();
                  Senduser()}}  >立即注册</button>
                </form>
             </div> 
           </div>
  </> 
    );
}



