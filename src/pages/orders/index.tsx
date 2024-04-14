import { useLoad } from '@tarojs/taro'
import './index.less'
import { View } from '@tarojs/components'

export default function Index() {

  // /#EAE3D2

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <>
      <View>123</View>
    </>
  )
}
