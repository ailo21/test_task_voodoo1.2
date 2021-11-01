import React, {useEffect, useMemo, useState} from 'react';
import {IPost} from "../models/IPost";
import PostService from "../api/PostsApi";
import PostsList from "./PostsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from "./Filter";

const PostsContainer = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [filter, setFilter] = useState('');

    function loadPosts() {
        const fetchPosts = async () => {
            const responsePosts = await PostService.getAll();
            const responseAuthor = await PostService.getAuthors();

            return responsePosts.data.map((post) => {
                post.author = responseAuthor.data.filter(f => f.id === post.userId)[0];
                return post;
            });
        }
        fetchPosts().then((r) => {
            setPosts(r);
        });
    }

    useEffect(() => {
        loadPosts();
    }, [])

    const filteredPosts = useMemo(() => {
        if (filter.length > 0) {
            return posts.filter(f => f.author.name.toLowerCase().includes(filter.toLowerCase()));
        }
        return posts;
    }, [filter,posts])

    return (
        <div className={"page"}>
            <Filter filter={filter} setFilter={setFilter}/>
            <PostsList posts={filteredPosts}/>
        </div>
    );
};

export default PostsContainer;