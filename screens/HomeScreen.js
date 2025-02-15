import { View, Text, TextInput, ScrollView } from 'react-native';
import React from 'react'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import {StatusBar}from'expo-status-bar'
import * as Icon from "react-native-feather"; 
import { themeColors } from '../theme';
import Categories from '../Components/categories';
import {featured} from '../constants';
import FeaturedRow from '../Components/featuredRow';

export default function navigation(){
    return(
           
              <SafeAreaView className="bg-white">
                <Statusbar barStyle="dark-content"/>
                <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className='flex-row flex-1 items-center p-3 rounded-full borde border-gray-300'>
                <Icon.Search height="25" width="25" stroke="gray"/>
                <TextInput placeholder='Tu tienda Virtual'className="ml-2 flex-1"/>
                <View className="flex-row items-center space-x-1 border-0 border-1-2 pl-2 border-l-gray-300">
                <Icon.MapPin height="20" width="20" stroke="gray"/>
                <Text className="text-gray-600">Zamora,Mich</Text>

                </View>
                </View>
                <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
                <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
                </View>
                </View>

                {/* main */ }
                <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}>

                    {/* categories */ }
                    <Categories/>

                 {/* fatured */ }
                 <View className="mt-5">
                    {
                    [featured, fatured,fatured].map((item,index)=>{
                        return(
                            <FeaturedRow
                            key = {index}
                            title = {item.title}
                            Tienda={item.Tienda}
                            description={item.description}
                            />
                        )
                    })
                }
                 </View>


                </ScrollView>
            </SafeAreaView>
    )
}