import React, {FC} from 'react';
import {IPost} from "../models/IPost";


const PostsList: FC<{ posts: IPost[] }> = ({posts}) => {

    return (
        <div className={"container"}>
            <div className={"row"}>

                {posts.length>0 ? posts.map((post) => {
                    return <div key={post.id} className={"col-lg-4 col-sm-6 col-xs-12"}>
                        <div className={"card mb-3 p-4 post"}>
                            <h5 className="card-title">{post.title}</h5>
                            <p>{post.body}</p>
                            <div className={"post_authors"}>
                                {post.author.name}
                            </div>
                        </div>
                    </div>
                }):<div className={"text-center p-4"}><i>Нет постов соответствующих фильтру</i></div>}
            </div>
        </div>

    );
};

export default PostsList;