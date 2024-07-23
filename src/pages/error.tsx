import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, something went wrong....</h1>
      <p>An error ocurred, you can find more details below:</p>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <p className="mt-2 text-accent-foreground">
        Return to{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          dashboard
        </Link>
      </p>
    </div>
  )
}
