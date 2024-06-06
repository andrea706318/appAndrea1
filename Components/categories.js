import React, { Component, useState } from 'react'
import { ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function categories () {
  const [activeCategory, setActiveCategory] = useState(null);
    return (
      <View className="mt-4">
       <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       className="overflow-visible"
       contentContainerStyle={{
        paddingHorizontal:15
       }} >

        {
         categories.map((category, index)=>{
            let isActive = category.id == activeCategory;
            let btnClass= isActive? 'bg-gray-600': 'bg-gray-200';
            let textClass = isActive? 'font-semibold text-gray-800': 'text-gray-500';
          return(
            <View key={index}className="flex justufy-center items-center mr-6" >
                <TouchableOpacity
                onPress={()=> setActiveCategory(category.id)}
                className={"p-1 rounded-full shadow bg-gray-200"+btnClass}>
                    <Image style={{width: 45,heiht: 45}}
                    source={category.image}/>
                
                </TouchableOpacity>
                <Text className={"text-sm"+textClass}>{category.name}</Text>
            </View>
          )
         })

        }

    
       </ScrollView>
      </View>
    )
  }
