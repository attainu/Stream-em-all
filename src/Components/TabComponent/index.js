import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// Tab Navs
import TabNavDoor from './TabNavDoor/TabNavDoor';
import TabNavDevice from './TabNavDevice/TabNavDevice';
import TabNavPrice from './TabNavPrice/TabNavPrice';
// Tab contents
import TabContentDevice from './TabNavDevice/TabContentDevice';
import TabContentDoor from './TabNavDoor/TabContentDoor';
import TabContentPrice from './TabNavPrice/TabContentPrice';
// Css
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
          <TabContentDoor />
        </TabPanel>
        <TabPanel>
          <TabContentDevice />
        </TabPanel>
        <TabPanel>
          <TabContentPrice />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabComponent;
