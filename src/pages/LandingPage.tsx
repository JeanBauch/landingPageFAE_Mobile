import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from '../components/Button';
import { Feather } from '@expo/vector-icons';
import colors from '../styles/colors';
import { CardAddress } from '../components/CardAddress';
import { CardMoreInfo } from '../components/CardMoreInfo';
import fonts from '../styles/fonts';

export function LandingPage() {
  return(
    <ScrollView style={styles.container}>
      <StatusBar />
      <View style={styles.content}>
        <Image 
          source={require('../assets/HeaderLogo.png')}
          resizeMode="contain"
          style={styles.HeaderLogo}
        />
        <Text style={styles.HeaderDescription}>
          Chegamos com uma equipe de mestres{'\n'}experientes no mercado, programa proprio de{'\n'}parcelamento estudantil e reconhecimento:{'\n'}
          <Text style={[styles.HeaderDescription, {fontFamily: fonts.medium}]}>NOTA MÁXIMA NO MEC!</Text>
        </Text>

        <View style={styles.cursesContainer}>
          <Text style={styles.font}>
            _nossos
            <Text style={[styles.font, {color:colors.white, fontFamily: fonts.medium}]}> cursos</Text>
          </Text>

          <View style={{ borderBottomWidth: 1, borderColor: colors.linegray }}>
            <Button title="ADMINISTRAÇÃO"/>
            <Button title="CIÊNCIAS CONTÁBEIS"/>
            <Button title="ENGENHARIA DE PRODUÇÃO"/>
            <Button title="ENGENHARIA ELÉTRICA"/>
            <Button title="ENGENHARIA MÊCANICA"/>
          </View>

          <TouchableOpacity>
            <Text style={[styles.fontSegundary, {alignSelf: 'flex-end'}]}>
              CURSOS EM
                <Text style={[styles.HeaderDescription, {fontFamily: fonts.medium, fontSize: 12}]}> OUTRAS CIDADES</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: '100%', position: 'relative'}}>
          <View style={{ width: '100%', height: 80, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
              source={require('../assets/wrapper01.png')}
            />
          </View>
          <View style={styles.aboutInscriptions}>
            <Text style={styles.fontInscriptionsHeading}>
              Estão abertas as inscrições{'\n'}para o <Text style={[styles.fontInscriptionsHeading, {fontFamily: fonts.medium, fontSize: 28}]}>vestibular 2019</Text>
            </Text>

            <Text style={styles.fontInscriptionsBody}>
              Você pode usar sua nota do{'\n'}
              Enem ou agendar a prova para{'\n'}
              o dia que preferir. As inscrições{'\n'}
              são gratuitas. E quanto antes{'\n'}
              fizer sua matrícula, maior o{'\n'}
              desconto na primeira{'\n'}
              mensalidade! ;)
            </Text>

            <View style={{flex: 1, flexDirection: 'row', paddingTop: '4%'}}>
              <TouchableOpacity style={styles.buttonInscriptions}>
                <Text style={{fontFamily: fonts.medium, fontSize: 16, color: colors.white, marginRight: '2%'}}>
                  INSCREVA-SE!
                </Text>
                <Feather 
                  name="chevron-down"
                  size={36}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: '100%', height: 80,flex: 1, backgroundColor: colors.primary}}>
            <Image 
              source={require('../assets/ImagePerson.png')}
              resizeMode="contain"
              style={styles.imageInscriptions}
            />
            <Image 
              source={require('../assets/wrapper02.png')}
            />
          </View>
      </View>
      
      <CardAddress />
      <CardMoreInfo />

      <View style={styles.footer}>
        <Image 
          source={require('../assets/Logo.png')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    marginVertical: '3%',
    marginHorizontal: '6%',
  },
  HeaderLogo: {
    marginTop: '2%',
    marginBottom: '8%',
  },
  HeaderDescription: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.white,
    lineHeight: 25,
    marginBottom: '8%',
  },
  cursesContainer: {
    flex: 1,
  },
  font: {
    fontSize: 20,
    fontFamily: fonts.light,
    color: colors.primary,
    marginBottom: '4%',
  },
  fontSegundary: {
    fontSize: 12,
    fontFamily: fonts.light,
    color: colors.white,
    paddingTop: '4%',
  },
  aboutInscriptions: {
    width: '100%',
    height: 380,
    paddingHorizontal: '3%', 
    backgroundColor: colors.primary
  },
  fontInscriptionsHeading: {
    fontSize: 24,
    fontFamily: fonts.regular,
    color: colors.secondary,
    marginBottom: '4%'
  },
  fontInscriptionsBody: {
    fontSize: 16,
    fontFamily: fonts.light,
    color: colors.secondary,
    lineHeight: 30,
  },
  imageInscriptions: {
    position: 'absolute',
    width: 400, 
    height: 400,
    bottom: 0,
    left: 115,
  },
  buttonInscriptions: {
    width: 180,
    height:50,
    borderRadius: 8,
    marginLeft: '2%',
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    margin: '6%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})