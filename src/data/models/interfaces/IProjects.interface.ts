import { Level, Type } from "../enums"
import { ITechnology } from "./ITechnology.interface"


export interface IProject {
	id: number
	name: string
	slug: string
	description: string
	images: string[]
	level: Level
	type: Type
	highlighted: boolean
	repository: string
	technologies: ITechnology[]
	frame?: React.ReactNode
}
