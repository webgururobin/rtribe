'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { handleRegister } from '../app/actions'
import { useState } from 'react'
import { toast } from 'sonner'
import ArrowDark from './ArrowDark'

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
        <form onSubmit={formAction} className='flex max-sm:w-full max-w-screen-sm  px-2 z-10 relative'>
            <div className='flex-1 border-orange border-b-0'>
                <span className='text-[#F05A28] font-nippo font-normal text-left block border-orange border-[1px] border-b-0 text-[20px] uppercase tracking-[2] px-4'>Join the Tribe</span>
                <Input
                    className='max-w-full py-6 rounded-none border-orange text-white font-general font-bold bg-[#1E1E1E] !text-2xl px-4'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    required
                />
            </div>
            <Button
                type='submit'
                variant='ghost'
                className='border-0 border-orange font-nippo font-bold text-xl md:text-2xl text-white uppercase bg-none rounded-none py-6 w-fit self-end pl-0 bg-orange justify-start'
                disabled={loading}
            >
                <ArrowDark className='!size-8' />
                <span className='flex-1'>Send</span>
            </Button>
        </form>
    )
}

export default Newsletter
