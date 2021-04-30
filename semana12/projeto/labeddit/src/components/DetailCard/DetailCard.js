import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { PostCardDiv, CommentsDiv } from './styled';
import { ThumbUp, ThumbDown } from '@material-ui/icons';
import { likeComment, dislikeComment } from '../../services/votes';
import { useParams } from 'react-router';


const DetailCard = (props) => {
    const params = useParams()
    return (
      <PostCardDiv>
        <Card variant="outlined">
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
                {props.name}
            </Typography>
            <Typography color="textSecondary">
                {props.text}
            </Typography>
            <hr/>
            <CommentsDiv>
                <Typography variant="body2" component="p">             
                    <ThumbUp onClick={()=>likeComment(params.id,props.commentId)}/> {props.votesCount} <ThumbDown onClick={()=>dislikeComment(params.id,props.commentId)}/>
                </Typography>
            </CommentsDiv>
        </CardContent>
        </Card>
      </PostCardDiv>
  );
}

export default DetailCard
