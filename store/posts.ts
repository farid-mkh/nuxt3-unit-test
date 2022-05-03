import { defineStore } from 'pinia'
import { $fetch } from 'ohmyfetch'

interface Post {
    completed: boolean
    id: number
    title: string
    userId: number
}

export const usePostStore = defineStore({
    id: 'posts',
    state: () => ({
        posts: [] as Post[],
    }),
    actions: {
        async getPosts() {
            const data = await $fetch('https://jsonplaceholder.typicode.com/todos')
            this.posts = data
            return this.posts
        }
    },
})