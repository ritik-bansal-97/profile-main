import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../styles/resume.css'
import profilePic from '../images/profileImage.jpg'
function Resume(props){
    console.log("<<<<<<<", props);
    if(props.resume){
        return (
            <div className='resume'>
               <div className='profilePicContainer'>
                   <img src={profilePic} className="profilePic"/>
                   <div className='profileInfo'>
                       <p className='name'>Ritik Bansal</p>
                       <p className='designation mt-0'>Programmer</p>
                    </div>
               </div>
               <div className='displayFlex'>
                   <div className='leftContainer'>
                       <div>
                           <h1 className='heading'>Profile</h1>
                           <p className='paragraphFont'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id, quae aut illum quidem culpa magnam rerum voluptatum officiis aliquid magni. Expedita explicabo porro commodi ipsa cupiditate ad fuga sed iste nisi, quisquam, alias, dolorem nam molestiae! Aliquam aut quisquam, fuga beatae ea qui. Ab dignissimos placeat fugiat modi! Sint!</p>
                       </div>
                       <div>
                           <h1 className='heading'>Employment History</h1>
                           <p className='paragraphFont'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id, quae aut illum quidem culpa magnam rerum voluptatum officiis aliquid magni. Expedita explicabo porro commodi ipsa cupiditate ad fuga sed iste nisi, quisquam, alias, dolorem nam molestiae! Aliquam aut quisquam, fuga beatae ea qui. Ab dignissimos placeat fugiat modi! Sint!</p>
                       </div>
                       <div>
                           <h1 className='heading'>Education</h1>
                           <p className='paragraphFont'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id, quae aut illum quidem culpa magnam rerum voluptatum officiis aliquid magni. Expedita explicabo porro commodi ipsa cupiditate ad fuga sed iste nisi, quisquam, alias, dolorem nam molestiae! Aliquam aut quisquam, fuga beatae ea qui. Ab dignissimos placeat fugiat modi! Sint!</p>
                       </div>
                       <div>
                           <h1 className='heading'>Internships</h1>
                           <p className='paragraphFont'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id, quae aut illum quidem culpa magnam rerum voluptatum officiis aliquid magni. Expedita explicabo porro commodi ipsa cupiditate ad fuga sed iste nisi, quisquam, alias, dolorem nam molestiae! Aliquam aut quisquam, fuga beatae ea qui. Ab dignissimos placeat fugiat modi! Sint!</p>
                       </div>
                       <div>
                           <h1 className='heading'>Hobbies</h1>
                           <p className='paragraphFont'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id, quae aut illum quidem culpa magnam rerum voluptatum officiis aliquid magni. Expedita explicabo porro commodi ipsa cupiditate ad fuga sed iste nisi, quisquam, alias, dolorem nam molestiae! Aliquam aut quisquam, fuga beatae ea qui. Ab dignissimos placeat fugiat modi! Sint!</p>
                       </div>
                       <div>
                           <h1 className='heading'>Hobbies</h1>
                           <p className='paragraphFont'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id, quae aut illum quidem culpa magnam rerum voluptatum officiis aliquid magni. Expedita explicabo porro commodi ipsa cupiditate ad fuga sed iste nisi, quisquam, alias, dolorem nam molestiae! Aliquam aut quisquam, fuga beatae ea qui. Ab dignissimos placeat fugiat modi! Sint!</p>
                       </div>
                       <div>
                           <h1 className='heading'>Hobbies</h1>
                           <p className='paragraphFont'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id, quae aut illum quidem culpa magnam rerum voluptatum officiis aliquid magni. Expedita explicabo porro commodi ipsa cupiditate ad fuga sed iste nisi, quisquam, alias, dolorem nam molestiae! Aliquam aut quisquam, fuga beatae ea qui. Ab dignissimos placeat fugiat modi! Sint!</p>
                       </div>
                       <div>
                           <h1 className='heading'>Hobbies</h1>
                           <p className='paragraphFont'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id, quae aut illum quidem culpa magnam rerum voluptatum officiis aliquid magni. Expedita explicabo porro commodi ipsa cupiditate ad fuga sed iste nisi, quisquam, alias, dolorem nam molestiae! Aliquam aut quisquam, fuga beatae ea qui. Ab dignissimos placeat fugiat modi! Sint!</p>
                       </div>
                       <div>
                           <h1 className='heading'>Hobbies</h1>
                           <p className='paragraphFont'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id, quae aut illum quidem culpa magnam rerum voluptatum officiis aliquid magni. Expedita explicabo porro commodi ipsa cupiditate ad fuga sed iste nisi, quisquam, alias, dolorem nam molestiae! Aliquam aut quisquam, fuga beatae ea qui. Ab dignissimos placeat fugiat modi! Sint!</p>
                       </div>
                       
                   </div>
                   <div className='rightContainer'>
                        <div>
                           <h1 className='heading'>Details</h1>
                           <p className='paragraphFont' >9643848482</p>
                           <p className='paragraphFont'>ritikbansal987654@gmail.com</p>
                       </div>
                       <div>
                           <h1 className='heading'>Skills</h1>
                           <p className='paragraphFont'>Lorem ipsum dolor sit amet</p>
                       </div>
                   </div>
               </div>
            </div>
        )
    }else{
        return(
            <></>
        )
    }
    
}

export default Resume
