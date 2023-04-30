function PathInfo(props) {
    const { type, age, hasPet } = props;

    return hasPet ? (
        <h1>
            {" "}
            My {type} is {age} years old
        </h1>
    ) : (
        <h2>I don't have an animal</h2>
    );
}

export default PathInfo;

//Это называется условный рендеринг, когда мы выбираем что зарендерить