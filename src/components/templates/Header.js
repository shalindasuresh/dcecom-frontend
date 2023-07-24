import MetaMaskLogin from '../MetaMaskLogin';
const Header = () => {
return (

 <div>   

<header>
        <div class="logo">Your Logo</div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <div class="login-button">
        <MetaMaskLogin></MetaMaskLogin>
        </div>
    </header>

</div>
)
}


export default Header;