import styled from "styled-components";
import { Fragment } from "react";
import STYLE from "../../config";

// header, 마진
import HeaderBlock from "../Organism/HeaderBlock";
import MarginBox from "../Atoms/MarginBox";

// 더미 사진
import user from "../Picture/HeaderButton/user.png"

// img
import pic1 from "../Picture/ContentPicture/pic1.webp"

// Atoms
import FeedbackCategory from "../Atoms/FeedbackCategory"
import ProfilePicture from "../Atoms/ProfilePicture"
import Id from "../Atoms/Id";
import MenuButton from "../Atoms/MenuButton";
import ContentPicture from "../Atoms/ContentPicture";
import LikeButton from "../Atoms/LikeButton";
import CommentButton from "../Atoms/CommentButton";
import LikeCounts from "../Atoms/LikeCounts"
import CommentCounts from "../Atoms/CommentCounts"
import ContentTime from "../Atoms/ContentTime";
import ContentText from "../Atoms/ContentText"
import Comment from "../Atoms/Comment"
import CommentInput from "../Atoms/CommentInput"
import CommentSubmit from "../Atoms/CommentSubmit";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const PostBlock = styled.div`
  margin-bottom: 2em;
`
const Box = styled.div`
  width: ${STYLE.WIDTH};
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

const BorderBox = styled.div`
  width: ${STYLE.WIDTH};
  display: flex;
  align-items: center;
  border: 0.1em solid ${STYLE.BORDER_COLOR};
`

const BetweenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${STYLE.WIDTH};
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

function Feedback() {

  return(
    <Fragment>
      <Wrap>
        <HeaderBlock />
        <MarginBox />

        <Box>
          <BetweenBox>
            <FeedbackCategory subject='전체 게시물' select='select' />
            <FeedbackCategory subject='미채택 게시물' />
            <FeedbackCategory subject='채택 게시물' />
          </BetweenBox>
        </Box>

        <PostBlock>
          <BorderBox>
            <BetweenBox>
              <FlexBox>
                <ProfilePicture img={user} />
                <Id nickname='손흥민'></Id>
              </FlexBox>
              <MenuButton />
            </BetweenBox>
          </BorderBox>
          
          <BorderBox>
            <ContentPicture img={pic1} />
          </BorderBox>

          <Box>
            <FlexBox>
              <LikeButton />
              <CommentButton />
            </FlexBox>
            <BetweenBox>
              <FlexBox>
                <LikeCounts count='0' />
                <CommentCounts count='0' />
              </FlexBox>
              <ContentTime time='2022-06-10 20:40:08' />
            </BetweenBox>
          </Box>

          <Box>
            <ContentText text='텍스트가 들어갈 자리입니다' />
          </Box>
          
          <Box>
            <FlexBox>
              <ProfilePicture img={user} />
              <Id nickname='helloworld123' />
              <Comment text='댓글이 들어갈 자리입니다'/>
            </FlexBox>
          </Box>
            
          <BorderBox>
            <CommentInput />
            <CommentSubmit />
          </BorderBox>
        </PostBlock>


      </Wrap>
    </Fragment>
  )
}

export default Feedback