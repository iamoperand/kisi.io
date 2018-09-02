import React, {
  Component,
  Fragment,
} from 'react';
import {
  Table,
  Button,
  message,
} from 'antd';
import PropTypes from 'prop-types';

import LoadingCard from '../LoadingCard';
import StyledComponents from '../StyledComponents';


const {
  CenteredH2,
  NoPaddingCard,
} = StyledComponents;

const unlock = () => {
  message.error('Still in development...');
};

const lock = () => {
  message.error('Still in development...');
};

let index = 0;

const columns = [{
  title: '#',
  dataIndex: '#',
  key: '#',
  render: () => {
    index += 1;
    return (
      <span>{index}</span>
    );
  },
},
{
  title: 'Lock Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Lock Status',
  dataIndex: 'unlocked',
  key: 'unlocked',
  render: unlocked => (
    unlocked === true ? 'Unlocked' : 'Locked'
  ),
},
{
  title: 'Action',
  key: 'action',
  render: (_, record) => (
    record.unlocked === true
      ? (
        <Button onClick={lock}>
          Lock
        </Button>
      )
      : (
        <Button onClick={unlock}>
          Unlock
        </Button>
      )
  ),
}];


class ManageLocks extends Component {
  state = {
    isPageLoading: true,
  }

  async componentDidMount() {
    const { viewCurrentUserLocks } = this.props;
    await viewCurrentUserLocks();
    this.setState({
      isPageLoading: false,
    });
  }

  render() {
    const { isPageLoading } = this.state;
    const { locks } = this.props;
    return (
      <Fragment>
        <CenteredH2
          style={{
            marginTop: '2em',
          }}
        >
          Kisi Dashboard
        </CenteredH2>
        <LoadingCard loading={isPageLoading}>
          <NoPaddingCard
            style={{
              marginTop: '1em',
            }}
          >
            <Table columns={columns} dataSource={locks} rowKey={record => record.id} />
          </NoPaddingCard>
        </LoadingCard>
      </Fragment>
    );
  }
}

ManageLocks.propTypes = {
  locks: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};


export default ManageLocks;
