'use client'

import { ElementType } from "react"
import { Logo } from "./Logo"

export interface CardItemProps {
     title: string,
     logo: ElementType
}

export function CardItem({ title, icon: Icon }: NavItemProps) {
     return (
          <Logo />
          <DescriptionText />
     )
}