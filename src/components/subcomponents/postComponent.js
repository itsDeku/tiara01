import React from 'react'

function PostComponent(props) {
	
	return (
		<div id='first' className="posts-component">
			<div className="posts-top">
				<div className="posts-users-img"><img src="user.png" width="25px" height="25px" alt=""></img></div>
			<div className="posts-users-name">{props.postsData.postId}</div>
				<div className="posts-users-dehaze">
					<span className="iconify" data-inline="false" data-icon="ant-design:more-outlined" style={{ fontSize: 24 + 'px', color: 'black' }}></span>
				</div>
			</div>
			<div className="posts-img">
				<img src={props.postsData.postImg} alt="sd" style={{ width: 100 + '%', height: 216 + 'px' }}></img>
			</div>
			<div className="posts-bottom">
				<div className="posts-like-logo">
					<span className="iconify" data-inline="false" data-icon="carbon:favorite-filled" style={{ fontSize: 24 + 'px', color: '#EB5757' }}></span>
				</div>
				<div className="posts-comments-logo">
					<span className="iconify" data-inline="false" data-icon="bx:bxs-comment-detail" style={{ fontSize: 24 + 'px', color: 'rgba(0, 0, 0, 0.8)' }}></span>
				</div>
				<div className="posts-details">
					<div className="likes" ><span><b>likes: </b> 458</span></div>
					<div className="top-comment"><span><b>dilip singh: </b>pretty nice</span></div>
					<div className="viewall"><b><a href="first" style={{ color: 'black' }}>view all</a></b></div>
					<div className="comment"><u>comment something</u></div>
				</div>
			</div>
		</div>
	)
}

export default PostComponent