'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full justify-around gap-4 border-b border-zinc-800">
        <TabItem
          value="tab1"
          title="Algorithms"
          isSelected={currentTab === 'tab1'}
        />
        <TabItem
          value="tab2"
          title="APIs"
          isSelected={currentTab === 'tab2'}
        />
        <TabItem
          value="tab3"
          title="Animations"
          isSelected={currentTab === 'tab3'}
        />
        <TabItem value="tab4" title="Icons" isSelected={currentTab === 'tab4'} />
        <TabItem value="tab5" title="Blogs" isSelected={currentTab === 'tab5'} />
        <TabItem
          value="tab6"
          title="Colors"
          isSelected={currentTab === 'tab6'}
        />
        <TabItem
          value="tab7"
          title="Tools"
          isSelected={currentTab === 'tab7'}
        />
        <TabItem
          value="tab8"
          title="Fonts"
          isSelected={currentTab === 'tab8'}
        />
        <TabItem
          value="tab9"
          title="Ilustrations"
          isSelected={currentTab === 'tab9'}
        />
        <TabItem
          value="tab10"
          title="UI"
          isSelected={currentTab === 'tab10'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
