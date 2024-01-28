'use client'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useReducer } from "react"
import React, { useState } from 'react'
export default function Home() {
  
  let [prompt, setPrompt] = useState(""); // textarea value
  let [globImg, setglobImg] = useState("");
  let [inputPrompt, setInputPrompt] = useState('');
  
  //var globImg="";
  
  //let getRandomInt = (max) => Math.floor(Math.random() * max);
  
  // request template
  let options = {
    method: 'GET',
    //---------------------------------------------------------------------------------------
    //input your API key here, from https://api-ninjas.com/profile
    //---------------------------------------------------------------------------------------
    headers: { 'x-api-key': 'pRXCL0GDhmGy8zZppzQpmA==R51cdw8bZ26UcCjC' }
  }
  let url = 'https://api.api-ninjas.com/v1/emoji?name=';

  async function requestEmoji() {
    // while loading
    const hourglass_image = 'https://api-ninjas-data.s3.us-west-2.amazonaws.com/emojis/U%2B231B.png'
    document.getElementById('emojiImg').src = hourglass_image;
    document.getElementById('emojiImg').className ="text-white pt-12 animate-spin";

    document.getElementById('inputPromptText').textContent = 'Loading...';

    if (prompt == '') prompt = 'red apple';
    const learnRes = await fetch(`http://127.0.0.1:5000/emoji/${prompt}`).then(res=>res.json()).then(data=>console.log(data["prompt"]));
    //console.log(learnRes);
    // make request & update image
    //console.log(learnRes);
    var temp=prompt.replace(/ /g,"");
    console.log(temp)
    setglobImg(`http://127.0.0.1:5000/static/image${temp}.jpg`);

    // fetch(url+prompt,options)
    // .then(res => res.json()) // parse response as JSON
    // .then(data => {
       document.getElementById('inputPromptText').textContent = 'Input prompt here:';
    // if(data.length==0){
    //   document.getElementById("emojiImg").src="https://api-ninjas-data.s3.us-west-2.amazonaws.com/emojis/U%2B2754.png";
    //   document.getElementById("promptText").textContent="No emoji found";
    // }else{
    //   var x =getRandomInt(data.length);
    //   globImg=data[x].image
    //   document.getElementById("emojiImg").src=globImg;
    // }
     document.getElementById('emojiImg').className ="text-white pt-12";

    // })
    // .catch(err => {
    //     console.log(`error ${err}`)
    // });
  }

  return (
    <div className="bg-slate-700 h-screen w-screen flex-col justify-center align-center">
       <div className = "pt-10 flex text-7xl text-slate-800 items-center justify-center text-center">
          {/*<b className="justify-center text-center align-middle">Emoji Generator</b>*/}
          <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
            <div className="rounded-xl p-3 font-serif text-white"><b>Stable Diffusion</b> Emoji Generator</div>
          </motion.div>
        </div>
        <div className="pt-20 flex justify-around h-4/5 w-full">
            <div className="bg-white rounded-xl w-2/5 text-center text-slate-700 align-middle ">
                <div className="pt-4 flex-col h-full justify-center text-black align-center space-y-8">
                   <div className="text-4xl text-slate-700" id='inputPromptText'>
                      Input prompt here:
                   </div>
                   <div>
                    <p id="promptText" className="text-2xl">{prompt}</p>
                   </div>
                   <div className="flex  h-4/5 justify-center">
                    <div className="w-4/5 bg-slate-100 flex-col items-center justify-center h-5/6" method="" >
                      <textarea id="inputEmojiField" className="pl-2 pt-2 text-4xl w-full bg-slate-100 h-full rounded-xl" type="text" placeholder="Prompt" onChange={(e) => {
                        setPrompt(e.target.value);
                      }} name="input" required/>
                      <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 5 }}
                  >
                      <button className="rounded-xl bg-slate-100 p-3 font-serif" onClick={(e) => {requestEmoji()}}>Submit Form</button>
                      </motion.div>
                    </div>
                   </div>
                </div>
            </div>
            <div className="bg-white rounded-full w-2/5 text-center text-slate-700 align-middle ">
                <div className="flex h-full justify-center text-black align-center">
                   <motion.div
                   whileHover={{
                    scale: 1.2,
                    transition: { duration: .5 },
                  }}
                   >
                   <img
                   id="emojiImg"
                   src={globImg}
                   width={450}
                   height={450}
                   alt="Non submitted"
                   className="text-white pt-12 rounded-full"
                   />
                   </motion.div>    
                </div>
            </div>
        </div>
    </div>

  );

}
