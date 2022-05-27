export const navString = `
    const Nav = () => {
        return (
        <NavBar>
            <Link to="/" exact>
            <span>Home</span>
            </Link>
    
            <Link to="styled" exact>
            <span>Styled Component Example</span>
            </Link>
    
            <Link to="svg" exact>
            <span>SVG Example</span>
            </Link>
        </NavBar>
        );
    };

    export default Nav;
`