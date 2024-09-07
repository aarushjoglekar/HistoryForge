import { useLocalSearchParams } from 'expo-router'
import DecisionPageComponent from '../components/decisionPageComponent'
import React from 'react'

export default function decisionPage() {
  let params = useLocalSearchParams()
  params = params["args"]
  params = JSON.parse(params)
  return (
    <DecisionPageComponent Args = {params}/>
  )
}