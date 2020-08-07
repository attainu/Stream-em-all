import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabNavDoor from './TabNavDoor';
import TabNavDevice from './TabNavDevice/TabNav';
import TabNavPrice from './TabNavPrice';
import TabContentDevice from './TabNavDevice/TabContentDevice';
import './index.css';

const TabComponent = () => {
  const [select, setSelect] = useState('door');

  return (
    <div>
      <Tabs className='TabComponent'>
        <TabList className='TabList'>
          <Tab
            onClick={() => setSelect('door')}
            className={select === 'door' && 'active tab-selected'}
          >
            <TabNavDoor />
            <p className='tab-door'>
              <strong>
                No commitments <br /> Cancel online anytime
              </strong>
            </p>
          </Tab>

          <Tab
            onClick={() => setSelect('device')}
            className={select === 'device' && 'active tab-selected'}
          >
            <TabNavDevice />
            <p className='TabNavDevice'>
              <strong>Watch anytime</strong>
            </p>
          </Tab>

          <Tab
            onClick={() => setSelect('price')}
            className={select === 'price' && 'active tab-selected'}
          >
            <TabNavPrice />
            <p>
              <strong>Pick your price</strong>
            </p>
          </Tab>
        </TabList>

        {/*Tab Content*/}
        <TabPanel>
          <TabContentDevice />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabComponent;
