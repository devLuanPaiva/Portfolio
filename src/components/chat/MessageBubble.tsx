import Image from "next/image"
import { ContentMD } from "../shared"
import chatImage from "@/assets/chat.svg"
import { IMessage } from "@/data/models/interfaces"

interface MessageBubbleProps {
	message: IMessage
	omitAuthor?: boolean
}

export function MessageBubble({ message, omitAuthor }: Readonly<MessageBubbleProps>) {
	return message.side === "left" ? (
		<LeftBallon message={message} omitAuthor={omitAuthor} />
	) : (
		<RightBallon message={message} omitAuthor={omitAuthor} />
	)
}

function LeftBallon({omitAuthor, message}: Readonly<MessageBubbleProps>) {
	return (
		<div className="flex gap-4">
			{!omitAuthor && (
				<Image src={chatImage} alt="Assistente" width={40} height={40} />
			)}
			<div className={`flex flex-col ${omitAuthor && "pl-16"}`}>
				{!omitAuthor && (
					<span className="text-xs text-zinc-600">{message.author}</span>
				)}
				<div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl">
					<ContentMD markdown={message.text} />
				</div>
			</div>
		</div>
	)
}
function RightBallon({omitAuthor, message}: Readonly<MessageBubbleProps>) {
	return (
		<div className={`flex flex-col items-end ${omitAuthor && "pr-2"}`}>
			{!omitAuthor && (
				<span className="text-xs text-zinc-600">{message.author}</span>
			)}
			<div className="bg-red-700 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
				<ContentMD markdown={message.text} />
			</div>
		</div>
	)
}
