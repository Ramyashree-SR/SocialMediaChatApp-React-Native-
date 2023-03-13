import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Bottomnavbar from '../../Components/Bottomnavbar'
import { formHead } from '../../CommonCss/formcss'
import { container, searchbar } from '../../CommonCss/paagecss'
import TopNavBar from '../../Components/TopNavBar'
import UserCards from '../../Cards/UserCards'


const SearchPage = ({navigation}) => {

  let data=[
    {
      userName:"Dhanika",
      profile_pics:"https://picsum.photos/seed/korben/200/300"
    },
    {
      userName:"Varuksha",
      profile_pics:"https://picsum.photos/200/300/?blur"
    },
    {
      userName:"Vihani",
      profile_pics:"https://picsum.photos/200/300?grayscale"
    },
    {
      userName:"Anika",
      profile_pics:"https://picsum.photos/seed/picsum/200/300"
    },
    {
      userName:"Jahanvi",
      profile_pics:"https://picsum.photos/seed/korben/200/300"
    },
    {
      userName:"Dhwithiya",
      profile_pics:"https://picsum.photos/seed/korben/200/300"
    },
    {
      userName:"Yukthi",
      profile_pics:"https://picsum.photos/200"
    },
    {
      userName:"Monogna",
      profile_pics:"https://picsum.photos/id/1/200/300"
    },
    {
      userName:"Dhanika_RS",
      profile_pics:"https://picsum.photos/seed/picsum/200/300"
    },
    {
      userName:"Aarvi_v",
      profile_pics:"https://picsum.photos/200/300"
    }
  ]
  return (
    <View style={styles.container} >
      <StatusBar/>
      <TopNavBar navigation={navigation}/>
      <Bottomnavbar navigation={navigation} page="SearchPage"/>
      <Text style={formHead}>Search User</Text>
      <TextInput placeholder="Search by Username.." style={searchbar}/>
      
      <ScrollView Style={styles.userLists}>
      {

data.filter(user).map((item,index)=>{
  return <UserCards key={item.userName} user={item}/>
})
}
      </ScrollView>
      
    </View>
  )
}

export default SearchPage

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"white",
    paddingVertical:50
  }
})