import React, { useState, useEffect, useRef } from 'react'
import { useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components/native'
import firestore from '@react-native-firebase/firestore'

import Loading from '../../../components/Loading/loading.component'
import Player from '../../../components/Player/player.component'
import AsyncStorage from '@react-native-async-storage/async-storage'

type RouteParams = {
  audioId: string
}

import * as S from './player-audio.styles'
import * as T from './player-audio.types'
import { ScrollView } from 'react-native'

const PlayerAudio: React.FC<T.PlayerAudioProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [audio, setAudio] = useState<T.PlayerAudioProps>(
    {} as T.PlayerAudioProps
  )

  const theme = useTheme()
  const route = useRoute()
  const { audioId } = route.params as RouteParams

  useEffect(() => {
    setIsLoading(true)
    firestore()
      .collection<T.PlayerAudioProps>('audios')
      .doc(audioId)
      .get()
      .then(doc => {
        const {
          titulo,
          livro,
          capitulo,
          descricao,
          playlist,
          estudo,
          imagBookItem,
          imagBookPlayer,
          tema,
          time,
          url
        } = doc.data()

        setAudio({
          id: doc.id,
          titulo,
          livro,
          capitulo,
          descricao,
          playlist,
          estudo,
          imagBookItem,
          imagBookPlayer,
          tema,
          time,
          url
        })

        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <LinearGradient
      colors={theme.colors.gradientBlueOne}
      style={{
        flex: 1,
        paddingHorizontal: RFPercentage(3.2),
        paddingVertical: RFPercentage(3),
        paddingTop: RFPercentage(10)
      }}
    >
      <S.ContainerScroll showsVerticalScrollIndicator={false}>
        <S.Container>
          <Player
            Estudo={audio.estudo}
            ImagBookPlayer={audio.imagBookPlayer}
            Titulo={audio.titulo}
            audioUrl={audio.url}
            Description={audio.descricao}
          />
        </S.Container>
      </S.ContainerScroll>
    </LinearGradient>
  )
}

export default PlayerAudio
