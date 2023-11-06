import { Item } from "./listItem"

export function List() {
    return (
        <>
            <h1>Lista de Eletrônicos</h1>
            <ul>
                <Item object="celular" brand="Samsung" />
                <Item object="notebook" brand="Asus" />
                <Item object="Tablet" brand="Xiaomi" />
            </ul>
        </>
    )
}