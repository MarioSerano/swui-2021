import React from "react"
import tw, { css } from "twin.macro"

import Link from "next/link"

type PopoverOptionType = {
  text: string
  href: string
}

type PopoverType = {
  title: string
  options: PopoverOptionType[]
}

type LinkType = {
  text: string
  href?: string
  popover?: PopoverType
  isButton?: boolean
}

const Links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about-us",
  },
  {
    text: "Event",
    popover: [
      {
        title: "Pre-Event",
        options: [
          {
            text: "Webinar",
            href: "/events/webinar/",
          },
        ],
      },
      {
        title: "Main Event",
        options: [
          {
            text: "Startup Weekend Nextgen - UI",
            href: "/events/startup-weeekend-nextgen-ui/",
          },
        ],
      },
    ],
  },
  {
    text: "Daftar Sekarnag",
    isButton: true,
    href: "",
  },
] as LinkType[]

const renderLinkUtil = (link: LinkType) => {
  if (link.href) {
    return (
      <Link href={link.href}>
        <a>
          <span tw="font-semibold">{link.text}</span>
        </a>
      </Link>
    )
  }

  if (link.isButton) {
    return <></>
  }

  if (link.popover) {
    return <></>
  }
}

const Navbar: React.FC = () => {
  return (
    <div
      tw="fixed top-0 left-0 h-16 w-full"
      css={css`
        box-shadow: 0px 4px 4px 0px #00000040;
      `}
    >
      <div tw="flex py-2 mx-16 justify-between items-center">
        <Link href="/">
          <a>
            <div>
              <img src="/images/navbar/swui-logo.png" alt="logo swui" />
            </div>
          </a>
        </Link>
        <div tw="flex space-x-12">
          {Links.map((link, key) => (
            <div key={key}>{renderLinkUtil(link)}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
