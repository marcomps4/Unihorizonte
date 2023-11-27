import React from "react";
import { useState } from "react";
import '../componentes/blog/blog.css';
import {CardBlog} from "../componentes/blog/BlogCard";
import BlogData from '../componentes/BlogData';


const Blog = () => {
  
  



    return(
        <>
    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 posts-list">

        {
                              BlogData.map((container, index) => {
                                return (
                                  <CardBlog
                                    key={index}
                                    {...container}
                                    />
                                )
                              })
        }

 

        </div>
        
        <div className="blog-pagination">
          <ul className="justify-content-center">
            <li><a href="#">1</a></li>
            <li className="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </div>

      </div>
    </section>

        </>
    )
}

export default Blog