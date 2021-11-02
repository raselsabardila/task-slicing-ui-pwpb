import React from "react"
import { Alert, Button, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, TouchableHighlight, View } from "react-native"
import Tailwind from "../libs/tailwind/tailwind.lib"
import LinearGradient from "react-native-linear-gradient"

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={ "#69DADB" } />
      <ScrollView>
        <ImageBackground
          source={ require("../assets/images/bgheader.png") }
          style={ [Tailwind.style(`w-full h-48 overflow-hidden flex flex-col p-6`), { borderBottomLeftRadius: 50,borderBottomRightRadius: 50 }] }
        >
          <View style={ Tailwind.style(`flex flex-row w-full items-center`) } >
            <Image
              source={ require("../assets/images/userpic.png") }
              style={ Tailwind.style(`w-12 h-12 rounded-full`) }
            />
            <View style={ Tailwind.style(`flex flex-col ml-3`) } >
              <Text style={ Tailwind.style(`text-lg text-white font-mm`) } >
                Rachel Sabardila
              </Text>
              <Text style={ Tailwind.style(`text-xs text-white font-ml`) } >
                $100 USD Wallet
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={ Tailwind.style(`bg-white rounded-xl p-4 mx-6 -mt-24 flex flex-col`) } >
          <Text style={ Tailwind.style(`font-mr text-sm text-gray-400`) } >
            Main Menus
          </Text>
          <View style={ Tailwind.style(`flex flex-row justify-between items-center`) } >
            <View style={ Tailwind.style(`flex flex-col items-center mt-4`) } >  
              <Image
                source={ require("../assets/images/iclist.png") }
                style={ Tailwind.style(`w-10 h-10`) }
              />
              <Text style={ Tailwind.style(`font-mm text-gray-900 mt-1`) } >
                Review
              </Text>
            </View>
            <View style={ Tailwind.style(`flex flex-col items-center mt-4`) } >  
              <Image
                source={ require("../assets/images/icnet.png") }
                style={ Tailwind.style(`w-10 h-10`) }
              />
              <Text style={ Tailwind.style(`font-mm text-gray-900 mt-1`) } >
                Network
              </Text>
            </View>
            <View style={ Tailwind.style(`flex flex-col items-center mt-4`) } >  
              <Image
                source={ require("../assets/images/icplug.png") }
                style={ Tailwind.style(`w-10 h-10`) }
              />
              <Text style={ Tailwind.style(`font-mm text-gray-900 mt-1`) } >
                Plugins
              </Text>
            </View>
            <View style={ Tailwind.style(`flex flex-col items-center mt-4`) } >  
              <Image
                source={ require("../assets/images/icapps.png") }
                style={ Tailwind.style(`w-10 h-10`) }
              />
              <Text style={ Tailwind.style(`font-mm text-gray-900 mt-1`) } >
                Apps
              </Text>
            </View>
          </View>
        </View>
        <View style={ Tailwind.style(`flex flex-col items-center mt-10`) } >
          <Image
            source={ require("../assets/images/icguide.png") }
            style={ Tailwind.style(`w-32 h-32`) }
          />
          <Text style={ Tailwind.style(`font-mm text-xl text-gray-900 mt-3`) } >
            Need a Guide?
          </Text>
          <Text style={ Tailwind.style(`font-mr text-xs text-gray-400 text-center w-1/3 mt-2`) } >
            We will give directions to the now user
          </Text>
          <TouchableHighlight style={ Tailwind.style(`mt-4 rounded-full`) } onPress={ () => Alert.alert("System Info", "kamu telah memencet tombal yah") } >
            <LinearGradient end={ {x: 1, y: 0} } style={ Tailwind.style(`px-6 py-3 rounded-full`) } colors={['#88E0EF', '#A2D2FF']} >
              <Text style={ Tailwind.style(`text-lg font-mm text-white`) } >
                Guide Me
              </Text>
            </LinearGradient>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App