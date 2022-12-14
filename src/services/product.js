import { getApiUrl } from './apiConfig'
import axios from 'axios'

export const getAllProducts = ({ setProductList }) => {
    const productUrl = getApiUrl("product/all")
    axios.get(productUrl, { withCredentials: true }).then((response) => {
        setProductList(response.data)
    })
}
export const getProductsMotor = ({ setProductList }) => {
    const productUrl = getApiUrl("product/all")
    axios.get(productUrl, { withCredentials: true }).then((response) => {
        setProductList(response.data.filter(article => article.category === 'Motor'))
    })
}
export const getProductsIluminacion = ({ setProductList }) => {
    const productUrl = getApiUrl("product/all")
    axios.get(productUrl, { withCredentials: true }).then((response) => {
        setProductList(response.data.filter(article => article.category === 'Iluminacion'))
    })
}
export const getProductsLubricantes = ({ setProductList }) => {
    const productUrl = getApiUrl("product/all")
    axios.get(productUrl, { withCredentials: true }).then((response) => {
        setProductList(response.data.filter(article => article.category === 'Lubricantes'))
    })
}
export const getProductsTrenDelantero = ({ setProductList }) => {
    const productUrl = getApiUrl("product/all")
    axios.get(productUrl, { withCredentials: true }).then((response) => {
        setProductList(response.data.filter(article => article.category === 'Tren Delantero'))
    })
}
export const getBestProducts = ({ setBestProductList }) => {
    const productUrl = getApiUrl("product/best")
    axios.get(productUrl, { withCredentials: true }).then((response) => {
        setBestProductList(response.data)
    })
}
export const saveProduct = ({ product, edit }) => {
    const productUpdateUrl = getApiUrl("product/update")
    const productCreateUrl = getApiUrl("product/create")
    return edit === true ? axios.put(productUpdateUrl, product, { withCredentials: true })
        : axios.post(productCreateUrl, product, { withCredentials: true })
}
export const getProductById = async (id) => {
    const productUrl = getApiUrl(`product/${id}`)
    const response = await axios.get(productUrl, { withCredentials: true })
    return response.data
}
export const getRelatedProducts = async ({ category, id }) => {
    const productUrl = getApiUrl(`product/related/${category}/${id}`)
    const response = await axios.get(productUrl, { withCredentials: true })
    return response.data
}
export const getProductByName =  ({ setProductList }) => {
    const productUrl = getApiUrl("product/search")
    axios.get(productUrl, { withCredentials: true }).then((response) => {
        setProductList(response.target.value)
    })
}