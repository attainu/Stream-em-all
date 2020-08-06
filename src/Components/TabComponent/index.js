import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabNavDoor from './TabNavDoor';
import TabNavDevice from './TabNavDevice';
import TabNavPrice from './TabNavPrice';
import './index.css';

const TabComponent = () => {
  return (
    <div>
      <Tabs className='TabComponent'>
        <TabList className='TabList'>
          <Tab>
            <TabNavDoor />
            <p>
              <strong>
                No commitments <br /> Cancel online anytime
              </strong>
            </p>
          </Tab>
          <Tab>
            <TabNavDevice />
            <p className='TabNavDevice'>
              <strong>Watch anytime</strong>
            </p>
          </Tab>
          <Tab>
            <TabNavPrice />
            <p>
              <strong>Pick your price</strong>
            </p>
          </Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default TabComponent;
