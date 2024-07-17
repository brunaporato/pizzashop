import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log(data)

      toast.success('Account created successfully!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/signin'),
        },
      })
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    }
  }

  return (
    <>
      <Helmet title="Sign Up" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="secondary">
          <Link to="/signin">Login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create a free account
            </h1>
            <p className="text-sm text-muted-foreground">
              Become a partner and start tracking your sales!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Company&apos;s name</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Your name</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail address</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Create account
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By creating an account, you agree to our{' '}
              <a href="#" className="underline underline-offset-4">
                terms of service
              </a>{' '}
              and{' '}
              <a href="#" className="underline underline-offset-4">
                privacy policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
