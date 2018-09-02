import {
  Card,
} from 'antd';
import styled from 'styled-components';


const CenteredH2 = styled.h2`
  text-align: center;
`;

const NoPaddingCard = styled(Card)`
  .ant-card-body {
    padding: 0px;
  }
`;


export default {
  CenteredH2,
  NoPaddingCard,
};
