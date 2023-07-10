import styled from "styled-components";

type TSiteCardContainer = {
	step: number,
	isSpaCard?: boolean,
}

const SiteCardContainer = styled.div<TSiteCardContainer>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  transform: translateX(${(props: TSiteCardContainer) => props.step * (props.isSpaCard ? 553 : 378) * -1}px);
  transition: transform 1s ease-in-out;
`

export default SiteCardContainer;
