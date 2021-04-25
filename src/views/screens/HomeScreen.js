import React from 'react';
import {Dimensions, Image, SafeAreaView,StyleSheet, Text, View,} from 'react-native';
import {FlatList, ScrollView, TextInput, TouchableHightLight,TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2-20;


const HomeScreen = ({navigation}) => {

    // const Card = ({item}) => {
    //     return(
    //         // <TouchableHightLight
    //         // underlayColor={COLORS.white}
    //         // activateOpacity={0.9}
    //         // onPress={() => navigation.navigate('DetailsScreen', food)}>
    //         // <View style={style.card}>
    //         //     <View style={{alignItems: 'center', top:-40}}>
    //         //         <Image source={food.image} style={{height:120, width:120}}/>
    //         //     </View>
    //         //     <View style={{marginHorizontal:20}}>
    //         //         <Text style={{fontSize:18, fontWeight:'bold'}}>{food.name}</Text>
    //         //         <Text style={{fontSize:14, color:COLORS.grey, marginTop:2}}>{food.ingrediants}</Text>
    //         //     </View>
    //         //     <View style={{marginTop:10,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',}}>
    //         //         <Text style={{fontSize:18,fontWeight:'bold'}}>${food.price}</Text>
    //         //         <View style={style.addToCartBtn}>
    //         //             <Icon name="add" size={20} color={COLORS.grey}/>
    //         //         </View>
    //         //     </View>
    //         // </View>
    //         // </TouchableHightLight>
            
    //     );
    // };
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View style={style.header}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 28}}>Hello,</Text>
                <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
                  ABOULFATH
                </Text>
              </View>
              <Text style={{marginTop: 5, fontSize: 15, color: COLORS.grey}}>
               What Kind of Breakfast do You Want ?
              </Text>
            </View>
            <Image
              source={require('../../assets/person.jpg')}
              style={{height: 50, width: 50, borderRadius: 25}}
            />
          </View>
          <View
            style={{
              marginTop: 40,
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item)=> item.id}
        data={foods}
        renderItem={({item}) => (
            <View style={style.card}>
                <View style={{alignItems: 'center', top:5}}>
                    <Image source={item.image} style={{height:100, width:120}}/>
                </View>
                <View style={{marginHorizontal:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold', top:20}}>{item.name}</Text>
                    <Text style={{fontSize:14, color:COLORS.grey, marginTop:2}}>{item.ingrediants}</Text>
                </View>
                <View style={{marginTop:10,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between',}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>${item.price}</Text>
                    
                    <View style={style.addToCartBtn}>
                        <Icon name="add" type="add-to-card" size={20} color={COLORS.grey}/>
                    </View>
                </View>
            </View>
        )}
      />
        </SafeAreaView>
      );
    };

    const style = StyleSheet.create({
        header: {
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        },
        inputContainer: {
            flex: 1,
            height: 50,
            borderRadius: 10,
            flexDirection: 'row',
            backgroundColor: COLORS.light,
            alignItems: 'center',
            paddingHorizontal: 20,
        },
        card: {
            height: 240,
            width: cardWidth,
            marginHorizontal: 10,
            marginBottom: 20,
            marginTop: 50,
            borderRadius: 15,
            elevation: 13,
            backgroundColor: COLORS.white,
          },
          addToCartBtn: {
            height: 30,
            width: 30,
            borderRadius: 20,
            backgroundColor: COLORS.primary,
            justifyContent: 'center',
            alignItems: 'center',
          },
    
    });





















export default HomeScreen;