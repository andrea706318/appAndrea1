import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { themeColors } from '../theme'
import TiendaCard from './tiendaCard'

export default function featuredRow ({title, description, Tienda}){
  
    return (
      <View>
        <View className="flex-row justify-between items-center px-4">
        <View>
        <Text className="font-bold text-lg">{title}</Text>
        <Text className="text-gray-500 text-xs">
          {description}
        </Text>
        </View>
        <TouchableOpacity>
        <Text style={{color: themeColors.text}}className="front-senibold">See All</Text>
        </TouchableOpacity>
        </View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal:15
        }}
        className="overflow-visible py-5"
        >
          {
            Tienda.map((Tienda, index)=>{
              return (
                <TiendaCard
                item={Tienda}
                key={index}/>
                
              )
            })
          }
        </ScrollView>
      </View>
    )
  
}
