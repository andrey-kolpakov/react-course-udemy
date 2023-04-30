function generateRandomNum(props) {
    const { maxNum } = props;

    return Math.floor(Math.random() * maxNum);
}

export default generateRandomNum;
