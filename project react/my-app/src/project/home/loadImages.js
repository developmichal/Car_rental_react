function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./pic/חברות', false, /\.(jpg|gif|png)$/));

export default images;
