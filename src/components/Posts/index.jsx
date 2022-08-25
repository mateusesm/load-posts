import { PostCard } from '../PostCard'

import './styles/style.css'

export const Posts = ({posts}) => {

    return (
    
        <div className="posts">

            {posts.map(post => (

                <PostCard

                    key={post.id}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    cover={post.cover} 
                    
                />            

            ))}

        </div>
    )

}