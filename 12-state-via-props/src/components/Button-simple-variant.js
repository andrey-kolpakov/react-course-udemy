function Button(props) {
    const { count, clickOnButtonComponent } = props;
    
    function handleClick() {
        clickOnButtonComponent(count + 1);
    }

    return <button onClick={handleClick}>Click me</button>
}

export default Button;
