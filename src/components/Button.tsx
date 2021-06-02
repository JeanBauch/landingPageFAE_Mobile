import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps {
  title: string
}

export function Button(props: ButtonProps){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', width: '100%', marginRight: '25%' }}>

          <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.font}>
              {props.title}
            </Text>
          </View>

          <Feather 
            name="arrow-right"
            size={24}
            color= {colors.primary}
          />

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    borderTopWidth: 1,
    borderColor: colors.linegray,
    //paddingHorizontal: '15%',
    justifyContent: 'center',
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  font: {
    width: '100%',
    fontSize: 14,
    //width: '90%',
    fontFamily: fonts.medium,
    color: colors.white,
    paddingRight: '4%',
    textAlign: 'right',
    flexShrink: 1,
  },
})