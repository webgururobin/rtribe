'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { handleRegister } from '../actions'
import { useState } from 'react'
import { toast } from 'sonner'

const Newsletter = () => {
    const [email, setEmail] = useState<string>('')
    const [state, setState] = useState<{ success: boolean } | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const formAction = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        try {
            setLoading(true)
            const result = await handleRegister(state, formData)
            setState(result)

            if (result?.success) {
                toast("You'll be notified soon!")
                setEmail('')
                setLoading(false)
            }
        } catch (error) {
            console.error('Registration failed:', error)
            toast.error("Error registering. Please try again.")
            setLoading(false)
        }
    }

    return (
        <form onSubmit={formAction} className='flex flex-col gap-4'>
            <Input
                className='max-w-[300px] py-6 rounded-none border-orange text-white'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
            />
            <Button
                type='submit'
                variant='ghost'
                className='border border-orange font-nippo font-bold text-2xl text-orange uppercase bg-none rounded-none py-6 w-fit'
                disabled={loading}
            >
                Get Notified
            </Button>
        </form>
    )
}

export default Newsletter
