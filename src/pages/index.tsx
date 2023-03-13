import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/normalize.css"
import "../styles/styles.scss"
import Background from "../components/Background/Background"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Background />
      {/* <h1>Hello</h1> */}
    </main>
  ) 
}

export default IndexPage

export const Head: HeadFC = () => <title>Carolyn McNeillie</title>
