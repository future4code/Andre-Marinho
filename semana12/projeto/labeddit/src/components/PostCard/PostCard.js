import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {ThumbUp, ThumbDown} from '@material-ui/icons/';
import Typography from '@material-ui/core/Typography';
import { PostCardDiv, CommentsDiv } from './styled';
import { dislikePost, likePost } from '../../services/votes'


const PostCard = (props) => {
  return (
      <PostCardDiv >
        <Card variant="outlined">
        <CardContent>
            <div >
            <Typography color="textSecondary" gutterBottom>
                {props.username}
            </Typography>
            <Typography variant="h5" component="h2">
                {props.title}
            </Typography>
            <Typography color="textSecondary">
                {props.text}
            </Typography>
            <hr/>
            </div>
            <CommentsDiv>
                <Typography variant="body2" component="p">             
                    <ThumbUp onClick={()=>likePost(props.id)}/> {props.votesCount} <ThumbDown onClick={()=>dislikePost(props.id)}/>
                </Typography>
                <Typography variant="body2" component="p">
                        Comentários: {props.commentsCount}
                </Typography>
            </CommentsDiv>
        </CardContent>
        </Card>
      </PostCardDiv>
  );
}

export default PostCard
