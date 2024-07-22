export function valRes(setData: any) {
    const res: any[] = [];
    const s = setData;
    for (let it = s.values(), val = null; val = it.next().value;) {
        res.push(val);
    }
    return res;
}
