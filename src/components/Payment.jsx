export default function Payment({user}) {
    return(
        <>
        <h1>Payment Component</h1>
        <h2>{user.username} {user.balance}</h2>
        </>
    )
}