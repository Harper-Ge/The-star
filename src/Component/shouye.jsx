import '../css/shouye.css'
import { Link} from "react-router-dom";
export default function Shouye(){
    return(
     
   
        <div className= 'backGround-shouye'>
     
          <div className='buju-shouye'>
          <form  className="form-shouye" id="form-shouye">
            <div className='xingbiao'></div>
            <p className='xingshe'>星社</p>
            <h2>Sign in</h2>
            
            <nav>
     <div > <Link className='tiaozhuang1' to="/login">用已有账户进行登录</Link></div>
     
     <div ><Link className='tiaozhuang2' to="/zhuce">没有账号？立即注册</Link></div>
      </nav>
             <div>
         </div>
        <div className='image-box'></div>
        </form>
        </div>
    </div>
    );
}