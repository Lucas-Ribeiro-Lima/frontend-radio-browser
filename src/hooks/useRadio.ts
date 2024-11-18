import { Station } from '@/domain/type'
import { Howl } from 'howler'
import { useCallback, useEffect, useState } from 'react'
import { useToast } from './use-toast'

export function useRadio() {
  const { toast } = useToast()
  const [ station, setStation ] = useState<Station | null>(null)
  const [ player, setPlayer ]  = useState<Howl | null>(null)
  const [ isPlaying, setIsPlaying ] = useState(false) 
  const [ isLoading, setIsLoading ] = useState(false)

  const toggle = useCallback(() => {
    if(player) {
      return (player.playing()) ? player.pause() : player.play()
    }}, [player])


  const changeStation = useCallback((station: Station) => {
    player?.unload()
    setStation(station)
  }, [player])

  useEffect(() => {
    if(station) {
      setIsLoading(true)
      const howl = new Howl({
        src: [station.url],
        html5: true,
        format: [station.codec],
        autoplay: true,
        onplay: () => {
          setIsPlaying(true)
        },
        onpause: () => {
          setIsPlaying(false)
        },
        onstop: () => {
          setIsPlaying(false)
        },
        onload: () => {
          setIsLoading(false)
        },
        onplayerror: () => {
          toast({
            title: 'Error',
            description: 'Error playing audio',
            variant: "destructive"
          })
        },
      })
      howl.play()
      setPlayer(howl)
    }
  }, [station, toast])

  return { station, toggle, isPlaying, isLoading, changeStation }  
}