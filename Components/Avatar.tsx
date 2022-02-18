import { Image, ImageSourcePropType } from 'react-native'

interface AvatrProps {
  src: ImageSourcePropType
  size: number
}

const Avatar = ({ src, size }: AvatrProps) => {
  return (
    <Image
      source={src}
      style={{ width: size, height: size, borderRadius: size }}
    />
  )
}

export default Avatar
