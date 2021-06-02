import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function CardAddress(){
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.fontHeading}>
          _nosso{'\n'} <Text style={styles.fontHeadingBold}> endereço</Text>
        </Text>
        <Text style={styles.fontHeadingBody}>
          Rua São Vicente de Paulo, 1060{'\n'}
          Centro / Araucária - PR
        </Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <Text style={[styles.fontHeadingBold, {fontSize: 14}]}>
              VER MAPA
            </Text>
          </TouchableOpacity>
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
  },
  btnContainer: {
    width: 100,
    height: 50,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  }
})