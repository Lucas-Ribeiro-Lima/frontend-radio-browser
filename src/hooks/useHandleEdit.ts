import { ChangeEvent, useCallback, useState } from "react"

type useHandleEditProps = {
  stationuuid: string
  name: string
  tags: string
  editFunction: (uuid: string, name: string, tags: string) => void
}

export function useHandleEdit({ stationuuid, name, tags, editFunction}:  Readonly<useHandleEditProps>) {
  const [ editedName, setEditedName ] = useState(name)
  const [ isEditing, setIsEditing ] = useState(false)


  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value)
  }, [])

  const saveChange = useCallback(() => {
    editFunction(stationuuid, editedName, tags)
    setIsEditing(false)
  }, [stationuuid, editedName, tags, editFunction])

  const toggleEdit = useCallback(() => {
    setIsEditing(prev => !prev)
  }, [])

  return { isEditing, toggleEdit, onChange, saveChange }
}