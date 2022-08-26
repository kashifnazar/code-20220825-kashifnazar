import { ReactNode } from "react"

/**
 * This was created to get rid of a TypeScript warning
 */
export type WithImage<T = {}> = T & {
    image: string
}