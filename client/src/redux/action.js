export function setMagazinId(id) {

    return { type: "SET_MAGAZIN_ID", payload: id }
}

export function setMagazinDate(date) {

    return { type: "SET_MAGAZIN_DATE", payload: date }
}

export function setMagazinTitle(title) {

    return { type: "SET_MAGAZIN_TITLE", payload: title }
}

export function setMagazinPostes(Post) {

    return { type: "SET_MAGAZIN_POSTES", payload: Post }
}

export function createMagazin(magazin) {

    return { type: "CREATE_MAGAZIN", payload: magazin }
}





