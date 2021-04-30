import React, { useEffect, useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import PostCard from '../../components/PostCard/PostCard'
import { goToPost } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import PostForm from './PostForm'
import axios from 'axios'

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [feed, setFeed] = useRequestData([], `${BASE_URL}/posts`)
    console.log(feed)
    

    const onClickCard = (id) => {
        goToPost(history,id)
    }

    const postsCard = feed.posts && feed.posts.map((post) => {
        return (           
                <PostCard
                    key = {post.id}
                    title={post.title}
                    username={post.username}
                    text={post.text}
                    votesCount={post.votesCount}
                    commentsCount={post.commentsCount}
                    onClick={() => onClickCard(post.id)}
                    id={post.id}
                    setFeed = {setFeed}
                />  
                )
    })

    console.log(feed.posts)

    return (
        <div>
            <PostForm feed={feed} setFeed={setFeed}/>
            {postsCard}
        </div>
    )
}

export default FeedPage