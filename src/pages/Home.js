import React from 'react'
import {useState,useEffect} from 'react'
import {getDocs,collection, deleteDoc, doc} from 'firebase/firestore'
import {auth, db} from "../firebase-config"
import backgroundpPix from '../helper/background2.jpg'
const Home = (isAuth) => {
  const[postLists, setPostList]=useState([]);
     const  PostCollectionRef=collection(db,"posts")


useEffect(()=>{ 
const getPosts=async()=>{
 const data= await getDocs(PostCollectionRef);
 setPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
} ;

getPosts(); 

})
const deletePost=  async(id)=>{
   
  const postDoc= doc(db,"posts",id)
  await deleteDoc(postDoc)
}
  return (
    <div className='homePage' style={{ backgroundImage: `url(${ backgroundpPix })` }}>        


    {postLists.map((post)=>{
      return (
        <div className='post'>
      <div className='postHeader'>
       <div className='title'>
       <h1> {post.title}</h1>
      </div> 
       <div className='deletePost'>
       {isAuth && post.author.id=== auth.currentUser.uid && (<button
         onClick={()=>{
           deletePost(post.id)
          }}> 

       {""}
       
       X
       </button>
       )}
       </div>
       </div>
<div className="postTextContainer">{post.postText}</div>
<h3>@{post.author.name}</h3>
       </div>
      ); 
    })}
    </div>
  )
}

export default Home