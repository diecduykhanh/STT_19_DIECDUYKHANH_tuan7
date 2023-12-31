import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-web'

const Four_B = (props) => {
  // Lấy navigate và route từ props
  const { navigation, route } = props
  const { navigate, goBack } = navigation

  // Lấy kích thước toàn màn hình
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  const [data, setData] = useState([
    {
      id: 1,
      image: require('./assets/usb1.png'),
    },
    {
      id: 2,
      image: require('./assets/usb2.png'),
    },
    {
      id: 3,
      image: require('./assets/usb3.png'),
    },
    {
      id: 4,
      image: require('./assets/usb4.png'),
    },
    {
      id: 5,
      image: require('./assets/usb5.png'),
    },
    {
      id: 6,
      image: require('./assets/usb6.png'),
    },
  ])

  const [start, setStart] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ])
  return (
    <View
      style={{
        height: screenHeight,
        width: screenWidth,
      }}
    >
      <View
        style={{
          height: screenHeight * 0.073,
          width: screenWidth,
          backgroundColor: '#1ba9ff',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            goBack()
          }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
              marginHorizontal: 15,
            }}
            source={require('./assets/back.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: '#fff',
          }}
        >
          Chat
        </Text>
        <Image
          style={{
            height: 30,
            width: 30,
            marginHorizontal: 15,
          }}
          source={require('./assets/cart.png')}
        />
      </View>

      <ScrollView
        style={{
          marginBottom: screenHeight * 0.08,
        }}
      >
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            flex: 1,
            flexWrap: 'wrap',
          }}
        >
          {data.map((item, index) => (
            <View
              style={{
                width: screenWidth * 0.5,
                height: screenHeight * 0.3,
              }}
            >
              <Image
                source={item.image}
                style={{
                  height: screenHeight * 0.13,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  marginTop: 8,
                  marginHorizontal: 30,
                  color: 'black',
                  fontWeight: '400',
                }}
              >
                Cáp chuyển từ Cổng USB sang PS2...
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 30,
                }}
              >
                {start.map((item, index) => (
                  <Image
                    source={require('./assets/star.png')}
                    style={{
                      marginTop: 5,
                      height: 17,
                      width: 17,
                      marginStart: 1,
                      marginEnd: 3,
                      tintColor: item.id == 5 ? '#d6d6d6' : '',
                    }}
                  />
                ))}
                <Text
                  style={{
                    marginHorizontal: 3,
                    color: 'black',
                  }}
                >
                  (15)
                </Text>
              </View>
              <View
                style={{
                  marginTop: 6,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 30,
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#212121',
                    fontSize: 16,
                  }}
                >
                  69.900 đ
                </Text>
                <Text
                  style={{
                    marginHorizontal: 15,
                    color: '#8c8c8c',
                  }}
                >
                  -39%
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: screenHeight * 0.08,
          width: screenWidth,
          backgroundColor: '#1ba9ff',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            height: 30,
            width: 30,
            marginHorizontal: 15,
          }}
          source={require('./assets/menu.png')}
        />
        <Image
          style={{
            height: 30,
            width: 30,
            marginHorizontal: 15,
          }}
          source={require('./assets/home.png')}
        />
        <TouchableOpacity
          onPress={() => {
            goBack()
          }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
              marginHorizontal: 15,
            }}
            source={require('./assets/back_bottom.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Four_B

const styles = StyleSheet.create({})
