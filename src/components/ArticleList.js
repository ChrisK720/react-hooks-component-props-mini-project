import React from "react"

function ArticleList(props){
    return (
        <main>
       {props.posts.map((post) => (
        
       <li key={post.id}>
        <h3>{post.title}</h3>
        <small>{post.date ? post.date : "January 1, 1970"}</small>
        <p>{post.preview}</p>
        

       </li>
       ))}
    


        </main>

    );
}


export default ArticleList;

// Make an ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop to ArticleList)
// make sure to assign a unique key prop to each Article
