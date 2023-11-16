export default function Heading({type, title}) {
  const HeadingElement = type;
  return (
    <HeadingElement>{title}</HeadingElement>
  )
}