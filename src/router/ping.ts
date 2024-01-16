import { Router } from "express"

class PingRoute {
  constructor() {
    this.route = this.route.bind(this)
  }

  route() {
    const router = Router()
    router.all('', (req, res) => {
        console.log("request ping....")
        res.json({
            code: "200",
            data: {
                requestIp: req.ip,
                browser: req.useragent?.browser,
                geoIp: req.useragent?.geoIp,
            },
            message: "pong!"
        })
    })
    return router
  }
}

export default new PingRoute()
