'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import Link from 'next/link'

export interface TabItemsProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabItemsProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-lg font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <Link href={`/session/${title}`}>
        <span>{title}</span>
      </Link>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}