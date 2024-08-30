export default function Home() {
    return (
        <main className="flex h-screen w-full flex-col gap-2 bg-slate-300 p-5">
            <h1 className="text-xl">This is just an example</h1>
            <p>
                You can click
                <a href="/playwright" className="text-red-600">
                    {' '}
                    here{' '}
                </a>
                but this is just for the playwright example test...
            </p>
        </main>
    )
}
