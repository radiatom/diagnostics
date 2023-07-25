import React, { useEffect } from "react";
import "./Blogs.scss";
import { useDispatch, useSelector } from "react-redux";
import { blogLoadSelector, blogsSelector } from "../../selectors/selectors";
import { setBlogs } from "./reducerBlogs";
import Blog from "./Blog/Blog";
import Pageloader from "../Pageloader/Pageloader";

const Blogs = () => {
    const load = useSelector(blogLoadSelector);
    const blogsData = useSelector(blogsSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setBlogs());
        window.scrollTo(0, 0);
    }, [blogsData]);
    return (
        <div>
            {load ? (
                <Pageloader />
            ) : (
                <div className="blogs">
                    <h1 className="blogs__title title" tabIndex="0">
                        Наші статті
                    </h1>
                    <div className="blogs__body">
                        {blogsData.map((el) => {
                            return (
                                <Blog
                                    key={el.id}
                                    img={el.foto}
                                    title={el.title}
                                    text={el.text}
                                    navLink={el.navLink}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blogs;
