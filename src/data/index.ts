import { customerHeaders, customerItems } from './customers'
import { orderHeaders, orderItems } from './orders'
import { productHeaders, productItems } from './products'

export default {
  customers: { headers: customerHeaders, items: customerItems },
  orders: { headers: orderHeaders, items: orderItems },
  products: { header: productHeaders, items: productItems }
}
