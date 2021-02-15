import React,  { useEffect } from "react"
import styled from 'styled-components';
import media from 'styled-media-query';
const prism = require("prismjs")
require('prismjs/components/prism-python');
require('prism-themes/themes/prism-vs.css')

const Container = styled.div`
`

export default function Layout({ children }) {
  
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <>
      <Container>{children}</Container>
    </>
  )
}
