import { customerHeaders, customerItems } from './customers'
import { orderHeaders, orderItems } from './orders'
import { productHeaders, productItems } from './products'
import { boatHeaders, boatItems } from './boat'

export default {
  customers: { headers: customerHeaders, items: customerItems },
  orders: { headers: orderHeaders, items: orderItems },
  products: { headers: productHeaders, items: productItems },
  boat: { headers: boatHeaders, items: boatItems }
}
