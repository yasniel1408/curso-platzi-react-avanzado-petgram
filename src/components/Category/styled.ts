import { Link } from '@reach/router';
import styled from 'styled-components';
import { fadeIn } from 'styles/animation';

export const Anchor = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  ${fadeIn({ time: '1s', type: 'ease' })}
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`;
