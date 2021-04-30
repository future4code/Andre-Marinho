import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {ThumbUp, ThumbDown} from '@material-ui/icons/';
import Typography from '@material-ui/core/Typography';
import { PostCardDiv, CommentsDiv } from './styled';


const DetailCard = (props) => {
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
        </CardContent>
        </Card>
      </PostCardDiv>
  );
}

export default DetailCard
