import React from 'react'

const profilePostsBox = (props) => {
    return(
        <div className="posts-box col-4" style={{ padding: 0 +'px',border: 'none'}} >
            <img src={props.postsBoxData.postImg} alt="sd" style={{ width: 100 + '%', height: 100 + '%'}}></img>
        </div>
    )

}

export default profilePostsBox