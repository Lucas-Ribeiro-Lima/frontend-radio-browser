import React from "react"

type HeaderWrapperProps = {
  children: React.ReactNode
}

export function HeaderWrapper({ children }: Readonly<HeaderWrapperProps>) {
  return (
    <header className="flex justify-center">
      {children}
    </header>
  )
}

type HeaderTitleProps = {
  title: string
}

export function HeaderTitle({ title }: Readonly<HeaderTitleProps>)  {
  return(
    <h1 className="text-2xl font-semibold text-center">
      {title}
    </h1>
  )
}