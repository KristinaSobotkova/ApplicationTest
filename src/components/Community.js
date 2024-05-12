import React, { useState } from 'react';
import '../styles/Community.css'; 

function Community() {
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        category: '',
        content: ''
    });
    const [editingId, setEditingId] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            ...formData,
            id: Date.now(), 
            likes: 0,
            comments: []
        };
        if (editingId) {
            const updatedPosts = posts.map(post => post.id === editingId ? newPost : post);
            setPosts(updatedPosts);
            setEditingId(null);
        } else {
            setPosts([...posts, newPost]);
        }
        setFormData({ title: '', author: '', category: '', content: '' }); 
    };

    const handleEdit = (post) => {
        setFormData(post);
        setEditingId(post.id);
    };

    const handleDelete = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    const handleLike = (id) => {
        const updatedPosts = posts.map(post => 
            post.id === id ? { ...post, likes: post.likes + 1 } : post
        );
        setPosts(updatedPosts);
    };

    const handleAddComment = (id, comment) => {
        const updatedPosts = posts.map(post => {
            if (post.id === id) {
                return { ...post, comments: [...post.comments, comment] };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    return (
        <div className='community'>
            <h2 className='heading'>Community Posts</h2>
            <form onSubmit={handleSubmit} className="form">
                <input className='input' type="text" name="title" placeholder="Post Title" value={formData.title} onChange={handleChange} />
                <input className='input' type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
                <input className='input' type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
                <textarea className='text' name="content" placeholder="Content" value={formData.content} onChange={handleChange} />
                <button className='button' type="submit">{editingId ? 'Update' : 'Add'} Post</button>
            </form>
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h3 className='heading'>{post.title}</h3>
                        <p>{post.content}</p>
                        <small>Author: {post.author}, Category: {post.category}</small>
                        <button className='button' onClick={() => handleLike(post.id)}>Like ({post.likes})</button>
                        <button className='button' onClick={() => handleEdit(post)}>Edit</button>
                        <button className='button' onClick={() => handleDelete(post.id)}>Delete</button>
                        {post.comments.length > 0 && (
                            <ul className='ul'>
                                {post.comments.map((comment, index) => (
                                    <li key={index}>{comment}</li>
                                ))}
                            </ul>
                        )}
                        <form className='form' onSubmit={(e) => {
                            e.preventDefault();
                            handleAddComment(post.id, e.target.comment.value);
                            e.target.comment.value = ''; 
                        }}>
                            <input className='input' name="comment" type="text" placeholder="Add a comment..." />
                            <button className='button' type="submit">Comment</button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Community;