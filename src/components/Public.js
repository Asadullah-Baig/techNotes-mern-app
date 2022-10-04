import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Asad Baig. Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Foo City, Asad Baig. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Asad Baig. Repairs<br />
                    555 Foo Drive<br />
                    Malir City, KHI 12345<br />
                    <a href="tel:+15555555555">(021) 555-5555</a>
                </address>
                <br />
                <p>Owner: Asadullah Baig</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public