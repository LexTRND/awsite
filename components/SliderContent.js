import React from "react";
import styled from '@emotion/core';

const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.translate}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`

export default SliderContent