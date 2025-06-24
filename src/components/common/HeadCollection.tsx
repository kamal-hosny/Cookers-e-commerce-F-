
interface IProps {
    image: string
}

const HeadCollection = ({ image }: IProps) => {
  return (
    <div
    className="absolute w-screen h-[600px] top-0 left-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${image})`,
    }}
  ></div>
  )
}

export default HeadCollection