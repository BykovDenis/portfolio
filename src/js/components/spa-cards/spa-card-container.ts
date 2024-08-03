import styled from "styled-components";

type TSiteCardContainer = {
	step: number,
}

const SpaCardContainer = styled.div<TSiteCardContainer>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  transform: translateX(${(props: TSiteCardContainer) => props.step * 553 * -1}px);
  transition: transform 1s ease-in-out;
`

export default SpaCardContainer;
