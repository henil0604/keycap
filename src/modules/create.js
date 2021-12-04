import getAll from "./getAll";

export default (data) => {

    let all = getAll();

    data.id = CryptoJS.MD5(JSON.stringify(data)).toString();
    data.data = CryptoJS.AES.encrypt(data.text, data.password).toString();
    delete data.text;
    delete data.password;

    all.push(data);

    localStorage.setItem("__KEYCAP", JSON.stringify(all));

    return data;
}