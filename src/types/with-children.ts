import { ReactNode } from "react"

/**
 * This was created to get rid of a TypeScript warning
 */
export type WithChildren<T = {}> = T & {
    children: ReactNode
}