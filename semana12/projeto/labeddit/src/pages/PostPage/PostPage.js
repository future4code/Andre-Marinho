import React from 'react'
import { useParams } from 'react-router-dom'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import { PostContainer, ScreenContainer } from './styled'
import { Typography } from '@material-ui/core'
import DetailCard from '../../components/DetailCard/DetailCard'
import CommentForm from './CommentForm'

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const post = useRequestData([],`${BASE_URL}/posts/${params.id}`)[0]
    const detailPost = post.post
    console.log(detailPost)

    return (
        <div>
            <CommentForm id={params.id}/>
            <ScreenContainer>                      
                {detailPost &&           
                <PostContainer>
                    
                    <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{detailPost.title}</Typography>
                    <Typography gutterBottom align={'center'} variant={'h7'} color={'primary'}>{detailPost.username}</Typography>
                    <Typography align={'center'}>{detailPost.text}</Typography>
                    {detailPost.comments.map((comment) => {
                        return (
                                <DetailCard 
                                    name={comment.username} 
                                    text={comment.text}
                                    votesCount={comment.votesCount}
                                    commentId={comment.id}
                                    />                           
                                )
                    })}
                </PostContainer>}
            </ScreenContainer>
        </div>
    )
}

export default PostPage