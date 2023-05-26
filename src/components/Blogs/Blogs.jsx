import React, { useEffect } from "react";
import "./Blogs.scss";
import { useDispatch, useSelector } from "react-redux";
import { blogsSelector } from '../../selectors/selectors';
import { setBlogs } from "../../reactRedux/reducerBlogs";
import Blog from "./Blog/Blog";



const Blogs = () => {
   const blogsData=useSelector(blogsSelector)
   const dispatch =useDispatch()
   useEffect(()=>{
      dispatch(setBlogs())
      console.log(blogsData)
   },[blogsData])
    return (
        <div className="container">
            <div className="blogs">
                <h1 className="blogs__title title">Наші статті</h1>
                <div className="blogs__body">
                    {blogsData.map(el=>{
                        return (<Blog key={el.id} img={el.foto} title={el.title} text={el.text} navLink={el.navLink} />)
                    })}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
