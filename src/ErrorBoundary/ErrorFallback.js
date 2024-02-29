export default function ErrorFallback({error}) {
    return (
        <div>
        <h4>Something went wrong....</h4>
        <pre style={{color:'red'}}>
            {error.message}</pre>
        </div>
    )
}

/*
What can't an error boundary catch
Errors in the ErrorBoundary
Errors in event handler
Errors in server-side rendering
Errors in asynchronous code 

*/