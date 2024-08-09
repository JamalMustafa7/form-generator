import React, { useState } from 'react'
import style from './signup.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram,FaXTwitter,FaTiktok } from "react-icons/fa6";
export const Signup = () => {
    const[fileName,setFileName]=useState("");
    console.log(fileName);
  return (
    <div className={style.signup}>
        <div className={style['survey-info']}>
            <div className={style['logo-and-socials']}>
                
                <div className={style.logo}>
                    <img src="/resources/logo.png" alt="Logo" />
                </div>
                <div className={style.socials}>
                    <div>
                        <FaFacebook />
                    </div>
                    <div>
                        <FaInstagram />
                    </div>
                    <div>
                        <FaXTwitter />
                    </div>
                    <div>
                        <FaTiktok /> 
                    </div>
                </div>
            </div>
            <div className={style['signup-img']}>
                <img src="/resources/signup-survey-img.svg" alt="not found" />
            </div>
            <div className={style.description}>
                <div className={style['test-type']}>
                    Satisfaction Test
                </div>
                <p className={style['test-info']}>
                Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel. Adhuc invidunt duo ex. Eu tantas dolorum ullamcorper qui.
                </p>
            </div>
            <p className={style.copyright}>
                &copy; 2024 <a href="https://www.linkedin.com/in/muhammad-jamal-mustafa-2021cs631/" target='_blank'>Jamal Mustafa</a>
            </p>
        </div>
        <div className={style['signup-info']}>
            <div className={style['signup-info-child']}>

            <div className={style.count}>
                1/5
            </div>
            <p className={style.advise}>
                Please fill with your details
            </p>
            <form action="">
                <input type="text" placeholder='First Name' name='fname'/>
                <input type="text" placeholder='Last Name' name='lname'/>
                <input type="email" placeholder='Your Email' name='email'/>
                <input type="text" placeholder='Your Country' list='cities'/>
                <datalist id='cities'>
                    <option value="Pakistan" />
                    <option value="India" />
                    <option value="Bangladesh" />
                </datalist>
                <div className={style['age-container']}>
                    <input type="number" placeholder='Age'/>
                    <div>
                        <input type="radio" name="gender" />
                        <label> Male</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" />
                        <label> Female</label>
                    </div>
                </div>
                <div className={style['file-input-container']}>
                    <label for="file-upload" className={style['upload-file-button']}>Upload File</label>
                    <input type="file" id="file-upload" style={{display: "none"}} onChange={(e)=>{
                        let arr;
                        if(e.target.value.includes('\\'))
                        {
                            arr=e.target.value.split("\\")
                        }
                        else if (e.target.value.includes('//')){
                            arr=e.target.value.split("//")
                        }
                        else{
                            arr=[e.target.value]
                        }
                        setFileName(arr[arr.length-1])
                    }}/>
                    <div className="fileName">{fileName}</div>
                </div>
            </form>
            </div>
            
        </div>
    </div>
  )
}
