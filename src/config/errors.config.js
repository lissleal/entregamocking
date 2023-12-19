const productsErrors = {
    PRODUCT_NOT_FOUND: "El producto no se ha encontrado",
    PRODUCT_NOT_CREATED: "El producto no se ha podido crear",
    PRODUCT_NOT_UPDATED: "El producto no se ha podido actualizar",
    PRODUCT_NOT_DELETED: "El producto no se ha podido eliminar",
    PRODUCT_ALREADY_EXISTS: "El producto ya existe"
}

const usersErrors = {
    USER_NOT_FOUND: "El usuario no se ha encontrado",
    USER_NOT_CREATED: "El usuario no se ha podido crear",
    USER_NOT_UPDATED: "El usuario no se ha podido actualizar",
    USER_NOT_DELETED: "El usuario no se ha podido eliminar",
    USER_ALREADY_EXISTS: "El usuario ya existe"

}

const cartsErrors = {
    CART_NOT_FOUND: "El carrito no se ha encontrado",
    CART_NOT_CREATED: "El carrito no se ha podido crear",
    CART_NOT_UPDATED: "El carrito no se ha podido actualizar",
    CART_NOT_DELETED: "El carrito no se ha podido eliminar",
    CART_ALREADY_EXISTS: "El carrito ya existe"

}

export default function getProductsErrors(errorType) {
    const error = productsErrors[errorType] || "Error desconocido"
    return { error: error }
}

export function getUsersErrors(errorType) {
    const error = usersErrors[errorType] || "Error desconocido"
    return { error: error }
}

export function getCartsErrors(errorType) {
    const error = cartsErrors[errorType] || "Error desconocido"
    return { error: error }
}