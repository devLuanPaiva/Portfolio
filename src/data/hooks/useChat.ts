"use client"
import { useState } from "react"
import { useSessionStorage } from "./"
import { IMessage } from "../models/interfaces"
import { toTalk, toGenerate } from "../functions"

export function useChat() {
	const [chatId] = useSessionStorage<string>("chatId", toGenerate())
	const [messages, setMessages] = useSessionStorage<IMessage[]>("messages", [])
	const [thinking, setThinking] = useState(false)

	const addMessage = async (text: string) => {
		try {
			setThinking(true)
			const newMessage: IMessage = {
				id: toGenerate(),
				text,
				author: "Visitante",
				side: "right",
			}
			setMessages([...messages, newMessage])
			const response = await toTalk({chatId: chatId, message: newMessage})

			if (!response) return
			const responseMessage: IMessage = {
				id: toGenerate(),
				text,
				author: "Assistente",
				side: "left",
			}
			
			setMessages([...messages, responseMessage])
		} finally {
			setThinking(false)
		}
	}
	const clearMessages = () => {
		setMessages([])
	}

	return {
		chatId,
		messages,
		thinking,
		addMessage,
		clearMessages,
	}
}
