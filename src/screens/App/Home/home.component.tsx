import React, { useCallback, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import useHome from './home.hook'
import Toast from 'react-native-toast-message'
import {
  FontAwesome5,
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
  AntDesign
} from '@expo/vector-icons'
import Loading from '../../../components/Loading/loading.component'

import * as S from './home.styles'
import * as T from './home.types'

const Home: React.FC<T.HomeProps> = () => {
  const [isLoading, setIsLoading] = useState(false)

  const auth = useHome()
  const userName = auth.users.name

  const navigator = useNavigation()
  const theme = useTheme()

  const updateHomeData = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }, [])

  useFocusEffect(updateHomeData)

  if (isLoading) {
    return <Loading />
  }

  return (
    <LinearGradient
      colors={theme.colors.gradientBlueTwo}
      style={{
        flex: 1,
        paddingHorizontal: RFPercentage(3.2),
        paddingVertical: RFPercentage(3.2),
        paddingTop: RFPercentage(10)
      }}
    >
      {/* PROFILE CONTENT */}
      <S.ContainerProfile>
        <S.TextProfile>Olá, {userName}</S.TextProfile>

        <S.ProfileButton onPress={() => navigator.navigate('Profile')}>
          <FontAwesome5
            name="user-circle"
            size={24}
            color={theme.colors.white300}
          />
        </S.ProfileButton>
      </S.ContainerProfile>

      {/* EXPLORE CONTENT */}
      <S.ContainerExplore>
        <S.TextExplore>Explore</S.TextExplore>

        <S.ContainerExploreBook
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <S.ButtonExplore onPress={() => navigator.navigate('Genesis')}>
            <S.TextExploreBook>Gênesis</S.TextExploreBook>
          </S.ButtonExplore>

          <S.ButtonExplore onPress={() => navigator.navigate('Exodo')}>
            <S.TextExploreBook>Êxodo</S.TextExploreBook>
          </S.ButtonExplore>

          <S.ButtonExplore onPress={() => navigator.navigate('Levitico')}>
            <S.TextExploreBook>Levítico</S.TextExploreBook>
          </S.ButtonExplore>
          <S.ButtonExplore onPress={() => navigator.navigate('Numeros')}>
            <S.TextExploreBook>Números</S.TextExploreBook>
          </S.ButtonExplore>
        </S.ContainerExploreBook>
        <S.ContainerButtonAllChapter
          onPress={() => navigator.navigate('Books')}
        >
          <S.TextButtonAllChapter>Ver todos</S.TextButtonAllChapter>
          <AntDesign
            name="arrowright"
            size={15}
            color={theme.colors.white400}
          />
        </S.ContainerButtonAllChapter>

        {/* Search Theme */}
        <S.ContainerTheme>
          <S.TextTheme>Encontre seu tema favorito</S.TextTheme>

          <S.ContainerCardsTheme>
            <TouchableOpacity onPress={() => navigator.navigate('Leis')}>
              <S.CardsTheme background="#FFF066">
                <S.TextCardsTheme>Leis</S.TextCardsTheme>
                {/* Icon */}
                <FontAwesome5 name="church" size={25} color="#101010" />
              </S.CardsTheme>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.navigate('Historicos')}>
              <S.CardsTheme background="#5F78FF">
                <S.TextCardsTheme>Históricos</S.TextCardsTheme>
                {/* Icon */}
                <FontAwesome5 name="praying-hands" size={25} color="black" />
              </S.CardsTheme>
            </TouchableOpacity>
          </S.ContainerCardsTheme>

          <S.ContainerCardsTheme>
            <TouchableOpacity onPress={() => navigator.navigate('Poeticos')}>
              <S.CardsTheme background="#67FE7F">
                <S.TextCardsTheme>Poéticos</S.TextCardsTheme>
                {/* Icon */}
                <MaterialIcons
                  name="family-restroom"
                  size={25}
                  color="#101010"
                />
              </S.CardsTheme>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigator.navigate('Profeticos')}>
              <S.CardsTheme background="#FF9E57">
                <S.TextCardsTheme>Proféticos</S.TextCardsTheme>
                {/* Icon */}
                <Entypo name="chat" size={25} color="#101010" />
              </S.CardsTheme>
            </TouchableOpacity>
          </S.ContainerCardsTheme>
          <S.ContainerCardsTheme>
            <TouchableOpacity
              onPress={() => navigator.navigate('EvangelhoAtos')}
            >
              <S.CardsTheme background="#E1E1E1">
                <S.TextCardsTheme>Evangelhos{'\n'}e Atos</S.TextCardsTheme>
                {/* Icon */}
                <MaterialCommunityIcons
                  name="church"
                  size={25}
                  color="#101010"
                />
              </S.CardsTheme>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigator.navigate('CartasApocalipse')}
            >
              <S.CardsTheme background="#FF6464">
                <S.TextCardsTheme>Cartas e Apocalipse</S.TextCardsTheme>
                {/* Icon */}
                <MaterialCommunityIcons
                  name="heart-pulse"
                  size={25}
                  color="#101010"
                />
              </S.CardsTheme>
            </TouchableOpacity>
          </S.ContainerCardsTheme>
        </S.ContainerTheme>
      </S.ContainerExplore>

      <Toast position="top" />
    </LinearGradient>
  )
}

export default Home
