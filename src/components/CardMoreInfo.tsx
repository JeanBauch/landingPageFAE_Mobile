import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import { FontAwesome } from '@expo/vector-icons';
import fonts from '../styles/fonts';

export function CardMoreInfo(){
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.fontHeading}>
          _mais{'\n'} <Text style={styles.fontHeadingBold}> informações</Text>
        </Text>

        <View style={{flexDirection: 'row',alignItems: 'center'}}>
          <FontAwesome 
            name="whatsapp"
            size={28}
            color={colors.primary} 
          />
          <Text style={styles.fontHeadingBody}>
            41 99277-7200
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome 
            name="envelope-o"
            size={26}
            color={colors.primary} 
          />
          <Text style={styles.fontHeadingBody}>
            vestibular@fae.edu
          </Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '3%',
    marginTop: '6%',
    height: 200,
    backgroundColor: colors.secondaryLight,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    marginHorizontal: '8%',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  fontHeading: {
    fontSize: 22,
    fontFamily: fonts.light,
    color: colors.primary,
  },
  fontHeadingBold: {
    fontSize: 22,
    fontFamily: fonts.medium,
    color: colors.white,
  },
  fontHeadingBody: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.white,
    marginLeft: '4%'
  },
})