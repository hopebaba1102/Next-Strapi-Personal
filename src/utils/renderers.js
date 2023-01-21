import React, { useState, useEffect } from "react"
//import Image from "next/legacy/image";
import Link from "next/link"
import styled from "styled-components"

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
`

const renderers = {
  img: (props) => {
    const src = props.src
    const alt = props.alt
    const title = props.alt.replace(".png", "").toLowerCase()
    return props.src.startsWith("/") ? (
      <img
        {...props}
        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${src}`}
        layout="responsive"
        loading="lazy"
      />
    ) : (
      <img src={src} alt={alt} title={title} href={src} loading="lazy" />
    )
  },
  a: ({ children, href, title, alt }) => {
    return href.startsWith("/") ? (
      <Link className="external-link" href={href} title={title} alt={alt}>
        {children}
      </Link>
    ) : (
      <a
        className="internal-link"
        href={href}
        title={title}
        alt={alt}
        rel="nofollow noopener"
      >
        {children}
      </a>
    )
  },
}

export default renderers
