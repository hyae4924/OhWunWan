import styled from "styled-components"
import STYLE from "../../config"

const Content = styled.div`
  width: ${STYLE.WIDTH};
  font-size: 1em;
  margin-left: 0.2em;
`

PostContent.defaultProps = {
  text: '텍스트가 들어갈 자리입니다'
}

function PostContent({text}) {
  return (
    <Content>{text}</Content>
  )
}

export default PostContent