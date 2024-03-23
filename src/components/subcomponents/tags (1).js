import React from 'react'

function Tags(props){ 
    console.log(props.tags.length)
    let tagHTML = ""
    for(let i=0;i<props.tags.length;i++){
       tagHTML += '<a href=\'#'+props.tags[i]+'\'>#'+props.tags[i]+' </a>'
    }
    
   return(
    <div dangerouslySetInnerHTML={{__html : tagHTML}}></div>
   )
}

export default Tags
