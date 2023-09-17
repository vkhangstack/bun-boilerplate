import { Router } from "express"

class ApiRoute {
  constructor() {
    this.route = this.route.bind(this)
  }

  route() {
    const router = Router()

    return router
  }
}

export default new ApiRoute()
