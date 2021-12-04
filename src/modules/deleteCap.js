import getAll from './getAll';

export default (id) => {

    const All = getAll();

    const newAll = All.filter(item => item.id !== id);

    localStorage.setItem('__KEYCAP', JSON.stringify(newAll));
}