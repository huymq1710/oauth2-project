"use client"
import * as z from "zod"
import {CreateTodo, Todo} from "@/schemas/Todo";

// const API_URL = "http://localhost:8000/"
const API_URL = "http://localhost/" // Use when having nginx reverse proxy
export const createTodo = async (todo: z.infer<typeof CreateTodo>) => {
    const validatedFields = CreateTodo.safeParse(todo)
    if (!validatedFields.success) {
        const validate_error = JSON.parse(validatedFields.error.message)
        return {error: validate_error[0].message}
    }

    const {title} = validatedFields.data
    const data = {
        title: title,
        description: ""
    }

    try {
        // create a todo
        const response = await fetch(API_URL, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (response.status == 201) {
            const result = await response.json()
            console.log(result)
            return {success: "Success", todo: result}
        } else {
            return {error: "Todo failed!"}
        }
    } catch (e) {
        console.error(e)
    }
}

export const getTodos = async () => {
    try {
        // get todos
        const response = await fetch(API_URL, {
            credentials: 'include'
        })
        if (response.status == 200) {
            const result = await response.json()
            return result;
        }
    } catch (e) {
        console.error(e)
    }
}

export const deleteTodo = async (id: string) => {
    try {
        // delete todo
        const response = await fetch(`${API_URL}${id}`, {
            method: 'delete',
            credentials: 'include'
        })
        if (response.status == 204) {
            return true;
        }
    } catch (e) {
        console.error(e)
        return false;
    }
}

export const completeTodo = async (id: string) => {
    try {
        // complete todos
        const response = await fetch(`${API_URL}${id}/complete`, {
            method: 'post',
            credentials: 'include'
        })
        if (response.status == 200) {
            return true;
        }
    } catch (e) {
        console.error(e)
        return false;
    }
}

export const incompleteTodo = async (id: string) => {
    try {
        // withdraw todos
        const response = await fetch(`${API_URL}${id}/incomplete`, {
            method: 'post',
            credentials: 'include'
        })
        if (response.status == 200) {
            return true;
        }
    } catch (e) {
        console.error(e)
        return false;
    }
}


export const updateTodo = async (todo: z.infer<typeof Todo>, id: string) => {
    const validatedFields = Todo.safeParse(todo)
    if (!validatedFields.success) {
        const validate_error = JSON.parse(validatedFields.error.message)
        return {error: validate_error[0].message}
    }

    const {title, description} = validatedFields.data
    const data = {
        title: title,
        description: description,
    }

    try {
        // update todos
        const response = await fetch(`${API_URL}${id}`, {
            method: 'put',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (response.status == 200) {
            const result = await response.json()
            console.log(result)
            return {success: "Success", todo: result}
        } else {
            return {error: "Todo failed!"}
        }
    } catch (e) {
        console.error(e)
    }
}
