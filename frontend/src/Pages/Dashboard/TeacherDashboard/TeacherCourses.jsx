import React, { useState } from 'react'
import Popup from './Popup';

function TeacherCourses() {
  const [showPopup, setShowPopup] = useState(false);
  const [subject, setSubject] = useState('');

  const crreateCourse = (sub)=>{
    setShowPopup(true);
    setSubject(sub);
  }

  return (
    <>
      <div className='flex gap-10 pl-48 mx-48 mt-11 flex-wrap justify-center'>
          <div className="subject cursor-pointer" onClick={()=>crreateCourse("Machine Learning")}>
            <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/8e9bf690d23d886f63466a814cfbec78187f91d2" alt="Machine Learning" />
            <p>Machine Learning</p>
          </div>
          <div className="subject cursor-pointer" onClick={()=>crreateCourse("Web3")}>
            <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/3e546b344774eb0235acc6bf6dad7814a59d6e95" alt="Web3" />
            <p>Web3</p>
          </div>
          <div className="subject cursor-pointer" onClick={()=>crreateCourse("Cyber Security")}>
            <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/28ac70002ae0a676d9cfb0f298f3e453d12b5555" alt="Cyber security" />
            <p>Cyber security</p>
          </div>
          <div className="subject cursor-pointer" onClick={()=>crreateCourse("Networking")}>
            <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/61930117e428a1f0f7268f888a84145f93aa0664" alt="Networking" />
            <p>Networking</p>
          </div>
          <div className="subject cursor-pointer" onClick={()=>crreateCourse("GATE-2026")}>
            <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/a64c93efe984ab29f1dfb9e8d8accd9ba449f272" alt="GATE 2026" />
            <p>GATE 2026</p>
          </div>
      </div>
      {showPopup && (
        <Popup onClose={()=> setShowPopup(false)} subject={subject}/>
      )}
  </>

)}

export default TeacherCourses