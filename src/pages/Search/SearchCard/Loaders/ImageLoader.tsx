import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={260}
    viewBox="0 0 400 460"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    {/*<rect x="18" y="13" rx="2" ry="2" width="284" height="284" /> */}
    <rect x="45" y="45" rx="2" ry="2" width="460" height="460" />
  </ContentLoader>
)

export default ImageLoader