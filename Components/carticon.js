import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { themeColors } from '../theme'

export default function CarIcon (){
  render() 
    return (
      <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity
        style={{backgroundColor: themeColors.bgColor(1)}}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
          <View className="p-2 px-4 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.3)'}}>
          <Text className="font-extrabold text-white text-lg">
              3
          </Text>
          </View>
          <Text className="flex-1 text-center front-extrabold text-white text-lg">
               View Cart
          </Text>
          <Text className="font-extrabold text-white text-lg">
              ${23}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

